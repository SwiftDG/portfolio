import { useEffect, useRef } from "react";

export default function SystemScene() {
  const mount = useRef(null);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;

    let disposed = false;
    let frameId;
    let idleId;
    let fallbackId;
    let cleanupScene = () => {};

    const start = async () => {
      const THREE = await import("three");
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0, 0, 8);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      const maxRatio = window.innerWidth < 800 ? 1.2 : 1.5;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxRatio));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const rig = new THREE.Group();
      scene.add(rig);
      const blue = new THREE.LineBasicMaterial({ color: 0x5d7cff, transparent: true, opacity: 0.82 });
      const white = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const orange = new THREE.MeshBasicMaterial({ color: 0xff5b1a });
      const extraMaterials = [];
      const points = [
        [-2.1, 1.2, 0.3], [-0.7, 1.8, -0.5], [0.8, 1.15, 0.5], [2.1, 1.6, -0.2],
        [-1.8, -0.2, -0.8], [-0.3, 0.1, 0.8], [1.4, -0.25, -0.5],
        [-1.1, -1.6, 0.4], [0.5, -1.45, -0.7], [2, -1.2, 0.3],
      ];
      const nodes = points.map((position, index) => {
        const material = index === 5 ? orange : new THREE.MeshBasicMaterial({ color: index % 2 ? 0xffffff : 0x5d7cff });
        if (index !== 5) extraMaterials.push(material);
        const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(index === 5 ? 0.16 : 0.09, 1), material);
        mesh.position.set(...position);
        rig.add(mesh);
        return mesh;
      });
      [[0,1],[1,2],[2,3],[0,4],[1,5],[2,5],[2,6],[3,6],[4,5],[5,6],[4,7],[5,7],[5,8],[6,8],[6,9],[8,9]].forEach(([a, b], index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([nodes[a].position, nodes[b].position]);
        rig.add(new THREE.Line(geometry, index % 4 === 0 ? white : blue));
      });
      const frame = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(5.4, 4.3, 2.5)), white);
      frame.material.opacity = 0.16;
      rig.add(frame);

      let mx = 0;
      let my = 0;
      let scrollY = 0;
      let visible = true;
      let tabVisible = !document.hidden;
      let time = 0;
      const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const pointer = (event) => {
        mx = (event.clientX / innerWidth - 0.5) * 0.7;
        my = (event.clientY / innerHeight - 0.5) * 0.5;
      };
      const scroll = () => { scrollY = Math.min(window.scrollY / Math.max(innerHeight, 1), 1); };
      const resize = () => {
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      const draw = () => {
        if (disposed) return;
        if (visible && tabVisible) {
          time += 0.0025;
          const auto = reduceMotion ? 0 : time;
          rig.rotation.y += ((mx + auto + scrollY * 0.45) - rig.rotation.y) * 0.035;
          rig.rotation.x += ((-my + 0.12 + scrollY * 0.18) - rig.rotation.x) * 0.035;
          renderer.render(scene, camera);
        }
        frameId = requestAnimationFrame(draw);
      };
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: "120px" });
      const visibility = () => { tabVisible = !document.hidden; };

      addEventListener("pointermove", pointer, { passive: true });
      addEventListener("scroll", scroll, { passive: true });
      addEventListener("resize", resize);
      document.addEventListener("visibilitychange", visibility);
      observer.observe(host);
      resize();
      scroll();
      renderer.render(scene, camera);
      draw();

      cleanupScene = () => {
        cancelAnimationFrame(frameId);
        observer.disconnect();
        removeEventListener("pointermove", pointer);
        removeEventListener("scroll", scroll);
        removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", visibility);
        rig.traverse((object) => object.geometry?.dispose());
        blue.dispose();
        white.dispose();
        orange.dispose();
        extraMaterials.forEach((material) => material.dispose());
        renderer.dispose();
        if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
      };
    };

    if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(start, { timeout: 1000 });
    else fallbackId = window.setTimeout(start, 250);

    return () => {
      disposed = true;
      if (idleId) window.cancelIdleCallback(idleId);
      if (fallbackId) window.clearTimeout(fallbackId);
      cleanupScene();
    };
  }, []);

  return <div className="system-scene" ref={mount} aria-hidden="true" />;
}
