import { useState, useEffect, useContext } from "react";
import style from "./styles.module.css";
import { ItemCount } from "../ItemCount";
import { CartContext } from "../../context/cartContext";

//perguntar como desconstruir quando vem um array
// eslint-disable-next-line react/prop-types 
export function ItemDetail({produto}) {
    const [loading, setLoading] = useState(true);
    const [selectedQty, setSelectedQty] = useState(0);
    const [estoqueTotal, setEstoqueTotal] = useState(0);


  // eslint-disable-next-line no-unused-vars
  const { cartItems, addItem, removeItem, clear } = useContext(CartContext);

    useEffect(() => {
        if(produto) {
            console.log(produto);
            setEstoqueTotal(produto.stock)
            setLoading(false);
        }
    }, [produto])

    function onAdd(){
        console.log("add");

        if(selectedQty >= estoqueTotal) {
            alert('Sem mais itens em estoque!');
          } else {
            setSelectedQty(selectedQty+1);
          }

          console.log(cartItems);
    }

    function onRemove(){
        console.log("remove");
        if (selectedQty > 0) {
            setSelectedQty(selectedQty-1);
          } else {
            alert('Item não pode ser menor que 0!');
          }
    }

    useEffect(() => {
       //console.log(selectedQty)
    }, [selectedQty])

    function handleAddCarrinho() {
        addItem(produto, selectedQty);
        setSelectedQty(0);
    }

    function handleRemoveCarrinho() {
        removeItem(produto, selectedQty);
        setSelectedQty(0);
    }

    

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])
    

    return (
        <>
            <div className={style.container}>
                { loading ? "Carregando item..." : (
                    <>
                        <div className={style.imagemProduto}>
                            <img src={produto.image} />
                        </div>
                        <div className={style.detalhesProduto}>
                            <span className={style.titulo}>{produto.title}</span>
                            <span className={style.descricao}>{produto.description}</span>
                            <span className={style.preco}>{produto.price}</span>
                            <ItemCount onAdd={ onAdd } onRemove = { onRemove } selectedQty={ selectedQty }/>
                            <br/>
                            <button className={style.addCarrinho} onClick={handleAddCarrinho}>Adicionar ao Carrinho</button>
                            <br/>
                            <button className={style.addCarrinho} onClick={handleRemoveCarrinho}>Remover do Carrinho</button>
                            
                        </div>
                    </>
                ) }
            </div>
        </>
    )
}