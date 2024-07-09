import { Button, ButtonGroup, Card, CardFooter, Divider } from '@chakra-ui/react'
import { productShop } from '../App/features/ProductSlice'
import { useAppDispatch } from '../App/hooks'
import { addProduct } from '../App/features/CarritoSlice'
import ModalProducto from './ModalProducto'

export default function CardProduct(producto: productShop) {

    const dispatch = useAppDispatch()

    function addProductCard() {
        dispatch(addProduct({producto: producto}))
    }

    return (
        <div>
            <Card maxW='sm'>
               
                <ModalProducto name={producto.name} price={producto.price} id={producto.id} />

                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar
                        </Button>
                        <Button onClick={() => addProductCard()} variant='ghost' colorScheme='blue'>
                            Agregar al carrito
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}
