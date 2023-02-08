//contains information based on my projects
//need to have card components
//each card componenet will be have a picture and a little descirption
//each card component- when clicked- will display a modal featuring descriptions
//and any other useful information
import { Box, Button, Image, useDisclosure, Container, Heading, Text} from "@chakra-ui/react";
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

import programmImage from '../public/images/works/programImage.jpg'
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
    bottom: '250px'

}
const Works = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Image
        alt="Kavi Dharmarajan"
        
        src="/images/works/programImage.jpg"
        position="relative"
        zIndex={-1}  
        filter="blur(10px)"
        
        />
        <Container maxW="contianer.sm" pt={1} centerContent>

        <div style={mystyle} >
            <Heading color= 'tomato' as="sm"  size ="lg" position='relative'>
                  Here is
            </Heading>
                
        </div>
        <div style={mystyle} >
            <Text color= 'tomato'  fontSize='35px' as="b" position='relative'>
                  The list of the projects I have made
            </Text>
                
        </div>
        </Container>
        
    <Image alt="other"
    resizeMode='cover'
    blurRadius={3}
    position="relative"
    zIndex={-1}
    filter="blur(3px)"
        src="/images/works/programImage.jpg"/>
    <Container maxW="contianer.md" pt={14} centerContent>
      <div>this is works page needs more work, obviously</div>
      <Button mt={4} onClick={onOpen}>
        Open Modal
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
