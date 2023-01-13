import { AiTwotoneMail } from "react-icons/ai"
import { Button } from "@chakra-ui/react";

const IconPlus = ({children}) =>{

    return(

    <>
        <Button colorScheme = "messenger" variant='ghost' leftIcon={<AiTwotoneMail/>}>
            <div> {children}</div>
        </Button>

        <Button colorScheme = "messenger" variant='ghost' leftIcon={<AiTwotoneMail/>}>
            <div> Linked In</div>
        </Button>
    </>
    )
}

export default IconPlus;