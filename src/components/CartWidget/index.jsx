import { useContext, useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./styles.module.css";
import { CartContext } from "../../context/cartContext";

export function CartWidget() {

  // eslint-disable-next-line no-unused-vars
  const { cartItems } = useContext(CartContext);
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    console.log("cart");
    console.log(cartItems);
    for(let i = 0 ; i < cartItems.length ; i++) {
      setQtd(qtd + cartItems[i].qty);
    }
  },[cartItems])

  return (
    <span className="fa-layers fa-2x ">
        <FontAwesomeIcon icon={faCartShopping} className={style.cart} />
        {qtd > 0 ? 
          <span className="fa-layers-counter">{qtd}</span> : ""
        }
        
    </span>
  )
}
