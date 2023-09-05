import { useState, useEffect } from "react";
import style from "./styles.module.css";
import { ItemCount } from "../ItemCount";

//perguntar como desconstruir quando vem um array
// eslint-disable-next-line react/prop-types 
export function ItemDetail({produto}) {
    const [loading, setLoading] = useState(true);
    const [selectedQty, setSelectedQty] = useState(0);
    const estoqueTotal = 10;

    useEffect(() => {
        if(produto) {
            console.log(produto);
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
    

    return (
        <>
            <div className={style.container}>
                { loading ? "Carregando item..." : (
                    <>
                        <div className={style.imagemProduto}>
                            <img src={produto.image_url} />
                        </div>
                        <div className={style.detalhesProduto}>
                            <span className={style.titulo}>{produto.title}</span>
                            <span className={style.descricao}>{produto.description}</span>
                            <span className={style.preco}>{produto.price}</span>
                            <ItemCount onAdd={ onAdd } onRemove = { onRemove } selectedQty={ selectedQty }/>
                        </div>
                    </>
                ) }
            </div>
        </>
    )
}