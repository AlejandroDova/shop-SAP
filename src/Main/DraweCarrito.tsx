import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import ItemCarrito from "./ItemCarrito";
import { useAppSelector } from "../App/hooks";
import ModalCarrito from "./ModalCarrito";

export default function DraweCarrito() {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const listcard = useAppSelector((state) => state.carrito);

  useEffect(() => {
    console.log(listcard.productos);
  }, [listcard.productos]);

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Spacer />
        <Box gap="2">
          <Button
            variant="outline"
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          >
            Carrito
          </Button>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>

          <DrawerBody>
            {listcard.productos.map((product) => (
              <ItemCarrito
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))}

            <Flex>
              <Box w="200px" h="75px">
                <Text
                  hidden={listcard.precioTotal === 0 ? true : false}
                  ml="3"
                  mt="3"
                >
                  $ {listcard.precioTotal}
                </Text>
              </Box>
            </Flex>

            <Center>
              <Text hidden={listcard.precioTotal === 0 ? false : true} mt="5">
                No hay articulos
              </Text>
            </Center>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Borrar todo
            </Button>
            <ModalCarrito />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
