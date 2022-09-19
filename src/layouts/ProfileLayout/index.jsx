import React from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'

export default function ProfileLayout() {
  return (
    <Grid templateColumns={'275px 1fr'} minW="100vw" minH="100vh" bg="brand.600" padding="30px 16px" >
        <GridItem as="aside"  h="100%" bg="transparent" />
        <GridItem as="main"  h="100%" bg="white" borderRadius="24px" />
    </Grid>
  )
}

