import { Container, Flex, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Cart from '../src/sections/cart';
import Details from '../src/sections/details';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Container maxWidth='container.xl' padding={0}>
      <Flex h='100vh' py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
