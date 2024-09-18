/* eslint-disable react/no-unescaped-entities */
"use client"
import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
export default function Home() {

  const validEmailProviders = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'icloud.com',
    'protonmail.com',
    'mail.com',
  ];

  const loginSchema = z.object({
    email: z.string()
      .refine(
        (email) => {
          const [, domain] = email.split('@');
          return validEmailProviders.includes(domain.toLowerCase());
        },
        {
          message: 'Email harus menggunakan provider yang valid',
        }
      ),
    password: z.string()
      .min(3, 'Minimal 3 karakter')
      .max(16, 'Maksimal 16 karakter')
  })

  type LoginType = z.infer<typeof loginSchema>

  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<LoginType> = (data) => console.log(data)


  return (
    <Flex justify={"center"} align={'center'} w={'100%'} h={'100vh'} direction={'column'}>
      <Heading mb={'100px'}>Hello World</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex justify={""} align={''} gap={'10px'} direction={'column'}>
          {/* Email Input */}
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input type='email' {...register('email')} />
            {!errors.email ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          {/* Passwor Input */}
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type='password' {...register('password')} />
            {!errors.password ? (
              <FormHelperText>
                Enter the password you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          <Flex>
            <Box backgroundColor={'yellow'} position={'relative'}>
              <Button backgroundColor={'red'} px={'10px'} py={'3px'} translateX={'30px'} translateY={'10px'} type="submit">Submit</Button>
            </Box>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}