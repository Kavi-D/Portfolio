import Link from 'next/link';
import { 
    Container, 
    Box,
    Stack, 
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Button,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react'


const Navbar  = () => { 
    return (
        <Box position = "fixed" as="nav" w="100%" bg = {useColorModeValue('#ffffff40', '#20202380')}
        style = {{ backdropFilter: 'blur(10px)'}}>
        <Container display = "flex" p = {2} maxW = "container.md" wrap = "wrap" algin = "center" justify="space-between">
          <Flex align = "center" mr ={5}>
            <Heading as = "h1" size = "lg" letterSpacing={'tighter'}>
              Logo goes here 
            </Heading>
          </Flex>
        </Container>
        </Box>

    );
}

export default Navbar