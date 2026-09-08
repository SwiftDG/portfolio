import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SystemScene() {
  const mount = useRef(null);
  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    scene.add(rig);
    const blue = new THREE.LineBasicMaterial({ color: 0x5d7cff, transparent: true, opacity: .82 });
    const white = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: .5 });
    const orange = new THREE.MeshBasicMaterial({ color: 0xff5b1a });
    const points = [
      [-2.1,1.2,.3],[-.7,1.8,-.5],[.8,1.15,.5],[2.1,1.6,-.2],
      [-1.8,-.2,-.8],[-.3,.1,.8],[1.4,-.25,-.5],
      [-1.1,-1.6,.4],[.5,-1.45,-.7],[2,-1.2,.3]
    ];
    const nodes = points.map((p, i) => {
      const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(i === 5 ? .16 : .09, 1), i === 5 ? orange : new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffffff : 0x5d7cff }));
      mesh.position.set(...p); rig.add(mesh); return mesh;
    });
    [[0,1],[1,2],[2,3],[0,4],[1,5],[2,5],[2,6],[3,6],[4,5],[5,6],[4,7],[5,7],[5,8],[6,8],[6,9],[8,9]].forEach(([a,b],i)=>{
      const g = new THREE.BufferGeometry().setFromPoints([nodes[a].position,nodes[b].position]);
      rig.add(new THREE.Line(g, i % 4 === 0 ? white : blue));
    });
    const frame = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(5.4,4.3,2.5)), white);
    frame.material.opacity = .16; rig.add(frame);

    let mx = 0, my = 0, raf;
    const pointer = e => { mx = (e.clientX / innerWidth - .5) * .7; my = (e.clientY / innerHeight - .5) * .5; };
    const resize = () => { const w=host.clientWidth,h=host.clientHeight; camera.aspect=w/h; camera.updateProjectionMatrix(); renderer.setSize(w,h,false); };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t=0;
    const draw=()=>{t+=.004; rig.rotation.y += ((mx + (reduce?0:t)) - rig.rotation.y)*.035; rig.rotation.x += ((-my + .12) - rig.rotation.x)*.035; renderer.render(scene,camera); raf=requestAnimationFrame(draw)};
    addEventListener("pointermove",pointer,{passive:true}); addEventListener("resize",resize); resize(); draw();
    return()=>{cancelAnimationFrame(raf);removeEventListener("pointermove",pointer);removeEventListener("resize",resize);renderer.dispose();host.removeChild(renderer.domElement)};
  },[]);
  return <div className="system-scene" ref={mount} aria-hidden="true"/>;
}
