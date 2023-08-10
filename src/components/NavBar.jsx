import { Button } from "@mui/material";
import "./styles.js";
import { BrandNav, Container, Content, LoginNav, MenuItemNav, MenuNav, MenuItemLinkNav } from "./styles.js";

function NavBar() {
    return (
        <Container>
            <Content>
                <BrandNav>Coder Clothes</BrandNav>
                <div>
                    <MenuNav>
                        <MenuItemNav>
                            <MenuItemLinkNav href="#">Home</MenuItemLinkNav>
                        </MenuItemNav>
                        <MenuItemNav>
                            <MenuItemLinkNav href="#">Roupas Masculinas</MenuItemLinkNav>
                        </MenuItemNav>
                        <MenuItemNav>
                            <MenuItemLinkNav href="#">Roupas Femininas</MenuItemLinkNav>
                        </MenuItemNav>
                    </MenuNav>
                </div>
                <LoginNav><Button variant="contained">Login</Button></LoginNav>
            </Content>
        </Container>
    )
}

export default NavBar