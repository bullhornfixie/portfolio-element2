import styled from 'styled-components'
import { Flex, Box, Heading, Image, Text } from 'rebass'
import { colors, font, sizes } from './styles/variables'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import Layout from './components/layout'

const App = () => {
  return (
    <Layout> 
      <Canvas>

      </Canvas>
    </Layout>
  );
}

export default App;
