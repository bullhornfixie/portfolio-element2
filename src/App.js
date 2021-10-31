import styled from 'styled-components'
import { Flex, Box, Heading, Image, Text } from 'rebass'
import { colors, font, sizes } from './styles/variables'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Layout = ({children}) => {
  return (
    <Flex 
      flexDirection='column' 
      height='100vh' 
      bg={colors.navy}>
      {children}
    </Flex>
  )
}

const Header = () => {
  return (
    <Flex
      height='20vh'
      bg={colors.grey}>
    </Flex>
  )
}


const App = () => {
  return (
    <Layout>
      <Header />
        <Canvas>
          
        </Canvas>
    </Layout>

  );
}

export default App;
