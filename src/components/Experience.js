import { SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experienceInfo, setexperienceInfo] = useState({
    designation: '',
    company: '',
    duration: '',
    from: '',
    to: '',
    technology: '',
  });
  const user = JSON.parse(localStorage.getItem('user'));
  const submitFormHandler = async experienceData => {
    console.log(experienceData);
    try {
      const data = await axios.post(
        'http://localhost:3200/api/user/updateExperience',
        { experienceData, _id: user._id }
      );
      console.log('update success', data);
    } catch (error) {
      console.log('Update Failed!', error);
    }
  };

  return (
    <>
      <FormControl w="100%" name="experience">
        <SimpleGrid columns={[3, 3]} spacing="40px">
          <Input
            mt={5}
            placeholder="Designation"
            name="designation"
            onChange={e =>
              setexperienceInfo({
                ...experienceInfo,
                designation: e.target.value,
              })
            }
            value={experienceInfo.designation}
          />
          <Input
            mt={5}
            placeholder="Company"
            name="company"
            onChange={e =>
              setexperienceInfo({ ...experienceInfo, company: e.target.value })
            }
            value={experienceInfo.company}
          />
          <Input
            mt={5}
            placeholder="Duration"
            name="duration"
            onChange={e =>
              setexperienceInfo({ ...experienceInfo, duration: e.target.value })
            }
            value={experienceInfo.duration}
          />
          <Input
            mb={5}
            placeholder="From"
            type="date"
            name="from"
            onChange={e =>
              setexperienceInfo({ ...experienceInfo, from: e.target.value })
            }
            value={experienceInfo.from}
          />
          <Input
            mb={5}
            placeholder="To"
            type="date"
            name="to"
            onChange={e =>
              setexperienceInfo({ ...experienceInfo, to: e.target.value })
            }
            value={experienceInfo.to}
          />
          <Input
            mb={5}
            placeholder="Technology"
            name="technology"
            onChange={e =>
              setexperienceInfo({
                ...experienceInfo,
                technology: e.target.value,
              })
            }
            value={experienceInfo.technology}
          />
        </SimpleGrid>
        <Button
          type="submit"
          colorScheme="blue"
          my="4"
          onClick={() => submitFormHandler(user)}
        >
          Update Experiencs
        </Button>
      </FormControl>
    </>
  );
};

export { Experience };
