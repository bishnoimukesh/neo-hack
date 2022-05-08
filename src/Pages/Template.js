import { TemplateOne } from '../components/index';
import { Box, SimpleGrid, GridItem, Image, Button } from '@chakra-ui/react';
import tempImage from '../assets/temp1.png';
import tempImage2 from '../assets/temp2.jpg';
// import {navigate} from 'react-router-dom';

const Template = () => {
    const template = [
        { title: 'Template-1', image: tempImage },
        { title: 'Template-2', image: tempImage2 }
    ]
    // const navigate = useNavigate();

    return (
        <Box display="flex" justifyContent="space-around" p="3rem">
            {template.map((template, index) => {
                return (
                    <Box display="flex" w="100%" h="100%" justifyContent="space-around">
                    <SimpleGrid columns={4}>
                        <GridItem >
                            <Box boxSize='sm'>
                                <Image src={template.image} h="200" w="400" alt='template' />
                                <Button colorScheme='blue'>Use This</Button>
                            </Box>
                        </GridItem>
                    </SimpleGrid>
                    </Box>
                )
            })}
            <TemplateOne />
        </Box>
        

    )
}

export { Template }