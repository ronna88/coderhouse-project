import { styled } from "styled-components";

export const Container = styled.div`
    padding: 10px;
    background: #086788;
    width: 100%;
    height: 78px;
`
export const Content = styled.div`
display: flex;
justify-content: space-between;
`

export const BrandNav = styled.p`
padding-top: 20px;
color: #65b3f1; 
font-size: 26px;
margin-left: 15px;
`

export const MenuNav = styled.div`
padding-top: 20px;
list-style-type: none;
display: flex;
`

export const MenuItemNav = styled.li`
padding: 20px;
&:hover {
    background: #09465bcc;
    cursor: pointer;
  }
`
export const MenuItemLinkNav = styled.a`
text-decoration: none;
color: #65b3f1;
`

export const LoginNav = styled.div`
padding-top:20px;
margin-right: 3rem; 
`

