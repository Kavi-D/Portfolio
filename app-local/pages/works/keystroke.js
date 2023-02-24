import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio, 
    Button
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'


  const keystroke = ({children}) =>{

    return(

    <>
        <Button colorScheme = "messenger" variant='ghost' >
            <div> {children}</div>
        </Button>

        <Button colorScheme = "messenger" variant='ghost'>
            <div> Linked In</div>
        </Button>
    </>
    )
}

export default keystroke
