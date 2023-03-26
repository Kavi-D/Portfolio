import { chakra } from "@chakra-ui/react"
import { Text, Link, Container, Image} from "@chakra-ui/react"

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
                    <Link color='pink.500' isExternal>
                        {"   "} All rights to the software were passed to Carleton University staff and representitives.
                    </Link>
                    <br></br>
                    Mainly to be used by electrical engineering students to develop hardware that could use the software I am my team developed.
                </Text>
            </Paragraph>


            <Paragraph>
                <Text as='u' color='pink.400'> Purpose:</Text>
                {" "} The project was to design and implement an algorithm that used machine learning to determine if a 
                sample of blood contained a given does of radiation.
                <br></br>
            </Paragraph>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/RDPA/RDPA1.JPG" alt = ''/>
            <Paragraph>
                <Text as='u' color='pink.400'> Use Case:</Text>
                {" "} 
                The main use of the project was to develop the software for a hardware based medical device to be used by healthcare professionals to diagnose patients based on radiation exposure levels.
            </Paragraph>
            <Paragraph>
            <Text as='u' color='pink.400'> Development tools used:</Text>
            {" "}
            Python - automation, weka - for machine learning support, MATLAB libraries for plotting and data analysis/manipulation.
                
            </Paragraph>

            <Paragraph>
            <Text as='u' color='pink.400'> Results:</Text>
            {" "}
            Overall results of the projet were deamed to be successful by lead biomedical researchers in Raman Spectroscopy. As out application could determine a given
            blood sample dosage to a 90% confidence interval with appropriate gui and visual display that a given person can verify with
                
            </Paragraph>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/RDPA/RDPA_gui.JPG" alt = 'feed keystroke pic'/>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/RDPA/RDPA2.jpg" alt = 'feed keystroke pic'/>
            <Image paddingTop="15px" borderRadius="xl" w="full" src = "/images/works/RDPA/RDPA_results.JPG" alt = 'feed keystroke pic'/>


        </Container>

        
    )
}


export default RDPA