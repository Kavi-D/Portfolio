import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AtSignIcon } from '@chakra-ui/icons'
import { AiFillLinkedin } from 'react-icons/ai'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 15px;
  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="https://www.linkedin.com/in/kavichandiran-dharmarajan-a1ab48203/" scroll={false}>
      <a target = "_blank">
        <LogoBox>
          <AiFillLinkedin width={10}/>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Kavi D.
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo