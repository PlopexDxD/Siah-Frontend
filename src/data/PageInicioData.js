import E from '../assets/images/e.png';
import H from '../assets/images/h.png';
import Q from '../assets/images/q.png';
import T from '../assets/images/t.png';
import styled from 'styled-components';

const Img = styled.img`
    width: 1.563rem;
    height: 1.563rem;
    margin-right: 0.75rem;
    margin-left: 1.5rem;
`

export const PageInicioData = [
    {
        icon: <Img src={E}/>,
        title: "Emergencia",
        content: ""
    },
    {
        icon: <Img src={H}/>,
        title: "Hospitalizacion",
        content: "Contenido"
    },
    {
        icon: <Img src={Q}/>,
        title: "Quirofano",
        content: "Contenido"
    },
    {
        icon: <Img src={T}/>,
        title: "Tratamientos",
        content: "Contenido"
    },
]
