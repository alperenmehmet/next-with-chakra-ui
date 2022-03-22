import {
  Heading,
  VStack,
  Text,
  Image,
  Flex,
  Center,
  HStack,
  AspectRatio,
  Stack,
  Divider,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      bg={bgColor}
    >
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <br />
          <Button onClick={toggleColorMode} variant='link'>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems='center' w='full'>
        <AspectRatio ratio={1} w={24}>
          <Image
            src='https://cdn.shopify.com/s/files/1/0066/6065/3123/products/PNY20_Graphic_22_Postcard_Highlands_Comp_6752ec2e-78c5-47d2-a9a3-d87426097f63_360x.jpg?v=1617169920'
            alt='image'
          />
        </AspectRatio>
        <Stack
          spacing={0}
          w='full'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <VStack w='full' spacing={0} alignItems='stretch'>
            <Heading size='md'>Penny Board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size='sm' textAlign='end'>
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size='sm'>$119.00</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size='sm'>$19.99</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Taxes(estimated)</Text>
          <Heading size='sm'>$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent='space-between' w='full'>
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size='lg'>$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
