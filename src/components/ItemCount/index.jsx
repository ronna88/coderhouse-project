

import style from "./style.module.css";

export function ItemCount({ onAdd, onRemove, selectedQty}) {
  
  return (
    <div className={style.container}>
        <div>
          <button className={style['btn-add-remove']} onClick={onRemove}>
            Remover Item
          </button>
        </div>
        <div>{selectedQty}</div>
        <div><button className={style['btn-add-remove']} onClick={onAdd}>
            Adicionar Item
          </button></div>
    </div>
  )
}
