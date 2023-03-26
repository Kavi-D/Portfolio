import { chakra, Text, Link, Container } from "@chakra-ui/react"
import Title from "../../components/title"
import Paragraph from "../../components/Paragraph"

const FEMA = () => { 
    return (

        <Container  maxW="contianer.md" pt={14} >
            <Text>
                <Link color='pink.500' href='/works'>
                {'<-'}{' '}Back to Works
                </Link>


                <Title>
                    Flood Insurance Policy Estimator (2022)
                </Title>

                <Paragraph>
                    A Backend focused application that could appropriately give US flood insurance informaiton
                    to any building owner within 50 states.
                </Paragraph>

                <Paragraph>
                <Text color= 'pink.200' paddingBottom='10px'> Source Code:    
                    <Link color='pink.500' href='https://git.uwaterloo.ca/jpmascar/ece656_project_group2' isExternal>
                        {"   "} https:git.uwaterloo.ca/kd
                    </Link>

                </Text>
                <Text color= 'pink.200' paddingBottom='10px'> Tech Stack used:    
                    <Link color='pink.500' isExternal>
                        {"   "} React, HTML, CSS for basic frontend, 
                    </Link>
                    <Link color='pink.500' isExternal>
                        {"   "} MySQL for backend 
                    </Link>

                </Text>
            </Paragraph>
            </Text>
        </Container>
        
    )
}

export default FEMA