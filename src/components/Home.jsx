import { Image, Container, Button } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import search from './searchnew.gif';
import SearchInput from './SearchInput';
import JobsContainer from './JobsContainer';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default function ({
  position,
  location,
  setPosition,
  setLocation,
  isLoading,
  setLoading,
  isFullTimeChecked,
  setFullTimeCheck,
  fetchData,
  jobsData,
  updateJobsData,
}) {
  /* useEffect(async () => {
    fetchData();
  }, []); */
  return (
    <Container>
      <Flex direction="column" justify="center" align="center">
        <Image
          boxSize="150px"
          objectFit="cover"
          size={10}
          src={search}
          alt=""
        />
        <SearchInput inputName="Position" updateSearchValue={setPosition} />
        <SearchInput inputName="Location" updateSearchValue={setLocation} />
        <Checkbox
          my={3}
          size="md"
          onClick={() => setFullTimeCheck(!isFullTimeChecked)}
        >
          Full time only
        </Checkbox>
        <Button size="md" colorScheme="teal" onClick={fetchData}>
          Search
        </Button>
        <JobsContainer jobsData={jobsData} refreshData={fetchData} />
      </Flex>
    </Container>
  );
}
