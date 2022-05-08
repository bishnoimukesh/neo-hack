import { Box, Heading, Text, Divider } from '@chakra-ui/react';

const TemplateOne = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Box bg="white" w="100%" minHeight="100vh" p={4} color="black">
      <Box display="flex" justifyContent="space-between" my={4}>
        <Heading as="h2" size="lg">
          {user.firstName} {user.middleName} {user.lastName}
        </Heading>
        <Box>
          <Text fontSize="md">{user.email}</Text>
          <Text fontSize="md">{user.mobileNumber}</Text>
          <Text fontSize="md">{user.address}</Text>
          <Text fontSize="md">{user.twitter}</Text>
        </Box>
      </Box>
      <Divider backgroundColor="black" orientation="horizontal" />
      <Box my={4}>
        <Heading as="h3" size="md">
          Objective
        </Heading>
        <Text fontSize="md" my={4}>
          {user.objective}
        </Text>
      </Box>
      <Divider backgroundColor="black" orientation="horizontal" />
      <Box my={4}>
        <Heading as="h3" size="md">
          Experience
        </Heading>
        <Text fontSize="md" my={4}>
          {user.experience.map((exp, index) => {
            return (
              <Box key={index}>
                <Text>{exp.company}</Text>
                <Text>{exp.designation}</Text>
                <Text>{exp.technology}</Text>
              </Box>
            );
          })}
        </Text>
      </Box>
      <Divider backgroundColor="black" orientation="horizontal" />
      <Box my={4}>
        <Heading as="h3" size="md">
          Skills
        </Heading>
        <Text fontSize="md" my={4}>
          {user.skill.map((skill, index) => {
            return (
              <Box key={index}>
                <Text>{skill.skill1}</Text>
                <Text>{skill.skill2}</Text>
                <Text>{skill.skill3}</Text>
                <Text>{skill.skill4}</Text>
              </Box>
            );
          })}
        </Text>
      </Box>
      <Divider backgroundColor="black" orientation="horizontal" />
      <Box my={4}>
        <Heading as="h3" size="md">
          Projects
        </Heading>
        <Text fontSize="md" my={4}>
          {user.project.map((project, index) => {
            return (
              <Box key={index}>
                <Text>{project.title}</Text>
                <Text>{project.duration}</Text>
                <Text>{project.stacks}</Text>
                <Text>{project.description}</Text>
              </Box>
            );
          })}
        </Text>
      </Box>
    </Box>
  );
};

export { TemplateOne };
