import { Box, SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react'
import axios from 'axios';

const PersonalInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const submitFormHandler = async(userData) => {
        try {
        const data = await axios.post('http://localhost:3200/api/user/update', {...userData, _id: user._id});
        console.log('update success',data);
        } catch (error) {
            console.log('Update Failed!', error);
        }
    };
    return (
        <>
        <FormControl w="100%" name="personalInfo">
            <SimpleGrid columns={3} spacing='40px'>
                <Input name="firstName" placeholder='First Name' />
                <Input name="middleName" placeholder='Last Name'/>
                <Input name="lastName" placeholder='Last Name' />
            </SimpleGrid>
            
            <SimpleGrid columns={3} spacing='40px'>
                <Input name="mobileNumber" placeholder='Mobile Number' />
                <Input name="twitter" placeholder='Twitter' />
                <Input name="portfolio" placeholder='Portfolio' />
            </SimpleGrid>

            <SimpleGrid columns={2} spacing='40px'>
                <Input name="address" placeholder='Address' />
            </SimpleGrid>

            <SimpleGrid>
                <Input name="objective" placeholder='Objective' />
            </SimpleGrid>

            <Box display="flex" alignItems="center" justifyContent="space-between">
            <Button
                type="submit"
                colorScheme="blue"
                my="4"
                onClick={() => submitFormHandler(user)}
            >
                Update Profile
            </Button>
        </Box>
        </FormControl>
        </>
    )
}

export  {PersonalInfo};