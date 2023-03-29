import NextLink from 'next/link';
import Image2 from 'next/image'
import {Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import next from 'next';

//card will just dictate some basic information like Title card and a basic picture


export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
      <LinkBox 
        href={`/works/${id}`}>
        <NextLink href={`/works/${id}`} passHref>
          <LinkOverlay><Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        borderRadius='20%'
        
        zIndex={-1}  
        position="relative"
        width = '500px'
        height = '280px'
      /></LinkOverlay>
        </NextLink>
     
        <Text mt={2} fontSize={20} zIndex={-1} position="relative">
          {title}
        </Text>
        <Text fontSize={14} zIndex={-1} position="relative">{children}</Text>
      </LinkBox>
    </Box>
  )


