import { Box, SimpleGrid, Input, Button, FormControl } from '@chakra-ui/react'


const Skill = () => {
    return (
        <>
        <FormControl w="100%">
            <SimpleGrid columns={[3,3]} spacing='40px'>
                <Input placeholder='Skills' />
                <Input placeholder='Skills' />
                <Input placeholder='Skills' />
                <Input placeholder='Skills' />
                <Input placeholder='Skills' />
                <Input placeholder='Skills' />
            </SimpleGrid>
            <Button
                type="submit"
                colorScheme="blue"
                my="4"
                // onClick={() => submitFormHandler(user)}
                >
                Update Skill
            </Button>
        </FormControl>
        </>
    )
}

export {Skill}