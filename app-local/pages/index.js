import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  
  return (
    
    <Container>
      <Box pt = "10px" borderRadius = 'lg' bg = '#ffffff40' p = {3} mb = {5} mt = {5} align = "center">
      I&apos;m Software Developer based in Canada.
      </Box>

      <Box display={ {md:'flex'}}>
        <Box flexGrow = {1}>
          <Heading as = "h2" variant = "page-title">
              Kavichandiran Dharmarajan
          </Heading>
        <p>
           Data Nerd, Code Geek, Tea enjoyer
        </p>
        </Box>


      </Box>
        <Box flexGrow={1}> 
          <Heading as="h3"> Bio </Heading> 
        </Box>


    </Container>
  )


}

export default Page;