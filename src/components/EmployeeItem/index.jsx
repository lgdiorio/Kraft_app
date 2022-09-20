import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function EmployeeItem({fullName,absences, activities,overrallScore}) {
    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            borderRadius="8px"
            border="1px"
            borderColor="gray.200"
            padding="4px 8px"
            alignItems="center"
        >

            <Flex gap="2" alignItems="center"  >
                <Avatar size="md" name={fullName} />
                
                <div>
                  <Text fontSize="sm" fontWeight="700">{fullName}</Text>   
                  <Text fontSize="xs">Faltas/atrasos: {absences}</Text>
                  <Text fontSize="xs">Pontuação Geral: {overrallScore}</Text>
                  <Text fontSize="xs">atividades registradas:{activities}</Text>
                </div>
                
            </Flex>

            <Button variant="outline" colorScheme="teal">
                Adcionar Observações
            </Button>

        </Flex>
    )
}
