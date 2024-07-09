import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import CardProduct from './CardProduct'
import { useEffect } from 'react'
import { useAppSelector } from '../App/hooks';


export default function Products() {

    const productos = useAppSelector((state) => state.products.products)

    useEffect(() => {
        console.log(productos)
    }, [productos]);

    return (
        <div>
            <Center>
                <SimpleGrid w='auto' maxW='1280' columns={productos.length < 3 ? productos.length < 2 ? 1 : [1, null, 2] : [1, 2, 3]} spacing='40px'>
                    {productos.map((producto) => (
                        <Box height='auto'>
                            <CardProduct name={producto.name} price={producto.price} id={producto.id} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Center>
        </div>
    )
}
