import {
  Box,
  Container,
  Heading,
  Button,
  Center,
  List,
  ListItem,
  Avatar,
  Image,
  Wrap,
  WrapItem,
  useColorModeValue
} from "@chakra-ui/react";
import Title from "../components/title";
import Paragraph from "../components/Paragraph";
import BulletPoint from "../components/Bulletpoint";
import Link from "next/link";
import IconPlus from "../components/IconPlus";
import { AiTwotoneMail } from "react-icons/ai";
import SectionFrame from "../components/SectionFrame";

const Page = () => {
  return (
    <Container maxW="contianer.md" pt={14}>
      <Box display={{ md: "flex" }}>
        <Wrap spacing="50px">
          <WrapItem>
            <Box flexGrow={1}>
              <SectionFrame delay={0.1}>
                <Heading as="h2" variant="page-title" paddingTop="20px">
                  Kavi Dharmarajan
                </Heading>
                <p>Data Nerd, Coffee enjoyer, Growing Engineer</p>
              </SectionFrame>
              <SectionFrame delay={0.2}>
                <Box
                  pt="10px"
                  borderRadius="lg"
                  bg="#ffffff40"
                  p={3}
                  mb={5}
                  mt={5}
                  align="center"
                >
                  Hey!, I&apos;m Software Developer raised in Canada.
                </Box>
              </SectionFrame>
            </Box>
          </WrapItem>
          <SectionFrame delay={0.4}>
            <WrapItem>

              
              <Image
                alt="Kavi Dharmarajan"
                borderRadius="full"
                src="https://media.licdn.com/dms/image/C4E03AQFV0AizMu9V5Q/profile-displayphoto-shrink_200_200/0/1653927408171?e=1680739200&v=beta&t=PHUm-wvsTNjC3-WmwUsDpQQS45tWDA0HRxGjAcL8K7M"
              />
            </WrapItem>
          </SectionFrame>
        </Wrap>
      </Box>

      <SectionFrame delay={0.3}>
        <Box flexGrow={1}>
          <Title> About </Title>
          <Paragraph>
            {" "}
            I am a new graduate who enjoys tinkering with new and growing
            technologies, and overall loves to engineer or reverse engineer
            applications suited to help the current enconomy grow in a positive
            light.
          </Paragraph>
          <Paragraph>
            {" "}
            I have worked on several projects in my past that range between,
            high level machine learning, database design and optimization ,to
            web development such as this portfolio website. I am open to
            learning and discovering new things, since my goal is to provide
            some level of engineering that can help the world in one way or
            another 🙃.
          </Paragraph>
        </Box>
      </SectionFrame>

      <SectionFrame delay={0.6}>
        <Box paddingTop="10px" flexGrow={1}>
          <Title> Bio </Title>
          <BulletPoint date="1997"> Born in Africa </BulletPoint>
          <BulletPoint date="1999"> Raised in Canada </BulletPoint>
          <BulletPoint date="2010">
            {" "}
            First experieence Drinking Coffee ☕
          </BulletPoint>

          <BulletPoint date="2020">
            {" "}
            Graduated from Carleton University with a in Biomedical & Electrical
            Eng.{" "}
          </BulletPoint>
          <BulletPoint date="2022">
            {" "}
            Graduated from University of Waterloo with a Masters in Computer
            engineering{" "}
          </BulletPoint>
          <BulletPoint date="Current">
            {" "}
            Seeking New opportunities as a Software Engineer/Dev{" "}
          </BulletPoint>
        </Box>
      </SectionFrame>

      <SectionFrame delay={0.7}>
        <Box paddingTop="10px" flexGrow={1}>
          <Title> Contact information </Title>

          <List spacing={3}>
            <ListItem>
              <Button
                colorScheme={useColorModeValue('messenger', 'red')}
                variant="ghost"
                leftIcon={<AiTwotoneMail />}
              >
                <div> Email : kavidharmarajan3@gmail.com</div>
              </Button>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/kavi-dharmarajan-a1ab48203/">
                <Button
                  colorScheme={useColorModeValue('messenger', 'red')}
                  variant="ghost"
                  leftIcon={<AiTwotoneMail />}
                >
                  <div>
                    {" "}
                    LinkedIn : https://www.linkedin.com/kavi-dharmarajan
                  </div>
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </SectionFrame>
    </Container>
  );
};

export default Page;
