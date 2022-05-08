import { SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react'


const Project = () => {
    return (
        <>
            <FormControl w="100%" name="project">
            <SimpleGrid columns={[1,3]} spacing='40px'>
                <Input placeholder='Title' />
            </SimpleGrid>
            <SimpleGrid columns={[1,3]} spacing='40px'>
                <Input placeholder='Duration' />
                <Input placeholder='Stacks' />
            </SimpleGrid>
            <SimpleGrid spacing='40px'>
                <Input placeholder='Description' />
            </SimpleGrid>
            <Button
                type="submit"
                colorScheme="blue"
                my="4"
                // onClick={() => submitFormHandler(user)}
                >
                Update Projects
            </Button>
        </FormControl>
        </>
    )
}

export {Project};