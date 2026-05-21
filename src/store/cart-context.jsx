import { createContext } from 'react';

const CartContext = createContext({
    items: [],
    addItemToCard: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
});

export default CartContext;