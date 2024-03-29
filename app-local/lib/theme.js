import { border, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 25,
        textUnderlineOffset: 5,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4,

      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Modal: {
    baseStyle: (props) => ({
      dialog: {
        maxWidth: ["65%", "65%", "65%"],
        minWidth: "65%"
      }
    })
  }
}


const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, colors })
export default theme
