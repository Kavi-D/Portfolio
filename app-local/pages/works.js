//contains information based on my projects
//need to have card components
//each card componenet will be have a picture and a little descirption
//each card component- when clicked- will display a modal featuring descriptions
//and any other useful information
import { Box, Button, Image, useDisclosure, Container, Heading, Text, SimpleGrid, useColorModeValue} from "@chakra-ui/react";
import {
  Modal,
  extendTheme,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { WorkGridItem } from "../components/workCard";
import SectionFrame from "../components/SectionFrame";

import thumbtest from '../public/images/works/programImage.jpg'
import keystrokethumb from '../public/images/works/keystrokelogo.jpg'
import RDPAthumb from '../public/images/works/RDPA/RDPA2.jpg'
import programmImage from '../public/images/works/programImage.jpg'
import  Title  from "../components/title"
const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          maxWidth: ["95%", "95%", "95%"],
          minWidth: "95%",
          bg: "#00ff00",
        },
      }),
    },
  },
});
const mystyle = {
    position:'relative',
    zIndex:'-1',
    right:'70%',
    left: '2%',
    bottom: '225px'

}
const Works = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Image
        alt="Kavi Dharmarajan"
        boxSize='300px'
        src="/images/works/programImage.jpg"
        position="relative"
        zIndex={-1}  
        borderRadius ='10%'
        filter="blur(8px)"
        width= '1000px'
        />
    <Container maxW="contianer.sm" pt={1} centerContent>

      <div style={mystyle} >
          <Heading color= {useColorModeValue('#00b3b3', '#ff0066')} as="sm"  size ="xl" position='relative'>
                Here is
          </Heading>
              
      </div>
      <div style={mystyle} >
          <Text color= {useColorModeValue('#00b3b3', '#ff0066')} fontSize='35px' as="b" position='relative'>
                The list of the projects I have worked on
          </Text>
              
      </div>
    </Container>
    
    <Title> Main Projects </Title>
    <SimpleGrid columns  = {[1,1,2]} gap={6}>
      <WorkGridItem id="keystroke" title="keystroke" thumbnail={"/images/works/keystrokelogo.jpg"}>
        A  website I worked on at my internship
      </WorkGridItem>

      
      <WorkGridItem id="RDPA" title="Radiation Does Prediction Algorithm" thumbnail={"/images/works/RDPA/RDPA2.jpg"}>
        Data analysis, Machine learning, software Development
      </WorkGridItem>
      <WorkGridItem id="FEMA" title="Flood Insurance Estimator" thumbnail={"/images/works/FEMA/FEMA_thumb.png"}>
        A backend heavy application I made for FEMA staff
      </WorkGridItem>
      <WorkGridItem id="SV2TTS" title="SV2TTS Fuzzer" thumbnail={"/images/works/SV2TTS/TTS2.png"}>
        A fuzzer made to test today{"'"}s TTS audio systems
      </WorkGridItem>

      <WorkGridItem id="RMDRobot" title="Leader/Follower robotics experiment" thumbnail={"/images/works/programImage.jpg"}>
        A Simuation I made using python to test multi robot delivery systems
      </WorkGridItem>
      
    </SimpleGrid>



        
    
    <Container maxW="contianer.md" pt={14} centerContent>
      <div>If you would like to send me a message directly, click the link below</div>
      <Button mt={4} onClick={onOpen}>
        Click here to send me a message
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <Box boxSize="sm">
            <Image
              alt="Kavi Dharmarajan"
              size="lg"
              src="https://media.licdn.com/dms/image/C4E03AQFV0AizMu9V5Q/profile-displayphoto-shrink_200_200/0/1653927408171?e=1680739200&v=beta&t=PHUm-wvsTNjC3-WmwUsDpQQS45tWDA0HRxGjAcL8K7M"
            />
          </Box>
        </ModalContent>
      </Modal>

    </Container>
    </>
  );
};

export default Works;
