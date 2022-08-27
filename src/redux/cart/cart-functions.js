export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    //add item to cart and update quantity and update product stock
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    //add item to cart and update product stock
    if (cartItemToAdd.stock >= existingCartItem?.quantity) {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
    //add item to cart and update quantity
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    //remove item from cart and update quantity and update product stock
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
}