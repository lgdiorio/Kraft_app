import React from 'react'
import { Container, Flex, Grid, GridItem, Link } from '@chakra-ui/react'
import UserInfo from '../../components/UserInfo'
import { Link as RouterLink, Outlet} from 'react-router-dom'

const sidebarItens= [
  {title: "Perfil", route:"./perfil"},
  {title: "Funcionarios", route:"./funcionarios"}, 
  {title: "Feedback", route:"./feedback"}
]

export default function ProfileLayout() {
  return (
    <Grid templateColumns={'275px 1fr'} minW="100vw" minH="100vh" bg="brand.600" padding="30px 16px" >
      <GridItem as="aside" h="100%" bg="transparent" padding="16px" color="white">
        <Flex direction="column" gap="8">
          <UserInfo name="Luiz Gustavo" role="Gestor" notificationCount="10" />
          {
            sidebarItens.map((item, index) => (
              <Link key={index} as={RouterLink} to={item.route} fontSize="lg">
              {item.title}
            </Link>
            ))
          }
        </Flex>
      </GridItem>
     
     <GridItem as="main" h="100%" bg="white" borderRadius="24px" overflow="hidden"> 
          <Outlet />
     </GridItem>

    </Grid>
  )
}

