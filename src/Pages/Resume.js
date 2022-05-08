import React, { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';
import {Box} from '@chakra-ui/react';

const Resume = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Box display="flex" justifyContent="space-around" p="3rem">
            <Box ref={componentRef}>
            <button onClick={handlePrint}>Print this out!</button>
            </Box>
        </Box>
    )
}

export {Resume}