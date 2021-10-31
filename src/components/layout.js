import styled from 'styled-components'
import { Flex, Box, Heading, Image, Text } from 'rebass'
import { colors, font, sizes } from '../styles/variables'

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


export default Layout;
