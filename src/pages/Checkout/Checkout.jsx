import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import style from "./style.module.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export function Checkout() {

    const firestore = getFirestore(app);
    const navigate = useNavigate();

    const {cartItems, clear}  = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        name: '',
        email:'',
        phone: ''
    })

    const [order, setOrder] = useState(
        {
            buyer: buyer,
            items: [],
            date: '',
            total: ''
        }
    );

    console.log(cartItems);


    const cadastrarPedido = (order) => {
        console.log("cadastrando pedido...");
        console.log(order);

        addDoc(collection(firestore, "order"), order)
            .then((docRef) => {
                console.log(docRef.id);
                clearOrder();
                clear();
            })
            .catch((error)=> {
                console.log(error);
            })
            
            alert('Pedido efetuado com sucesso !');
            
            navigate("/");
    }

    const clearOrder = () => {
        setOrder ({
            buyer: buyer,
            items: [],
            date: '',
            total: ''
        })
    }


    const handleCheckout = () => {
        event.preventDefault();
        const listItems = [];
        let total = 0;
        for(let i = 0; i<cartItems.length ; i++){
            console.log("1")
            console.log(cartItems);
            console.log("2")
            listItems.push({id:cartItems[i].id});
            total=total+(cartItems[i].qty*cartItems[i].price);
        }
        const date = new Date().toLocaleDateString("pt-BR");
        console.log(date);
        setOrder({...order, buyer:buyer, items:listItems, total:total, date:date})
        //console.log(order);
        //cadastrarPedido(order);
    }


    useEffect(()=>{
        console.log(order)
        if(order.buyer.name !== ''){
            cadastrarPedido(order);
        }
    },[order])

    return (
        <div className={style.container}>
            <h3>
                Checkout
            </h3>
            <div>
                {cartItems.map((item) => {
                    return (
                    <div className={style.content} key={item.id}>
                        <ul className={style.card}>
                            <li>{`Produto: ${item.title}`}</li>
                            <li>{`Quantidade: ${item.qty}`}</li>
                            <li>{`Total: R$ ${item.qty * item.price}`}</li>
                        </ul>
                        
                    </div>
                    )
                })}
            </div>
            <div className={style.formContainer}>
                <form className={style.form}>
                    <input className={style.inputForm} type="text" placeholder="Nome"
                     onChange={(e)=>setBuyer({...buyer, name: e.target.value})} value={buyer.name} />
                    <input className={style.inputForm} type="text" placeholder="Telefone" 
                     onChange={(e)=>setBuyer({...buyer, phone: e.target.value})} value={buyer.phone}/>
                    <input className={style.inputForm} type="text" placeholder="email" 
                     onChange={(e)=>setBuyer({...buyer, email: e.target.value})}/>
                     <button onClick={handleCheckout} className={style.addCarrinho}>Finalizar Compra</button>
                </form>
                
            </div>
        </div>
    )
}