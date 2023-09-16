import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ItemDetailContainer({items}) {
    const [produto, setProduto] = useState();

    const { itemId } = useParams();

    const getItem = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if(itemId) {
              // eslint-disable-next-line react/prop-types
              var itemSelecionado = items.filter(function(i) {
                return i.id == itemId
              });
              resolve(itemSelecionado);
            }
          },0)
        })
      }

      useEffect(() => {
        getItem()
        .then(item => {
          setProduto(item[0]);
        })
      }, [itemId])

    return (
        <>
            <ItemDetail produto={produto}/>
        </>
    )
}