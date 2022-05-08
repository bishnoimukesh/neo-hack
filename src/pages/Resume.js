import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Box, Button } from '@chakra-ui/react';
import { TemplateOne } from '../components';

const Resume = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Box p="3rem">
      <Button colorScheme="blue" variant="outline" onClick={handlePrint} my={5}>
        Print this out!
      </Button>
      <Box ref={componentRef}>
        <TemplateOne />
      </Box>
    </Box>
  );
};

export { Resume };
