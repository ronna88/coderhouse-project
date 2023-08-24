import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import style from "./styles.module.css";

export function ItemDetailContainer() {
    const [produto, setProduto] = useState();

    const item = 
        {
          id: 1,
          title: 'Produto 1',
          description: "Além de ser extremamente leve e macia, ideal pra qualquer ocasião e estação do ano, a Daily T-Shirt  tem impacto ambiental reduzido: 50% menos uso de água e 50% menos emissões de CO2 na sua produção que uma camiseta de algodão, livre do uso de inseticidas e pesticidas. Composição: 96% viscose e 4% elastano",
          price: "R$20.98",
          image_url:'https://th.bing.com/th/id/OIP.brimegRx8S1orCj8ReMOFgHaHG?w=203&h=194&c=7&r=0&o=5&pid=1.7'
        }
    ;

    const getItem = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(item);
          },5000)
        })
      }

      useEffect(() => {
        getItem()
        .then(item => {
          setProduto(item);
        })
      }, [])

    return (
        <>
            <ItemDetail produto={produto}/>
        </>
    )
}