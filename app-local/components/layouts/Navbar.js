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
    IconButton,
    HStack
} from '@chakra-ui/react'
import Logo from '../Logo';



import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import  Githublogo  from '../Githublogo'
import react from 'react';

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
          
          <HStack spacing = "40px" direction={'column'}>
            <Flex spacing = "20px">
                <Button variant = 'ghost' ml = {3} display={{ base: 'none', md: 'flex' }}>Projects/Works</Button>
                <Button variant = 'ghost' ml = {4} display={{ base: 'none', md: 'flex' }}>About Me</Button>
            </Flex>
                <Githublogo/>
          </HStack>
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