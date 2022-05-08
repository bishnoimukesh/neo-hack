import { Box, SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useToast } from '../custom-hooks';

const PersonalInfo = () => {
  const [personalInfo, setpersonalInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    twitter: '',
    portfolio: '',
    address: '',
    objective: '',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  const { showToast } = useToast();

  const submitFormHandler = async personalInfoData => {
    console.log(personalInfoData);
    try {
      await axios.post('http://localhost:3200/api/user/update', {
        ...personalInfoData,
        _id: user._id,
      });
      showToast('Info Updated!', 'success');
    } catch (error) {
      showToast(error.response.data, 'error');
    }
  };
  return (
    <>
      <FormControl w="100%" name="personalInfo">
        <SimpleGrid columns={3} spacing="40px">
          <Input
            name="firstName"
            placeholder="First Name"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, firstName: e.target.value })
            }
            value={personalInfo.firstName}
            my={5}
          />
          <Input
            name="middleName"
            placeholder="Middle Name"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, middleName: e.target.value })
            }
            value={personalInfo.middleName}
            my={5}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, lastName: e.target.value })
            }
            value={personalInfo.lastName}
            my={5}
          />
        </SimpleGrid>

        <SimpleGrid columns={3} spacing="40px">
          <Input
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, mobileNumber: e.target.value })
            }
            value={personalInfo.mobileNumber}
            my={5}
          />
          <Input
            name="twitter"
            placeholder="Twitter"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, twitter: e.target.value })
            }
            value={personalInfo.twitter}
            my={5}
          />
          <Input
            name="portfolio"
            placeholder="Portfolio"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, portfolio: e.target.value })
            }
            value={personalInfo.portfolio}
            my={5}
          />
        </SimpleGrid>

        <SimpleGrid columns={2} spacing="40px">
          <Input
            name="address"
            placeholder="Address"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, address: e.target.value })
            }
            value={personalInfo.address}
            my={5}
          />
        </SimpleGrid>

        <SimpleGrid>
          <Input
            name="objective"
            placeholder="Objective"
            onChange={e =>
              setpersonalInfo({ ...personalInfo, objective: e.target.value })
            }
            value={personalInfo.objective}
            my={5}
          />
        </SimpleGrid>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            type="submit"
            colorScheme="blue"
            my="4"
            onClick={() => submitFormHandler(personalInfo)}
          >
            Update Profile
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export { PersonalInfo };
