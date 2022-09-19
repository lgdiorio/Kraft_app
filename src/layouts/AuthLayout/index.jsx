import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    
      <Container minW="100vw" minH="100vh" bg="brand.600" >
        <Flex direction="column" w="100%" alignItems="center" justifyContent="center">
            <Outlet/>
        </Flex>
      </Container>
    
  )
}
