import { Flex } from 'rebass'
import { colors } from '../styles/variables'

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
