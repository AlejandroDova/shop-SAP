import { Box, Button, Center, HStack, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../App/hooks'
import { changeProductView } from '../App/features/ProductSlice'


export default function Header() {

    const dispatch = useAppDispatch()

    function changeProduct(n: number) {
        dispatch(changeProductView({ n: n }))
    }

    return (
        <div>
            <Center m='20' h='200px'>
                <div className="Header" >
                    <Center mb='5' color='white'>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                    </Center>

                    <Heading>Bienvenido a Teco</Heading>

                    <Text mt='3' fontSize='md' width='300px'>Catálogo de productos exclusivos de teco.
                        Playeras corte recto, Oversize, sudaderas y más!
                    </Text>

                    <Center>
                        <HStack spacing='4px'>
                            <Box w='40px' h='30px'>
                                <IconButton size='xs' variant='' aria-label='Search database' icon={<SearchIcon />} />
                            </Box>
                            <Box w='auto' h='30px' >
                                <Button onClick={() => changeProduct(1)} size='xs' colorScheme='teal' variant='outline'>
                                    <Text fontSize='sm'>Playeras</Text>
                                </Button>
                            </Box>
                            <Box w='auto' h='30px'>
                                <Button onClick={() => changeProduct(2)} size='xs' colorScheme='teal' variant='outline'>
                                    <Text fontSize='sm'>Sudaderas</Text>
                                </Button>
                            </Box>
                            <Box w='auto' h='30px'>
                                <Button onClick={() => changeProduct(3)} size='xs' colorScheme='teal' variant='outline'>
                                    <Text fontSize='sm'>Oversize</Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Center>
                </div>
            </Center>
        </div>
    )
}
