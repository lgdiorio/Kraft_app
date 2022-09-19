import { Button, Flex, Input, Image } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

export default function RegisterPage() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        const cpf = data.cpf.replace(/\D/g, '');
        const formatedData = { ...data, cpf };
        console.log(formatedData);


    }

    return (
        <Flex as="form" onSubmit={handleSubmit(onSubmit)} w="506px" direction="column" gap="1rem" marginTop="200" justifyContent="center" alignItems="center" >
            <Image src='/logo.svg' w="506px" />
            <Input
                {...register('name', { required: true })}
                size="lg"
                placeholder='Nome Completo'
                borderColor="black"
                border="2px"
                focusBorderColor='teal.500'
                
            />


            <Input
                {...register('email', { required: true })}
                type="email"
                color="white"
                borderColor="black"
                border="2px"
                focusBorderColor="teal.500"
                placeholder="Email"
                size="lg"
            />

            <Input as={ReactInputMask}
                {...register('cpf', { required: true })}
                mask="999.999.999-99"
                color="white"
                borderColor="black"
                border="2px"
                focusBorderColor="teal.500"
                placeholder="CPF"
                size="lg"

            />

            <Input
                {...register('password', { required: true })}
                type="password"
                color="white"
                borderColor="black"
                border="2px"
                focusBorderColor="teal.500"
                placeholder="Senha"
                size="lg"

            />

            <Button
                type='submit'
                borderRadius="999px"
                size="lg"
                colorScheme={"teal"}
                width="50%"
            >
                Entrar
            </Button>
        </Flex>
    )
}
