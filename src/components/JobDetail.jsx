import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Heading,
} from '@chakra-ui/react';

export default function JobDetail(props) {
  const singleJob = props.jobsData.find(
    job => job.id === props.match.params.jobID
  );
  return (
    <Box>
      <Heading>{singleJob.title}</Heading>
      <Heading>{singleJob.location}</Heading>
      <Heading>{singleJob.url}</Heading>
    </Box>
  );
}
