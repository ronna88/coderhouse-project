import { useContext } from "react";
import style from "./style.module.css";
import { CartContext } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


export function Cart() {

    const { cartItems, remove, clear } = useContext(CartContext);
    const navigate = useNavigate();

    function handleClearCarrinho() {
        clear();
    }

    function handleCheckout() {
        navigate("/checkout");
    }

    return (
        <div className={style.container}>
            <h3>Carrinho</h3>
            <br />
            <div >
                {
                    cartItems.length > 0 ?

                        cartItems.map(item =>
                            <div className={style.content} key={item.id}>
                                <ul className={style.card}>
                                    <div className={style.card1}>
                                        <li><img src={item.image_url} /></li>
                                        <div className={style.card2}>
                                            <li>{item.title}</li>
                                            <li>{item.price}</li>
                                            <li>{`Quantidade: ` + item.qty}</li>
                                        </div>
                                    </div>

                                    <div className="cart-actions">
                                        <button className={style.btnRemove} onClick={(e) => remove(item)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        )

                        :
                        <><span>Sem itens no carrinho <Link to="/">CLIQUE AQUI</Link> para navegar nos itens</span></>
                }
            </div>
            <br/>
            <button className={style.addCarrinho} onClick={handleClearCarrinho}>Limpar Carrinho</button>
            <br/>
            <button className={style.addCarrinho} onClick={handleCheckout}>Checkout</button>
        </div>

    )
}