import React from 'react'
import {Box, Heading, Text, ThemeProvider} from '@primer/react'
import useSiteMetadata from '../hooks/use-site-metadata'
import Container from './container'

function Hero() {
  const {title, description} = useSiteMetadata()

  return (
    <ThemeProvider colorMode="night" nightScheme="dark_dimmed">
      <Box sx={{bg: 'canvas.default', py: 6}}>
        <Container>
          <Heading as="h1" sx={{color: 'accent.fg', fontSize: 7, m: 0}}>
            {title}
          </Heading>
          <Text as="p" sx={{m: 0, color: 'fg.onEmphasis', fontSize: 4}}>
            {description}
          </Text>
        </Container>
      </Box>
    </ThemeProvider>
  )

  return (
    <Box bg="black" py={6}>
      <Container>
        <Heading as="h1" color="white" fontSize={7} m={0}>
          {title}
        </Heading>
        <Text as="p" m={0} color="gray.4" fontSize={4}>
          {description}
        </Text>
      </Container>
    </Box>
  )
}

export default Hero
