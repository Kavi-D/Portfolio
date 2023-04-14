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
  import Title from '../../components/title';
  import Paragraph from "../../components/Paragraph";
  const RMDRobot = () => {

    return(
        <Container maxW="contianer.md" pt={14}>
            <Link  href='/works'>
            {'<=='} Back to Works
            </Link>
            <Title> Leader/Follower movement Simulaiton (2022)</Title>
            <Text color= 'pink.200' paddingBottom='10px' paddingTop='10px'> Source Code:    
            <Link color='pink.500' href='https://github.com/Kavi-D/Leader-Follower-Vehicle-simulation' isExternal>
                {"   "} https://git.uwaterloo/LDR/Kavi-D
            </Link>

            </Text>

          <Paragraph>
            
          </Paragraph>
        </Container>


        
    )

  }



  export default RMDRobot;