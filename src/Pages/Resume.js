import React, { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';
import {Box, Button} from '@chakra-ui/react';
import {TemplateOne} from '../components/TemplateOne'

const Resume = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Box  p="3rem">
            <Box ref={componentRef}>
                <Button
                type="submit"
                colorScheme="blue"
                my="4"
                onClick={handlePrint}>
                    Print Resume
                </Button>
                <TemplateOne />
            </Box>
        </Box>
    )
}

export {Resume}