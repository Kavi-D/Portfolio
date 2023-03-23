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
            <Link color='pink.500' href='/works'>
            {'<-'}{' '}Back to Works
            </Link>
        </Text>
        
        <Title>KeyStroke (2022) </Title>

        <Text> Website:    
            <Link color='pink.500' href='https://keystrokeapp.com/' isExternal>
           {"   "} https://keystrokeapp.com/
            </Link>
        </Text>
        <Paragraph>
            {" "}
            {"A Q&A social media platform I worked on while hired by Keystroke team in 2022.\n"}
            A large portion of the functionality of the site and design was done by me  
        </Paragraph>

        <Paragraph>
            {" "}
            <Link as= 'u' color='pink.300'>
            Tech Stack used: 
            </Link>
            {" "}MongoDB, Express, React, Node, and Meteor.js with Jenkins and Bitbucket for version 
            control and CI/CD.
        </Paragraph>

        {/* FOR CHAKRA UI, NEED IMAGE JUST IN THE PUBLIC FOLDER, CHAKRA WILL NOT GO INTO ANY OTHER FOLDER ON ITS OWN TO WORK
         or you could do what I did below and it will repferene the image itself, make sure you have the slash at the very front */}
        <Image  paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/keystroke/keystroke1.PNG" alt = 'first keystroke pic'/>


        <Paragraph>
            I was responsible for implementing several key features on the website, invluding but not limited to, login/registration procedures, email notifications, user comment, notifications etc.
        </Paragraph>
        <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/keystroke/keystroke2.PNG" alt = 'Register keystroke pic'/>
        <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/keystroke/keystroke3.PNG" alt = 'feed keystroke pic'/>



    </Container>
    )
}

export default keystroke
