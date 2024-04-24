import { OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import { CanvasTexture } from "three";

const SPEED = 50;

export const Experience = () => { 
  const theMesh = useRef();
  const startTime = useRef();

  const canvas = useRef(document.getElementById("canvasThing"));

  let w = 1024;
  let h = 1024;

  const start = () => {
    const canvasHolder = canvas.current;

    if (!canvasHolder) return;

    canvasHolder.width = w;
    canvasHolder.height = h;

    const ctx = canvasHolder.getContext("2d");
    
    if (ctx) {
      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, w, h);
    }

    requestAnimationFrame(animate);
  }

  const animate = (time) => {
    const ctx = canvas.current.getContext("2d");

    if (!startTime.current) startTime.current = time;
    const dTime = (time - startTime.current) / 1000;
    if (dTime * SPEED > w / 2) startTime.current = time;
    console.log(dTime)

    const x = w / 2 - (dTime * SPEED);
    console.log(dTime)

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "black";
    ctx.fillRect(x, x, w - 2 * x, h - 2 * x);

    if (theMesh.current) {
      const texture = new CanvasTexture(canvas.current);

      // theMesh.current.material.map = texture;
      theMesh.current.material.displacementMap = texture;
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    start();
  }, [])

  return (
    <>
      <OrbitControls />
      <mesh ref={theMesh} dispose={null}>
        <planeGeometry args={[10, 10, 500, 500]}/>
        <meshStandardMaterial>
          <canvasTexture attach="map" needsUpdate />
          <canvasTexture attach="displacementMap" needsUpdate />
        </meshStandardMaterial>
      </mesh>
      <EffectComposer>
        <SSAO />
      </EffectComposer>
      <pointLight position={[0,30,5]}/>
    </>
  );
};