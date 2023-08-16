
import { useState } from "react";
import style from "./style.module.css";

export function ItemCount() {
  const [itemCount, setItemCount] = useState(0);
  const estoqueTotal = 10;

  function addItem() {
    if(itemCount >= estoqueTotal) {
      alert('Sem mais itens em estoque!');
    } else {
      setItemCount(itemCount+1);
    }
    
  }

  function removeItem() {
    if (itemCount > 0) {
      setItemCount(itemCount-1);
    } else {
      alert('Item não pode ser menor que 0!');
    }
  }
  
  return (
    <div className={style.container}>
        <div>
          <button className={style['btn-add-remove']} onClick={removeItem}>
            Remover Item
          </button>
        </div>
        <div>{itemCount}</div>
        <div><button className={style['btn-add-remove']} onClick={addItem}>
            Adicionar Item
          </button></div>
    </div>
  )
}
