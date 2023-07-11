import React, { useState } from 'react';
import Header from './Header';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', email, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted:', email, password);
  };

  return (
   <div>
   <Header/>
    <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
   
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
        <Heading as="h2" size="lg" mb={6}>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full" mb={4}>
            Log In
          </Button>
        </form>
        <Text mb={4} textAlign="center">
          Don't have an account?{' '}
          <Link color="blue.500" onClick={handleSignup}>
            Sign up here
          </Link>
        </Text>
      </Box>
    </Flex>
    </div>
  );
};

export default LoginPage;
