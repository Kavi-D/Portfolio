import { chakra } from "@chakra-ui/react"
import { Text, Link, Container } from "@chakra-ui/react"

import Title from "../../components/title"
import Paragraph from "../../components/Paragraph"

const RDPA = () => {

    return (

        <Container  maxW="contianer.md" pt={14} >

            <Text>
                <Link color='pink.500' href='/works'>
                {'<-'}{' '}Back to Works
                </Link>
            </Text>

            <Title paddingTop= '10px'>
                Radiation Does Prediction Application
            </Title>

            <Paragraph>
                <Text> Source Code:    
                    <Link color='pink.500' href='https://keystrokeapp.com/' isExternal>
                        {"   "} All rights to the software were passed to Carleton University staff and representitives.
                    </Link>
                    <br></br>
                    Mainly to be used by electrical engineering students to develop hardware that could use the software I am my team developed.
                </Text>
            </Paragraph>


            <Paragraph>
                <Text as='u' color='pink.400'> Purpose:</Text>
                {" "} The project was to design and implement an algorithm that used machine learning techniques to determine if a 
                sample of blood contained a given does of radiation.
                <br></br>
                The main use of the project was to develop the software for a hardware based medical device that couled be used by healthcare professionals to diagnose patients based on radiation exposure levels.
            </Paragraph>
            <Paragraph>
                <Text as='u' color='pink.400'> Use Case:</Text>
                {" "} 
                The main use of the project was to develop the software for a hardware based medical device that couled be used by healthcare professionals to diagnose patients based on radiation exposure levels.
            </Paragraph>
        </Container>

        
    )
}


export default RDPA