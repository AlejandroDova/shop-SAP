import { CloseIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { productShop } from "../App/features/ProductSlice";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../App/features/CarritoSlice";

export default function ItemCarrito(product: productShop) {
  const dispatch = useDispatch();

  function deleteItem(id: number) {
    dispatch(deleteProduct({ id: id }));
  }

  return (
    <div>
      <Flex>
        <Center w="75px">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="md"
          />
        </Center>
        <Box w="200px" h="75px">
          <Text ml="3" mt="3">
            {product.name}
          </Text>
          <Text ml="3">${product.price}</Text>
        </Box>
        <Box h="75px">
          <IconButton
            onClick={() => deleteItem(product.id)}
            mt="3"
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            icon={<CloseIcon />}
          />
        </Box>
      </Flex>
    </div>
  );
}
