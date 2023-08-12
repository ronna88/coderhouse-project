
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#66b3f1",}} />
    </div>
  )
}
