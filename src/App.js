import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JobDetail from './components/JobDetail';
import { useState, useEffect } from 'react';

function App() {
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

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Router>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                position={position}
                location={location}
                setPosition={setPosition}
                setLocation={setLocation}
                isLoading={isLoading}
                setLoading={setLoading}
                isFullTimeChecked={isFullTimeChecked}
                setFullTimeCheck={setFullTimeCheck}
                fetchData={fetchData}
                jobsData={jobsData}
                updateJobsData={updateJobsData}
              />
            )}
          />
          <Route
            exact
            path="/job/:jobID"
            render={props => (
              <JobDetail
                {...props}
                jobsData={jobsData}
                updateJobsData={updateJobsData}
              />
            )}
          />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
