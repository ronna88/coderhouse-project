
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import style from "./style.module.css";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ItemListContainer({items}) {
    const { categoryId } = useParams();

    const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);


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
        console.log(categoryId);
        console.log(loading);
        //console log OK - entrando
        filtroProdutos();
    },[loading, categoryId])

    return (
        <>
            <div className={style.container}></div>
            <br/>
            {!loading ? 
                <ItemList categoryId={categoryId} items={produtos}/> :
                "Carregando..."
            }
            
        </>
    );
}