import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AiFillGithub }from 'react-icons/ai';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 28px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    font-size: 33px;
  }
`

const Githublogo = () => {
  return (
    <Link href="https://github.com/Kavi-D" scroll={false}>
      <a target = "_blank">
        <LogoBox>
          <AiFillGithub width={10}/>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Githublogo