import { Avatar, AvatarBadge, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function UserInfo({name, role, avatar = "", notificationCount = ""}) {

    return (

        <Flex alignItems="center" gap="4">
            <Avatar size="md" name= {name} src={avatar}>
                <AvatarBadge boxSize="0.725em" border="none" bg="red.500">
                    <Text color="white" fontSize="2xs">
                        {notificationCount}
                    </Text>
                </AvatarBadge>
            </Avatar>
        <div>
            <Text fontWeight="300" fontSize="small" color="whiteAlpha.700">Bem vindo,</Text>
            <Text fontWeight="700"> {role} {name}</Text>                
        </div>                
        </Flex>


            )
}
