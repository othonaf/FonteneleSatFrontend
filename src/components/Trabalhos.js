import React from 'react';
import { CardBody} from 'reactstrap'
import {CadImage, CardsProjetos, DescricaoProjt} from '../styled';


const Trabalhos = (props) => {
    
    
    return (
        <CardsProjetos
            body
            inverse
        >
            <CadImage alt="" src={props.imagem} />
            <CardBody>
                <DescricaoProjt>
                    {props.descCard1}
                </DescricaoProjt>
            </CardBody>
        </CardsProjetos>
    )
}

export default Trabalhos;