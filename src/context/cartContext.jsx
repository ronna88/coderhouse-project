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
                title: item.title,
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
        if (!isInCart(item.id)) {
            alert("Item não está no carrinho!");
            return;
        }

        const updatedItems = [...cartItems];
        const indice = updatedItems.findIndex(produto => item.id === produto.id);

        if (indice === -1) {
            alert("Erro ao encontrar o item no carrinho!");
            return;
        }

        if (updatedItems[indice].qty - qty === 0) {
            const novoArrayProdutos = updatedItems.filter(p => p.id !== item.id);
            setCartItems(novoArrayProdutos);
        } else if (updatedItems[indice].qty < qty) {
            alert("A quantidade que está tentando remover é maior que a existente no carrinho.");
        } else {
            updatedItems[indice].qty -= qty;
            setCartItems(updatedItems);
        }

        alert("Item atualizado no carrinho");
       
    }


    //return ItemList.findIndex(produto => item.id === produto.id);
    //}

    // eslint-disable-next-line no-unused-vars
    const remove = (item) => {
        console.log("removee");
        const updatedItems = [...cartItems];
        const novoArrayProdutos = updatedItems.filter(p => p.id !== item.id);
        setCartItems(novoArrayProdutos);
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
        clear,
        remove
    }

    return (
        <CartContext.Provider value={cartContextData}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }