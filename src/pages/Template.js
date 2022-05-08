import { TemplateOne } from '../components/index';
import { Box, SimpleGrid, GridItem, Image, Button } from '@chakra-ui/react';

const Template = () => {
  const template = [
    { title: 'Template-1', image: '/assets/temp1.png' },
    { title: 'Template-2', image: '/assets/temp2.jpg' },
  ];

  return (
    <Box display="flex" justifyContent="space-around" p="3rem">
      {template.map(template => {
        return (
          <Box display="flex" w="100%" h="100%" justifyContent="space-around">
            <SimpleGrid columns={4}>
              <GridItem>
                <Box boxSize="sm">
                  <Image src={template.image} h="200" w="400" alt="template" />
                  <Button colorScheme="blue">Use This</Button>
                </Box>
              </GridItem>
            </SimpleGrid>
          </Box>
        );
      })}
      <TemplateOne />
    </Box>
  );
};

export { Template };
