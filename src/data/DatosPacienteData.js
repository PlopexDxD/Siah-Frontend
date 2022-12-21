import Home from '../assets/images/home.png';
import Pills from '../assets/images/pills.png';
import Rotate from '../assets/images/rotate.png';
import styled from 'styled-components';
import Consultas from '../pages/PagesModal/Consultas';
import Evolucion from '../pages/PagesModal/Evolucion';

const Img = styled.img`
    width: 1.188rem;
    height: 1.188rem;
    margin-right: 0.75rem;
    margin-left: 1.5rem;
`

export const DatosPacienteData = [
    {
        id: 1,
        title: "Consultas",
        icon: <Img src={Home}/>,
        content: <Consultas/>,
    },
    {
        id: 2,
        title: "Evolucion",
        icon: <Img src={Pills}/>,
        content: <Evolucion/>,
    },
    {
        id: 3,
        title: "Signos Vitales",
        icon: <Img src={Rotate}/>,
        content: "",
    },
    {
        id: 4,
        title: "Diagnosticos",
        icon: <Img src={Home}/>,
        content: "",
    },
    {
        id: 5,
        title: "Dietas",
        icon: <Img src={Pills}/>,
        content: "",
    },
    {
        id: 6,
        title: "Estudios y procedimientos",
        icon: <Img src={Rotate}/>,
        content: "",
    },
    {
        id: 7,
        title: "Tratamientos recetados",
        icon: <Img src={Home}/>,
        content: "",
    },
    {
        id: 8,
        title: "Tratamientos pendientes",
        icon: <Img src={Pills}/>,
        content: "",
    },
    {
        id: 9,
        title: "Actividades de enfermeria",
        icon: <Img src={Rotate}/>,
        content: "",
    },
    {
        id: 10,
        title: "Insumo extra",
        icon: <Img src={Rotate}/>,
        content: "",
    },
]

export const DatosPacienteConsultaData =  [
    {
        content: ""
    },
    {
        content: ""
    },
    {
        content: ""
    }
]