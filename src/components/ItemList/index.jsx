import { useEffect, useState } from "react";
import { Item } from "../Item";
import style from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function ItemList({categoryId, items}) {

  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);

  /*
  const fetchProdutos = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        if(categoryId) {
          // eslint-disable-next-line react/prop-types
          var itensFiltrados = items.filter(function(i) {
            return i.categoryId == categoryId;
          })
          console.log("tentando filtrar");
          console.log(itensFiltrados)
          resolve(itensFiltrados);
        } else {
          resolve(items);
        }
        
      },0)
    })
  }*/

  function filtroProdutos() {
    if(categoryId) {
      console.log("tentando filtrar...")
      var itensFiltrados = items.filter(function(i) {
        console.log(i);
        return i.categoryId == categoryId;
      })
      setProdutos(itensFiltrados);
      setLoading(false);
    } else {
      setProdutos(items);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(items !== undefined) {
      console.log(items);
      filtroProdutos();
    }
  }, [items])
  


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
