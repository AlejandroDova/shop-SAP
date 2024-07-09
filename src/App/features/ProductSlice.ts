import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface productShop {
    id: number;
    name: string;
    price: number;
}

interface productState {
    products: productShop[];
}

const initialState: productState = {
    products: [
        {
            id: 1,
            name: 'playera 1',
            price: 120
        }
    ],
}

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        changeProductView: (state, action: PayloadAction<{ n: number }>) => {
            if (action.payload.n == 1) {
                state.products = [
                    {
                        id: 1,
                        name: 'playera 1',
                        price: 120
                    }
                ]
            } else if (action.payload.n == 2) {
                state.products = [
                    {
                        id: 4,
                        name: 'sudadera 1',
                        price: 300
                    },
                    {
                        id: 5,
                        name: 'sudadora 2',
                        price: 240
                    }
                ]
            } else if (action.payload.n) {
                state.products = [
                    {
                        id: 6,
                        name: 'playera 1',
                        price: 120
                    },
                    {
                        id: 7,
                        name: 'playera 2',
                        price: 120
                    },
                    {
                        id: 8,
                        name: 'playera 3',
                        price: 140
                    },
                    {
                        id: 9,
                        name: 'playera 1',
                        price: 120
                    },
                    {
                        id: 10,
                        name: 'playera 2',
                        price: 120
                    },
                    {
                        id: 11,
                        name: 'playera 3',
                        price: 140
                    }
                ]
            }
        }
    }
});


export const { changeProductView } = ProductSlice.actions;
export default ProductSlice.reducer;