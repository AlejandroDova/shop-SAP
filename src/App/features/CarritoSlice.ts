import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productShop } from "./ProductSlice";

interface carrito {
    productos: productShop[];
    precioTotal: number;
}

const initialState: carrito = {
    productos: [],
    precioTotal: 0
}

export const CarritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<{ producto: productShop }>) => {
            state.productos.push(action.payload.producto)
            state.precioTotal = state.productos.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0);
        },
        deleteProduct: (state, action: PayloadAction<{ id: number }>) => {
            state.productos = state.productos.filter(producto => producto.id !== action.payload.id)
            state.precioTotal = state.productos.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0);
        },
        deleteAllProduct: (state) => {
            state.productos = []
            state.precioTotal = 0
        }
    }
});

export const { addProduct, deleteProduct, deleteAllProduct } = CarritoSlice.actions;
export default CarritoSlice.reducer;