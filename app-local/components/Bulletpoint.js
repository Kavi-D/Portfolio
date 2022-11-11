import styled from "@emotion/styled";
import react from "react";
import { Heading, Text } from "@chakra-ui/react";

//juist a simple title

const BulletPoint  = ({children, date}) =>{
    return(
        <>

            <Text paddingTop = "5px">
                <Text as = 'b' paddingRight="10px" >{date}</Text>
                {children}  
                
            </Text>
        </>


    );
}


export default BulletPoint;