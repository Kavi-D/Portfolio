import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    
    <Container>
      <Box padding-top = "10px" borderRadius = 'lg' bg = '#ffffff40' p = {3} mb = {6} align = "center">
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