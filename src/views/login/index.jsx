import { Button, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    return (
        <Flex w="506px" direction="column" gap="1rem" marginTop="200">
            <Image src='/logo.svg' />
            <Input
                type="text"
                color="white"
                borderColor="black"
                border="2px"
                focusBorderColor="teal.500"
                placeholder="Usuário"
                _placeholder={{ color: 'gray.500' }}
                size="lg"
            />


            <Input
                type="password"
                color="white"
                borderColor="black"
                border="2px"
                focusBorderColor="teal.500"
                placeholder="Senha"
                size="lg"
            />

            <Button
                onClick={() => navigate('/app')}
                borderRadius="999px"
                size="lg"
                colorScheme={"teal"}
            >
                Entrar
            </Button>
        </Flex>
    )
}
