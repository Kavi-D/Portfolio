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
  const SV2TTS = () =>{

    return(

    <Container  maxW="contianer.md" pt={14} >
        <Text>
            <Link color='pink.500' href='/works'>
            {'<-'}{' '}Back to Works
            </Link>
        </Text>
        
        <Title>Generative audio and text fuzzer for Automatic Multi-speaker Voice cloning systems (2021) </Title>

        <Text color= 'pink.200' paddingBottom='10px' paddingTop='10px'> Source Code:    
            <Link color='pink.500' href='https://git.uwaterloo.ca/jpmascar/ece653-sv2tts' isExternal>
                {"   "} https://git.uwaterloo/SV2TTS/kaviD
            </Link>

        </Text>
        
        <Paragraph>
        <Text color= 'pink.200'> Purpose:  
            <Link>
             {" "}Main use of the project was to form some new form of fuzzing of which would auto-generate multi speaker audio
            to attack current TTS voice cloning systems used today and disrupt cloning outputs through different distortion methods.
            </Link>
        </Text>

        </Paragraph>


        <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/SV2TTS/TTS2.png" alt = 'fema tech stack'/>



    </Container>
    )
}

export default SV2TTS
