import { chakra, Text, Link, Container, Image } from "@chakra-ui/react"
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
                        {"   "} MySQL, Node.js and Express for server side performance
                    </Link>
                    <Link color='pink.500' isExternal>
                        {"   "} and jest and Puppeteer for unit and end-to-end testing
                    </Link>


            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMATECHSTACK.JPG" alt = 'fema tech stack'/>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMAFORMpic.PNG" alt = 'fema tech stack'/>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMAcreateRecordForm.PNG" alt = 'fema tech stack'/>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMApolicySearchID.PNG" alt = 'fema tech stack'/>
            



                </Text>
            </Paragraph>
            </Text>
        </Container>
        
    )
}

export default FEMA