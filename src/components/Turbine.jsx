/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/turbine.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Turbine(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/turbine.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions["TurbineAction"].reset().play();
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Body" geometry={nodes.Body.geometry} material={materials['Wind Turbine']} />
        <mesh name="Head" geometry={nodes.Head.geometry} material={materials['Wind Turbine']} position={[0, 14.985, -0.072]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Connector" geometry={nodes.Connector.geometry} material={materials['Wind Turbine']} position={[0, 14.985, -0.072]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Turbine" geometry={nodes.Turbine.geometry} material={materials['Wind Turbine']} position={[0, 15.009, 1.271]}>
          <mesh name="Blade001" geometry={nodes.Blade001.geometry} material={materials['Wind Turbine']} scale={0.327} />
          <mesh name="Blade002" geometry={nodes.Blade002.geometry} material={materials['Wind Turbine']} rotation={[0, 0, -2.094]} scale={0.327} />
          <mesh name="Blade003" geometry={nodes.Blade003.geometry} material={materials['Wind Turbine']} rotation={[0, 0, 2.094]} scale={0.327} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('models/turbine.glb')
