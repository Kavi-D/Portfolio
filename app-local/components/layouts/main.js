import Head from 'next/head'
import { Box, Container} from '@chakra-ui/react'

const Main = () => {
    return (
        <Box as="main" pb = {8}>
            <Head>
                <meta name = "viewport" content="width = device-width, initial-scale =1"/>
                <title> Kavi D - Homepage</title>
            </Head>
        </Box>
    ) 
}

export default Main;