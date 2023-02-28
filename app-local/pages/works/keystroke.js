import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio, 
    Button,
    Text,
    Image
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link';
import Title from "../../components/title"
import Paragraph from "../../components/Paragraph";
//import thumbtest from '/works/programImage.jpg'
//import Image from 'next/image';
  const keystroke = () =>{

    return(

    <Container  maxW="contianer.md" pt={14} >
        <Text>
            <Link color='teal.500' href='/works'>
            {'<-'}{' '}Back to Works
            </Link>
        </Text>
        
        <Title>KeyStroke (2022) </Title>

        <Text> Live Site Link:    
            <Link color='pink.500' href='https://keystrokeapp.com/' isExternal>
           {"   "} https://keystrokeapp.com/
            </Link>
        </Text>
        <Paragraph>
            {" "}
            A Q&A social media platform used that has a linkedin/facebook style
        </Paragraph>

        {/* FOR CHAKRA UI, NEED IMAGE JUST IN THE PUBLIC FOLDER, CHAKRA WILL NOT GO INTO ANY OTHER FOLDER ON ITS OWN TO WORK
         or you could do what I did below and it will repferene the image itself, make sure you have the slash at the very front */}
        <Image  borderRadius="xl" w="full" src = "/images/works/programImage.jpg" alt = 'first keystroke pic'/>
        <Image  borderRadius="xl" w="full" src = "/images/works/1111.PNG" alt = 'otherlife'/>


    </Container>
    )
}

export default keystroke
