import { CartWidget } from "../CartWidget";
import "./style.css";

export function NavBar() {
    return (
        <div className="container">
            <div className="content">
                <div className="brand-nav">Coder Clothes</div>
                <div>
                    <div className="menu-nav">
                        <div className="menu-item-nav">
                            <a className="menu-item-link-nav" href="#">Home</a>
                        </div>
                        <div className="menu-item-nav">
                            <a className="menu-item-link-nav" href="#">Roupas Masculinas</a>
                        </div>
                        <div className="menu-item-nav">
                            <a className="menu-item-link-nav" href="#">Roupas Femininas</a>
                        </div>
                        <div className="menu-item-nav">
                            <CartWidget />
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
