import React, { useContext } from 'react';
import { SecaoSn, SobreNosTit, MissaoTit } from '../styled';
import { LanguageContext } from '../LanguageContext';


const SobreNos = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <SecaoSn>
            <div>

            </div>
            <div>
                <SobreNosTit>{texts.sobre.prgf1}</SobreNosTit>
                <SobreNosTit>{texts.sobre.prgf2}</SobreNosTit>
                <MissaoTit>{texts.sobre.tituloMissao}</MissaoTit>
                <MissaoTit>{texts.sobre.descricaoMissao}</MissaoTit>
                <MissaoTit>{texts.sobre.tituloVisao}</MissaoTit>
                <MissaoTit>{texts.sobre.descricaoVisao}</MissaoTit>
                <MissaoTit>{texts.sobre.tituloValores}</MissaoTit>
                <MissaoTit>{texts.sobre.descricaoValores1}</MissaoTit>
                <MissaoTit>{texts.sobre.descricaoValores2}</MissaoTit>
                <MissaoTit>{texts.sobre.descricaoValores3}</MissaoTit>
            </div>

        </SecaoSn>
    )
}

export default SobreNos;