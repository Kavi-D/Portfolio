import styled from "@emotion/styled";
import react from "react";
import { Heading } from "@chakra-ui/react";

//juist a simple title

const Title  = ({children}) =>{

    return(
        <>
        <Heading as="h1" size = "lg" fontSize = '30px' variant="section-title">
            {children}
        </Heading>
        </>


    );
}


export default Title;