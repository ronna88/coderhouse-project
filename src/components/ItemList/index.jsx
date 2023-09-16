import { useEffect, useState } from "react";
import { Item } from "../Item";
import style from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function ItemList({categoryId, items}) {

  

  useEffect(() => {
    console.log("tentando renderizar aqui");
    console.log(items);
    if(items !== undefined) {
      console.log("entrei aqui");
      console.log(items);
      //filtroProdutos();
    }
  }, [items])

  useEffect(() => {
    console.log("teste 11");
  },[])
  


  return (
    <>
        {
            <Item items={items}/>
          
        }
        
    </>
  )
}
