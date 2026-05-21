import { createContext } from 'react';

const CartContext = createContext({
    items: [],
    addItemToCard: () => {},
    updateItemQuantity: () => {},
});

export default CartContext;