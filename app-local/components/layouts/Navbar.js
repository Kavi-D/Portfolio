import Link from 'next/link';
import NextLink from 'next/link'
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
    useColorModeValue,
    IconButton
} from '@chakra-ui/react'
import Logo from '../Logo';


import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const Navbar  = () => { 
    return (
        <Box position = "fixed" as="nav" w="100%" bg = {useColorModeValue('#ffffff40', '#20202380')}
        style = {{ backdropFilter: 'blur(10px)'}}>
        <Container display = "flex" p = {2} maxW = "container.md" wrap = "wrap" algin = "center" justify="space-between">
          <Flex align = "center" mr ={5}>
            <Heading as = "h1" size = "lg" letterSpacing={'tighter'}>
              <Logo/>
            </Heading>
          </Flex>
          <Box flex={1} align="right">
            <ThemeToggleButton />

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
        </Box>
        
        
    );
}

export default Navbar