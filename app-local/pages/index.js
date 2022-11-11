import { Box, Container, Heading, Button, Center} from '@chakra-ui/react'
import Title from '../components/title';
import Paragraph from '../components/Paragraph';
import BulletPoint from '../components/Bulletpoint';
const Page = () => {
  
  return (
    
    <Container>
      <Box display={ {md:'flex'}}>
        <Box flexGrow = {1}>
          <Heading as = "h2" variant = "page-title" paddingTop="20px">
              Kavi Dharmarajan
          </Heading>
          <p>
            Data Nerd, Coffee enjoyer, Developer
          </p>
        </Box>


      </Box>
        <Box flexGrow={1}> 
          <Title> About </Title>
          <Box pt = "10px" borderRadius = 'lg' bg = '#ffffff40' p = {3} mb = {5} mt = {5} align = "center">
          Hello, I&apos;m Software Developer raised in Canada.
          </Box>
          <Paragraph> I am a new graduate who enjoys tinkering with new and growing technologies,
            and overall loves to engineer or reverse engineer applications suited to help the current enconomy grow in a positive light.
          </Paragraph>
          <Paragraph>  I have worked on several projects in my past that range between, high level machine learning, database design and optimization ,to web development
            such as this portfolio website. I am open to leanring and discovering new things, since my goal is to provide some level of engineering that
            can help the world in one way or another 🙃.
          </Paragraph>
          
        </Box>
        <Center paddingTop = "15px">
          <Box alignItems="baseline">
            <Button colorScheme = "messenger" variant='outline'>My works/Projects</Button>
          </Box>
        </Center>


        <Box paddingTop="10px" flexGrow={1}>
          <Title> Bio </Title>
          <BulletPoint date="1997" > Born in Africa </BulletPoint>
          <BulletPoint date="1999" > Raised in Canada </BulletPoint>
          <BulletPoint date="2010" > First experieence Drinking Coffee ☕</BulletPoint>

          <BulletPoint date="2020" > Graduated from Carleton University with a Bachilors in Biomedical & Electrical Eng. </BulletPoint>
          <BulletPoint date="2022" > Graduated from University of Waterloo with a Masters in Computer engineering </BulletPoint>
          <BulletPoint date="Current" > Seeking New opportunities as a Junior Dev/Engineer </BulletPoint>



        </Box>


    </Container>
  )


}

export default Page;