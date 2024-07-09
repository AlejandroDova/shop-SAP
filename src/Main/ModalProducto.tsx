import { Button, CardBody, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { productShop } from '../App/features/ProductSlice'
import './main.css'

export default function ModalProducto(producto: productShop) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <CardBody cursor='pointer' onClick={onOpen}>
                <Image
                    h={[300, 350, 375]}
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        ${producto.price}
                    </Text>
                </Stack>
            </CardBody>

            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size='xl'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{producto.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            className='imagenhover'
                            h={[300, 350, 375]}
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />

                        <Text mt='5'>Descripcion</Text>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant='ghost'>Agregar al carrito</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
