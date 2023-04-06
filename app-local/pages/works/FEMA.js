import { chakra, Text, Link, Container, Image } from "@chakra-ui/react"
import Title from "../../components/title"
import Paragraph from "../../components/Paragraph"
//import ERdiagram from "../../public/documents/FEMA_ECE656Project.pdf"
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
                </Text>
                <Text color= 'pink.200'>
                    DataBase schema layout Via ER_diagram: 
                    <Link color='pink.500' href= "https://git.uwaterloo.ca/jpmascar/ece656_project_group2/-/blob/master/ERDiagram/FEMA_ECE656Project.pdf" isExternal>
                        {"   "} ER_Diagram.pdf 
                    </Link>
                </Text>

            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMATECHSTACK.JPG" alt = 'fema tech stack'/>

            <Paragraph>
                    The site used a simple form input system where users who created an account would log in and fill out appropriate information
                    of their living situation with their building/buildings
            </Paragraph>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMAFORMpic.PNG" alt = 'fema tech stack'/>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMAcreateRecordForm.PNG" alt = 'fema tech stack'/>
            <Paragraph>
                    The input the user was given is then processed by our system to forma a dynamic query upon the user specifications
                    and then fetches and averages the information from our local SQL database to present a regular average of what costs they might see.
            </Paragraph>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMApicAVG2.PNG" alt = 'fema tech stack'/>
            <Paragraph>
                    Additionally if the user read the cost analysis and wanted to revisit the search without having to re-enter the form, they could search their 
                    account via a policy ID that is randomly generated per user request.
            </Paragraph>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/FEMA/FEMApolicySearchID.PNG" alt = 'fema tech stack'/>
            


                
            </Paragraph>
            </Text>
        </Container>
        
    )
}

export default FEMA