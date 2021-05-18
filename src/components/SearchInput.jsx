import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

export default function SearchInput(props) {
  return (
    <InputGroup size="md" my={2}>
      <InputLeftAddon children={props.inputName} w="90px" />
      <Input
        placeholder="search here..."
        onChange={e => props.updateSearchValue(e.target.value)}
      />
    </InputGroup>
  );
}
