import { Image, Container, Button } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import search from './searchnew.gif';
import SearchInput from './SearchInput';
import JobsContainer from './JobsContainer';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
export default function (props) {
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [jobsData, updateJobsData] = useState([]);
  const [isFullTimeChecked, setFullTimeCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);

  async function showSearchResults() {
    console.log(position);
    console.log(location);
    console.log(isFullTimeChecked);
    setLoading(true);
    let url = '';
    if (isFullTimeChecked) {
      url = `https://striveschool-api.herokuapp.com/api/jobs?description=${position}&full_time=true&location=${location}`;
    } else {
      url = `https://striveschool-api.herokuapp.com/api/jobs?description=${position}&location=${location}`;
    }
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setLoading(false);
      console.log(data);
      return data;
    }
  }

  async function fetchData() {
    if (location !== '' && position !== '') {
      updateJobsData(await showSearchResults());
    }
  }

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
