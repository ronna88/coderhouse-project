import { useState, useEffect } from "react";
import style from "./styles.module.css";

//perguntar como desconstruir quando vem um array
// eslint-disable-next-line react/prop-types 
export function ItemDetail({produto}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(produto) {
            console.log(produto);
            setLoading(false);
        }
    }, [produto])
    

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
                        </div>
                    </>
                ) }
            </div>
        </>
    )
}