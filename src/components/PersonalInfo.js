import { Box, SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react'

const PersonalInfo = () => {
    return (
        <>
        <FormControl w="100%">
            <SimpleGrid columns={3} spacing='40px'>
                <Input placeholder='First Name' />
                <Input placeholder='Middle Name' />
                <Input placeholder='Last Name' />
            </SimpleGrid>
            
            <SimpleGrid columns={3} spacing='40px'>
                <Input placeholder='Mobile Number' />
                <Input placeholder='Twitter' />
                <Input placeholder='Portfolio' />
            </SimpleGrid>

            <SimpleGrid columns={2} spacing='40px'>
                <Input placeholder='Address' />
            </SimpleGrid>

            <SimpleGrid>
                <Input placeholder='Objective' />
            </SimpleGrid>

            <Box display="flex" alignItems="center" justifyContent="space-between">
            <Button
                type="submit"
                colorScheme="blue"
                my="4"
                // onClick={() => submitFormHandler(user)}
            >
                Update Profile
            </Button>
        </Box>
        </FormControl>
        </>
    )
}

export  {PersonalInfo};