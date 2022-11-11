import styled from "@emotion/styled";
import react from "react";
import { Box, Text } from "@chakra-ui/react";

//juist a simple title

const Paragraph  = ({children}) =>{

    return(
        <>
        <Box flexGrow={1}> 
          <Text fontSize="md"> {children}</Text>
        </Box>
        </>


    );
}


export default Paragraph;