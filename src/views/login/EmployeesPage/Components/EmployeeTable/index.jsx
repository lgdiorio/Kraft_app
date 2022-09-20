import { Flex } from '@chakra-ui/react'
import React from 'react'
import EmployeeItem from '../../../../../components/EmployeeItem'

const employees = [
    {
        fullName:"Luiz Gustavo Celestino Cintra",
        absences:"9",
        activities:5,
        overrallScore: 100,
    },
    {
        fullName:"Pedro Henrique Gonçalves",
        absences:"3",
        activities:5,
        overrallScore: 100,
    },
    {
        fullName:"Thiago Lima de Almeida",
        absences:"0",
        activities:5,
        overrallScore: 100,
    }
]

export default function EmployeeTable () {

  return (
    <Flex w="100%" direction="column" gap="2" marginTop="8">
        {
            employees.map((employee) => (
                <EmployeeItem {...employee}/>
            ))
        }
    </Flex>
  )
}
