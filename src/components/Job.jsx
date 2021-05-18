import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Heading,
  Link,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function Job(props) {
  return (
    <Link as={RouterLink} to={'/job/' + props.id}>
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
    </Link>
  );
}
