import NextLink from 'next/link';
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay, Image2 } from '@chakra-ui/react'
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
        placeholder="blur"
        width = '500px'
        height = '350px'
      /></LinkOverlay>
        </NextLink>
        
     
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )


