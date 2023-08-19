import { useEffect, useState } from "react";
import { Item } from "../Item";
import style from "./styles.module.css";

export function ItemList() {

  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProdutos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      },2000)
    })
  }

  const items = [
    {
      id: 1,
      title: 'Produto 1',
      price: "R$20.98",
      image_url:'https://th.bing.com/th/id/OIP.brimegRx8S1orCj8ReMOFgHaHG?w=203&h=194&c=7&r=0&o=5&pid=1.7'
    },
    {
      id: 2,
      title: 'Produto 2',
      price:"R$46.98" ,
      image_url : 'https://th.bing.com/th/id/OIP.B_RQaSPreYkDhRcCIfRUNgHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
    },
    {
      id: 3,
      title: 'Produto 3',
      price :"R$15.98 ",
      image_url : 'https://th.bing.com/th/id/OIP.KnBg-X4_NZGMjxamxepjTwHaFj?w=203&h=152&c=7&r=0&o=5&pid=1.7'
    },
    {
      id: 4,
      title: "Produto 4",
      price: "R$12.98",
      image_url: 'https://th.bing.com/th/id/OIP.qqAQQOtjsO-6uYpED84pnAHaJ3?w=203&h=271&c=7&r=0&o=5&pid=1.7'
    }

  ]

  useEffect(() => {
    fetchProdutos()
    .then(produtos => {
      setProdutos(produtos);
      setLoading(false);
    })
  }, [])
  


  return (
    <>
        <div>
            <h1 className="title">Lista de Produtos</h1><br/>
        </div>
        {
          loading ? (<p className={style.loading}>Carregando Produtos...</p>) : (
            <Item items={produtos}/>
          )
        }
        

        
    </>
  )
}
