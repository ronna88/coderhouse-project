import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {

    const items = [
        {
          id: 1,
          categoryId: 1,
          title: 'Produto 1',
          price: "R$20.98",
          description: "Além de ser extremamente leve e macia, ideal pra qualquer ocasião e estação do ano, a Daily T-Shirt  tem impacto ambiental reduzido: 50% menos uso de água e 50% menos emissões de CO2 na sua produção que uma camiseta de algodão, livre do uso de inseticidas e pesticidas. Composição: 96% viscose e 4% elastano",
          image_url:'https://th.bing.com/th/id/OIP.brimegRx8S1orCj8ReMOFgHaHG?w=203&h=194&c=7&r=0&o=5&pid=1.7'
        },
        {
          id: 2,
          categoryId: 2,
          title: 'Produto 2',
          price:"R$46.98" ,
          description: "Além de ser extremamente leve e macia, ideal pra qualquer ocasião e estação do ano, a Daily T-Shirt  tem impacto ambiental reduzido: 50% menos uso de água e 50% menos emissões de CO2 na sua produção que uma camiseta de algodão, livre do uso de inseticidas e pesticidas. Composição: 96% viscose e 4% elastano",
          image_url : 'https://th.bing.com/th/id/OIP.B_RQaSPreYkDhRcCIfRUNgHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
        },
        {
          id: 3,
          categoryId: 2,
          title: 'Produto 3',
          price :"R$15.98 ",
          description: "Além de ser extremamente leve e macia, ideal pra qualquer ocasião e estação do ano, a Daily T-Shirt  tem impacto ambiental reduzido: 50% menos uso de água e 50% menos emissões de CO2 na sua produção que uma camiseta de algodão, livre do uso de inseticidas e pesticidas. Composição: 96% viscose e 4% elastano",
          image_url : 'https://th.bing.com/th/id/OIP.KnBg-X4_NZGMjxamxepjTwHaFj?w=203&h=152&c=7&r=0&o=5&pid=1.7'
        },
        {
          id: 4,
          categoryId: 2,
          title: "Produto 4",
          price: "R$12.98",
          description: "Além de ser extremamente leve e macia, ideal pra qualquer ocasião e estação do ano, a Daily T-Shirt  tem impacto ambiental reduzido: 50% menos uso de água e 50% menos emissões de CO2 na sua produção que uma camiseta de algodão, livre do uso de inseticidas e pesticidas. Composição: 96% viscose e 4% elastano",
          image_url: 'https://th.bing.com/th/id/OIP.qqAQQOtjsO-6uYpED84pnAHaJ3?w=203&h=271&c=7&r=0&o=5&pid=1.7'
        }
    
      ]


    return (
        <Routes>
            <Route path="/" 
            element={
                <DefaultLayout />
            } >
                <Route path="/" element={<ItemListContainer items={items}/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer items={items}/> } />
                <Route path="/item/:itemId" element={<ItemDetailContainer items={items}/>} />
            </Route>
        </Routes>
    )
}