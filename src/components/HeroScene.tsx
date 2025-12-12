import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function Orbs() {
  const group = useRef<Group>(null)
  const { viewport } = useThree()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const tiltX = (state.mouse.y || 0) * 0.3
    const tiltY = (state.mouse.x || 0) * 0.4

    if (group.current) {
      group.current.rotation.x = tiltX
      group.current.rotation.y = tiltY
      group.current.position.y = Math.sin(t * 0.6) * 0.05
    }
  })

  const size = Math.min(viewport.width, 6)

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh position={[-0.8, 0.15, 0]}>
          <icosahedronGeometry args={[0.55 * size * 0.12, 1]} />
          <meshStandardMaterial color="#d0b17d" metalness={0.6} roughness={0.25} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.7}>
        <mesh position={[0.9, -0.2, -0.2]}>
          <sphereGeometry args={[0.48 * size * 0.12, 28, 28]} />
          <meshStandardMaterial color="#c49a5f" metalness={0.55} roughness={0.28} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.5}>
        <mesh position={[0.2, 0.4, 0.35]}>
          <torusKnotGeometry args={[0.22 * size * 0.12, 0.06 * size * 0.12, 120, 18]} />
          <meshStandardMaterial color="#ffdea8" metalness={0.4} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="hero-canvas">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }} shadows>
        <color attach="background" args={['#fff8ef']} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 2]} intensity={1} color="#ffdea8" />
        <directionalLight position={[-2, 2, 2]} intensity={0.5} color="#c49a5f" />
        <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={55} />
        <Orbs />
      </Canvas>
    </div>
  )
}
