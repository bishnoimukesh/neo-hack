import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Box } from '@chakra-ui/react';
import { TemplateOne } from '../components';

const Resume = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Box p="3rem">
      <Box ref={componentRef}>
        <button onClick={handlePrint}>Print this out!</button>
      </Box>
      <Box>
        <TemplateOne />
      </Box>
    </Box>
  );
};

export { Resume };
