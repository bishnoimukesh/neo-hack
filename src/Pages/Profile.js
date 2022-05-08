import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import { PersonalInfo, Skill, Experience, Project } from '../components';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" px="4rem">
        <Heading display="flex" justifyContent="center" mt={5} mb={8}>
          Update Profile
        </Heading>
        <Link to="/resume">
          <Button colorScheme="blue" variant="solid">
            Resume
          </Button>
        </Link>
      </Box>

      <Box display="flex" justifyContent="center">
        <Tabs w="90%">
          <TabList justifyContent="space-around">
            <Tab>Personal Info</Tab>
            <Tab>Experience</Tab>
            <Tab>Skills</Tab>
            <Tab>Projects</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <PersonalInfo />
            </TabPanel>
            <TabPanel>
              <Experience />
            </TabPanel>
            <TabPanel>
              <Skill />
            </TabPanel>
            <TabPanel>
              <Project />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export { Profile };
