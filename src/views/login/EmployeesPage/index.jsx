import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import EmployeeTable from './Components/EmployeeTable'

export default function EmployeesPage() {
  return (
    <Grid templateColumns="1fr 369px" h="100%">
      <GridItem w="100%" padding="16px">
          <Text fontSize="2xl" fontWeight="700">Ranking de Funcionarios</Text>

          <EmployeeTable/>

      </GridItem>
      <GridItem bg="gray.600"></GridItem>
    </Grid>
  )
}
