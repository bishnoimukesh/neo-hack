import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import { PersonalInfo, Skill, Experience, Project } from '../components';

const Profile = () => {
  return (
    <>
      <Heading display="flex" justifyContent="center" mt={5} mb={8}>
        Update Profile
      </Heading>

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
