import styled from 'styled-components'
import { Flex, Box, Heading, Image, Text } from 'rebass'
import { colors, font, sizes } from './styles/variables'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import Layout from './components/layout'
import { AmbientLight } from 'three';

// <mesh /> dynmically becomes new THREE.Mesh()
// e.g. new THREE.Mesh( geometry, material )

const ThreeBox = () => {
  return (
    <mesh> 
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach="material" color={colors.hotPink} />
    </mesh>
  )
}

const CanvasContainer = styled.div`
  background: ${colors.white};
  width: 100vw;
  height: 90vh;
  pointer-events: auto; 
`;

// pointer-events: none; will turn off orbitControl

const Banner = styled.div`
  background: ${colors.navy};
  color: ${colors.white};
  position: fixed;
  width: 100vw;
  height: 10vh;
`

const App = () => {
  return (
    <Layout> 
       <Banner />
        <CanvasContainer> 
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5}/>
            <ThreeBox />
          </Canvas>
        </CanvasContainer>  
    </Layout>
  );
}

export default App;
