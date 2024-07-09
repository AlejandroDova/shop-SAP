import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'
import { useEffect } from 'react';

const steps = [
    { title: 'Primero', description: 'Direccion de envio' },
    { title: 'Segundo', description: 'Metodo de pago' },
    { title: 'Tercero', description: 'Confimacion' },
]

export default function StepperC(props:{index:number}) {

    const { activeStep } = useSteps({
        index: props.index,
        count: steps.length,
    })

    useEffect(() => {
        console.log(activeStep)
    }, [props.index]);


    return (
        <div>
            <Stepper index={props.index}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>
                            
                        <Box flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}
