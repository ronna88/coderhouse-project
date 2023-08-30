import { useEffect, useState } from "react";
import { Item } from "../Item";
import style from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function ItemList({categoryId, items}) {

  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProdutos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(categoryId) {
          // eslint-disable-next-line react/prop-types
          var itensFiltrados = items.filter(function(i) {
            return i.categoryId == categoryId;
          })
          resolve(itensFiltrados);
        } else {
          resolve(items);
        }
        
      },2000)
    })
  }

  useEffect(() => {
    fetchProdutos()
    .then(produtos => {
      setProdutos(produtos);
      setLoading(false);
    })
  }, [])
  


  return (
    <>
        {
          loading ? (<p className={style.loading}>Carregando Produtos...</p>) : (
            <Item items={produtos}/>
          )
        }
        
    </>
  )
}
