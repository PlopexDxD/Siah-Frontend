import { ReactComponent as Home } from "../assets/images/home.svg";
import { ReactComponent as Pills } from "../assets/images/pills.svg";
import { ReactComponent as Rotate } from "../assets/images/rotate.svg";


export const MenuItemData = [
    {
        title: "Inicio",
        path: "/",
        icon: <Home />,
    },
    {
        title: "Tratamiento de emergencia",
        path: "/tratamiento",
        icon: <Pills />,
    },
    {
        title: "Devoluciones",
        path: "/Devoluciones",
        icon: <Rotate />
    },
]
