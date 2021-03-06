import {
  SimpleGrid,
  Input,
  Button,
  FormControl,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const Skill = () => {
  const [skillInfo, setSkillInfo] = useState({
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
  });

  const user = JSON.parse(localStorage.getItem('user'));
  const toast = useToast();

  const submitFormHandler = async skillData => {
    console.log(skillData);
    try {
      const { data } = await axios.post(
        'https://neo-resume-api.herokuapp.com/api/user/updateSkill',
        { skillData, _id: user._id }
      );
      localStorage.setItem('user', JSON.stringify(data));
      toast({
        title: 'Skills Added!',
        position: 'top-right',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      setSkillInfo({
        ...skillInfo,
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        skill6: '',
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
      <FormControl w="100%" name="skill">
        <SimpleGrid columns={[3, 3]} spacing="40px">
          <Input
            mt={5}
            placeholder="Skills"
            name="skill1"
            onChange={e =>
              setSkillInfo({ ...skillInfo, skill1: e.target.value })
            }
            value={skillInfo.skill1}
          />
          <Input
            mt={5}
            placeholder="Skills"
            name="skill2"
            onChange={e =>
              setSkillInfo({ ...skillInfo, skill2: e.target.value })
            }
            value={skillInfo.skill2}
          />
          <Input
            mt={5}
            placeholder="Skills"
            name="skill3"
            onChange={e =>
              setSkillInfo({ ...skillInfo, skill3: e.target.value })
            }
            value={skillInfo.skill3}
          />
          <Input
            mb={5}
            placeholder="Skills"
            name="skill4"
            onChange={e =>
              setSkillInfo({ ...skillInfo, skill4: e.target.value })
            }
            value={skillInfo.skill4}
          />
          <Input
            mb={5}
            placeholder="Skills"
            name="skill5"
            onChange={e =>
              setSkillInfo({ ...skillInfo, skill5: e.target.value })
            }
            value={skillInfo.skill5}
          />
          <Input
            mb={5}
            placeholder="Skills"
            name="skill6"
            onChange={e =>
              setSkillInfo({ ...skillInfo, skill6: e.target.value })
            }
            value={skillInfo.skill6}
          />
        </SimpleGrid>
        <Button
          type="submit"
          colorScheme="blue"
          my="4"
          onClick={() => submitFormHandler(skillInfo)}
        >
          Update Skill
        </Button>
      </FormControl>
    </>
  );
};

export { Skill };
