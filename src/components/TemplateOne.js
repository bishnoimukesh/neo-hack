import {
  Box,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const TemplateOne = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Box
      bg="white"
      w="80%"
      justifyContent="center"
      minHeight="100vh"
      p={4}
      color="black"
      px={10}
    >
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
              <UnorderedList key={index}>
                <ListItem>
                  {exp.company} {exp.designation} {exp.technology}
                </ListItem>
              </UnorderedList>
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
              <UnorderedList key={index}>
                <ListItem>{skill.skill1}</ListItem>
                <ListItem>{skill.skill2}</ListItem>
                <ListItem>{skill.skill3}</ListItem>
                <ListItem>{skill.skill4}</ListItem>
              </UnorderedList>
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
              <UnorderedList key={index}>
                <ListItem>
                  {project.title} {project.duration} {project.stacks}{' '}
                  {project.description}
                </ListItem>
              </UnorderedList>
            );
          })}
        </Text>
      </Box>
    </Box>
  );
};

export { TemplateOne };
