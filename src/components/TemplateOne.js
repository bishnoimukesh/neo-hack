import { Box, Heading, Text, Divider } from '@chakra-ui/react';

const TemplateOne = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Box bg="tomato" w="100%" h="100vh" p={4} color="black">
        <Box display="flex" justifyContent="space-between">
          <Heading as="h2" size="m">
            {user.firstName} {user.middleName} {user.lastName}
          </Heading>
          <Box>
            <Text fontSize="md">{user.email}</Text>
            <Text fontSize="md">{user.mobileNumber}</Text>
            <Text fontSize="md">{user.address}</Text>
            <Text fontSize="md">{user.twitter}</Text>
          </Box>
        </Box>
        <Divider orientation="horizontal" />
        <Box>
          <Heading as="h3" size="lg">
            Objective
          </Heading>
          <Text fontSize="md">{user.objective}</Text>
        </Box>
        <Divider orientation="horizontal" />
        <Box>
          <Heading as="h3" size="lg">
            Experience
          </Heading>
          <Text fontSize="md">{/* {user.experience} */}</Text>
        </Box>
        <Divider orientation="horizontal" />
        <Box>
          <Heading as="h3" size="lg">
            Skills
          </Heading>
          <Text fontSize="md">
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
        <Divider orientation="horizontal" />
        <Box>
          <Heading as="h3" size="lg">
            Projects
          </Heading>
          <Text fontSize="md">
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
    </>
  );
};

export { TemplateOne };
