import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Heading,
} from '@chakra-ui/react';

export default function Job(props) {
  return (
    <Box
      borderWidth="3px"
      borderRadius="lg"
      my={2}
      cursor="pointer"
      _hover={{
        background: 'white',
        color: 'teal.500',
      }}
    >
      <Heading isTruncated as="h3" size="lg" p={2}>
        {props.title}
      </Heading>
    </Box>
  );
}
