import { Box } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import {PersonalInfo} from '../components/index'

const Profile = () => {
    return (
        <>
            <Heading display="flex" justifyContent="center">Update Profile</Heading>
            <Box display="flex" justifyContent="center" >
                <Tabs w="90%" >
                    <TabList justifyContent="space-around">
                        <Tab>Personal Info</Tab>
                        <Tab>Experience</Tab>
                        <Tab>Skills</Tab>
                        <Tab>Projects</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <PersonalInfo/>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>four!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

export { Profile };