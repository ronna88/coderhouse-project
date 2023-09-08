import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

export function NavBar() {

    const { cartItems } = useContext(CartContext);
    const [qtd, setQtd] = useState(0);

    useEffect(()=> {
        setQtd(0);
        for(let i = 0 ; i < cartItems.length ; i++) {
            setQtd(qtd + cartItems[i].qty);
        }
    }, [cartItems]);


    return (
        <div className="container">
            <div className="content">
                <div className="brand-nav"><Link to="/">Coder Clothes</Link></div>
                <div>
                    <div className="menu-nav">
                        <div className="menu-item-nav">
                            <Link className="menu-item-link-nav" to="/">Home</Link>
                        </div>
                        <div className="menu-item-nav">
                            <Link className="menu-item-link-nav" to="/category/1">Roupas Masculinas</Link>
                        </div>
                        <div className="menu-item-nav">
                            <Link className="menu-item-link-nav" to="/category/2">Roupas Femininas</Link>
                        </div>
                        <div className="menu-item-nav">
                            {qtd > 0 ? 
                                <Link to="/cart">
                                    <CartWidget qtd={qtd} />
                                </Link> : ""}
                        </div>
                    </div>
                </div>
                <div>
                    <button className="login-nav">Login</button>
                </div>
            </div>
        </div>
    )
}
