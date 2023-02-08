import { AnimatePresence, motion } from 'framer-motion'
import { Switch, IconButton, useColorMode, useColorModeValue, Button, LightMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from 'react'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const [ Buttonname, setButtonname ] = useState('Toggle Theme')
  return (

    <>
      <Switch size = 'lg' onChange={toggleColorMode} paddingRight = '10px'/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            
            icon={useColorModeValue(<FaSun/>, <FaMoon />)}
          ></IconButton>
          
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default ThemeToggleButton