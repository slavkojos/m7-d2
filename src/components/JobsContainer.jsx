import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import Job from './Job';

export default function JobsContainer(props) {
  function listAllJobs() {
    return props.jobsData.map((job, index) => {
      return (
        <Job
          key={index}
          id={job.id}
          url={job.url}
          createdAt={job.created_at}
          location={job.location}
          title={job.title}
          description={job.description}
        />
      );
    });
  }
  return <Box>{listAllJobs()}</Box>;
}
