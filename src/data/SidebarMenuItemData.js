import Home from '../assets/images/home.png';
import Pills from '../assets/images/pills.png';
import Rotate from '../assets/images/rotate.png';
import styled from 'styled-components';

const Img = styled.img`
    width: 1.188rem;
    height: 1.188rem;
    margin-right: 0.75rem;
    margin-left: 1.5rem;
`

export const SidebarMenuItemData = [
    {
        title: "Inicio",
        path: "/",
        icon: <Img src={Home}/>,
    },
    {
        title: "Tratamiento de emergencia",
        path: "/tratamiento",
        icon: <Img src={Pills}/>,
    },
    {
        title: "Devoluciones",
        path: "/Devoluciones",
        icon: <Img src={Rotate}/>
    },
]
