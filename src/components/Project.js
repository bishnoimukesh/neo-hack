import { SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const Project = () => {
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    duration: '',
    stacks: '',
    description: '',
  });
  const user = JSON.parse(localStorage.getItem('user'));
  const submitFormHandler = async projectData => {
    console.log(projectData);
    try {
      const data = await axios.post(
        'http://localhost:3200/api/user/updateProject',
        { projectData, _id: user._id }
      );
      console.log('update success', data);
    } catch (error) {
      console.log('Update Failed!', error);
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
        <Button
          type="submit"
          colorScheme="blue"
          my="4"
          onClick={() => submitFormHandler(projectInfo)}
        >
          Update Projects
        </Button>
      </FormControl>
    </>
  );
};

export { Project };
