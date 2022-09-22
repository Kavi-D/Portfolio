import { Box, Container, Heading } from '@chakra-ui/react'
import Navbar from '../components/layouts/Navbar';
const Page = () => {
  return (
    
    <Container>
      <Box borderRadius = 'lg' bg = 'red' p = {3} mb = {6} align = "center">
         I am a Software Developer based in Canada.
      </Box>

      <Box display={ {md:'flex'}}>
        <Box flexGrow = {1}>
          <Heading as = "h2" variant = "page-title">
              Kavi-D.
          </Heading>
        </Box>
        <p>
           Developer/Software Engineer/Data Nerd
        </p>
      </Box>


    </Container>
  )


}

export default Page;