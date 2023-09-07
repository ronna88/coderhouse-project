import { createContext, useState } from "react";

const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const addItem = (item, qty) => {
        const updatedItems = [...cartItems];

        if (isInCart(item.id)) {
            const indice = updatedItems.findIndex(produto => item.id === produto.id);
            if (indice !== -1) {
                // eslint-disable-next-line no-undef
                updatedItems[indice].qty += qty;
                setCartItems(updatedItems);
            }
        } else {
            const novoProduto = {
                id: item.id,
                title: item.titulo,
                description: item.description,
                price: item.price,
                image_url: item.image_url,
                qty: qty
            }
            updatedItems.push(novoProduto)
            setCartItems(updatedItems);
        }
        alert("Item atualizado no carrinho");
    }

    // eslint-disable-next-line no-unused-vars
    const removeItem = (item, qty) => {
        const updatedItems = [...cartItems];
        if (isInCart(item.id)) {
            const indice = updatedItems.findIndex(produto => item.id === produto.id);
            if (indice !== -1) {
                if (updatedItems[indice].qty - qty === 0) {
                    const novoArrayProdutos = updatedItems.filter(p => p.id !== item.id);
                    setCartItems(novoArrayProdutos);
                } else {

                    if (updatedItems[indice].qty < qty) {
                        alert("A quantidade que está tentando remover é maior que a existente no carrinho.");
                    } else {
                        updatedItems[indice].qty = updatedItems[indice].qty - qty;
                        setCartItems(updatedItems);
                    }
                }
            }
            alert("Item atualizado no carrinho");
        } else {
            alert("Item não está no carrinho!");
        }
    }

    // eslint-disable-next-line no-unused-vars
    const clear = () => {
        setCartItems([]);
        alert("Todos os itens foram removidos do carrinho");
    }

    // eslint-disable-next-line no-unused-vars
    const isInCart = (id) => {
        if (cartItems.find((item) => item.id === id)) {
            return true;
        } else { false; }
    }

    const cartContextData = {
        cartItems,
        addItem,
        removeItem,
        clear
    }

    return (
        <CartContext.Provider value={cartContextData}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }