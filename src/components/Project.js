import {
  Box,
  SimpleGrid,
  Input,
  Button,
  FormControl,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    duration: '',
    stacks: '',
    description: '',
  });

  const user = JSON.parse(localStorage.getItem('user'));
  const toast = useToast();

  const submitFormHandler = async projectData => {
    try {
      const { data } = await axios.post(
        'http://localhost:3200/api/user/updateProject',
        { projectData, _id: user._id }
      );
      localStorage.setItem('user', JSON.stringify(data));
      toast({
        title: 'Projects Data Added!',
        position: 'top-right',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      setProjectInfo({
        ...projectInfo,
        title: '',
        duration: '',
        stacks: '',
        description: '',
      });
    } catch (error) {
      toast({
        title: error.response.data,
        position: 'top-right',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <FormControl w="100%" name="project">
        <SimpleGrid columns={[1, 3]} spacing="40px">
          <Input
            my={5}
            placeholder="Title"
            name="title"
            onChange={e =>
              setProjectInfo({ ...projectInfo, title: e.target.value })
            }
            value={projectInfo.title}
          />
        </SimpleGrid>
        <SimpleGrid columns={[1, 3]} spacing="40px">
          <Input
            my={5}
            placeholder="Duration"
            name="duration"
            onChange={e =>
              setProjectInfo({ ...projectInfo, duration: e.target.value })
            }
            value={projectInfo.duration}
          />
          <Input
            my={5}
            placeholder="Stacks"
            name="stacks"
            onChange={e =>
              setProjectInfo({ ...projectInfo, stacks: e.target.value })
            }
            value={projectInfo.stacks}
          />
        </SimpleGrid>
        <SimpleGrid spacing="40px">
          <Input
            my={5}
            placeholder="Description"
            name="description"
            onChange={e =>
              setProjectInfo({ ...projectInfo, description: e.target.value })
            }
            value={projectInfo.description}
          />
        </SimpleGrid>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            type="submit"
            colorScheme="blue"
            my="4"
            onClick={() => submitFormHandler(projectInfo)}
          >
            Update Projects
          </Button>
          <Link to="/resume">
            <Button colorScheme="blue" variant="solid">
              Generate Resume
            </Button>
          </Link>
        </Box>
      </FormControl>
    </>
  );
};

export { Project };
