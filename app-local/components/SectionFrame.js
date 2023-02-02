import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const SectionFrame = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ x: -10, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default SectionFrame