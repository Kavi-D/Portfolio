import Head from 'next/head'
import { Box, Container} from '@chakra-ui/react'

import Navbar from './Navbar'

const Main = ({children, router }) => {
    return (
        <Box as="main" pb = {8}>
            <Navbar path = {router.asPath} position="fixed"/>
            <Head>
                <meta name = "viewport" content="width = device-width, initial-scale =1"/>
                <title> Kavi D - Homepage</title>
            </Head>
            <Container maxW = "container.md" pt = {14}>
                {children}
            </Container>
        </Box>
    ) 
}

export default Main;