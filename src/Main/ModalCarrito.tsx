import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import StepperC from './StepperC'
import { useState } from 'react'

export default function ModalCarrito() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [step, setSetep] = useState(1)

    function nextStep() {
        setSetep(step + 1)
    }
    function backStep() {
        setSetep(step - 1)
    }

    return (
        <div>
            <>
                <Button onClick={onOpen}>Proceder a pago</Button>

                <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                    size='xl'
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <StepperC index={step} />

                            <Box hidden={step === 1 ? false : true}>
                                ciudad
                                <Input variant='outline' placeholder='Ciudad' />
                                estado
                                <Input variant='outline' placeholder='Estado' />
                                colonia
                                <Input variant='outline' placeholder='Colonia' />
                                calle
                                <Input variant='outline' placeholder='Calle' />
                                numero
                                <Input variant='outline' placeholder='Numero de casa' />
                            </Box>

                            <Box hidden={step === 2 ? false : true}>
                                ciudad
                                <Input variant='outline' placeholder='Ciudad' />
                                estado
                                <Input variant='outline' placeholder='Estado' />
                                colonia
                                <Input variant='outline' placeholder='Colonia' />
                                calle
                                <Input variant='outline' placeholder='Calle' />
                                numero
                                <Input variant='outline' placeholder='Numero de casa' />
                            </Box>

                            <Box hidden={step === 3 ? false : true}>
                                Muchas gracias !!
                            </Box>


                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={() => backStep()}>
                                Atras
                            </Button>
                            <Button onClick={() => nextStep()} variant='ghost'>Siguiente</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}
