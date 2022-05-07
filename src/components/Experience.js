import { SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react'


const Experience = () => {
    return (
        <>
            <FormControl w="100%">
            <SimpleGrid columns={[3,3]} spacing='40px'>
                <Input placeholder='Designation' />
                <Input placeholder='Company' />
                <Input placeholder='Duration' />
                <Input placeholder='From' type='number'/>
                <Input placeholder='Skills' />
                <Input placeholder='Skills' />
            </SimpleGrid>
            <Button
                type="submit"
                colorScheme="blue"
                my="4"
                // onClick={() => submitFormHandler(user)}
                >
                Update Experiencs
            </Button>
            </FormControl>
        </>
    )
}

export {Experience}