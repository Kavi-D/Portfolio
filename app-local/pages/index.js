import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    
    <Container>
      <Box borderRadius = 'lg' bg = 'green' p = {3} mb = {6} align = "center">
         I am a Software Developer based in Canada.
      </Box>

      <Box display={ {md:'flex'}}>
        <Box flexGrow = {1}>
          <Heading as = "h2" variant = "page-title">
              Kavi-D.
          </Heading>
        </Box>
        <p>
           Developer/ Data Nerd / Social Drinker
        </p>
      </Box>


    </Container>
  )


}

export default Page;