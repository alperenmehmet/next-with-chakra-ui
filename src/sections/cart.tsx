import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Image,
  Flex,
  Center,
} from '@chakra-ui/react';

const Cart = () => {
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      bg='gray.50'
    >
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <br />
          <span style={{ fontWeight: 'bold' }}> try changing the theme.</span>
        </Text>
      </VStack>
      <Flex>
        <Image
          src='https://cdn.shopify.com/s/files/1/0066/6065/3123/products/PNY20_Graphic_22_Postcard_Highlands_Comp_6752ec2e-78c5-47d2-a9a3-d87426097f63_360x.jpg?v=1617169920'
          alt='image'
          w='96px'
          h='96px'
        />
        <Center>
          <Text w='240px' mx={2} textAlign='center'>
            Penny Board <br />
            <span style={{ fontWeight: 'bold' }}>POSTCARD HIGHLAND 22"</span>
          </Text>
          <Text fontWeight='bold'>€89,99</Text>
        </Center>
      </Flex>
      <Flex>
        <Text mx={2}>Subtotal</Text>
        <Text>€89,99</Text>
      </Flex>
    </VStack>
  );
};

export default Cart;
