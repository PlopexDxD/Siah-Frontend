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

export const DatosPacienteData = [
    {
        title: "Consultas",
        path: "/",
        icon: <Img src={Home}/>,
    },
    {
        title: "Evolucion",
        path: "/Evolucion",
        icon: <Img src={Pills}/>,
    },
    {
        title: "Signos Vitales",
        path: "/",
        icon: <Img src={Rotate}/>
    },
    {
        title: "Diagnosticos",
        path: "/",
        icon: <Img src={Home}/>,
    },
    {
        title: "Dietas",
        path: "/",
        icon: <Img src={Pills}/>,
    },
    {
        title: "Estudios y procedimientos",
        path: "/",
        icon: <Img src={Rotate}/>
    },
    {
        title: "Tratamientos recetados",
        path: "/",
        icon: <Img src={Home}/>,
    },
    {
        title: "Tratamientos pendientes",
        path: "/",
        icon: <Img src={Pills}/>,
    },
    {
        title: "Actividades de enfermeria",
        path: "/",
        icon: <Img src={Rotate}/>
    },
    {
        title: "Insumo extra",
        path: "/",
        icon: <Img src={Rotate}/>
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