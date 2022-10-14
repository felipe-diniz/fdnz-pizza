import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyled from './componentes/GlobalStyled';
import PratoProps from './componentes/Interfaces/IPrato';
import Prato from './componentes/Prato';

const Cardapio = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

function App() {
  const [pratos, setPratos] = useState<PratoProps[]>([]);

  useEffect(() => {
    fetch('https://fdnz-pizza.herokuapp.com/api/pratos/')
      .then(response => response.json())
      .then(dados => {
        setPratos(dados);
      });
  }, []);

  return (
    <div className='App'>
      <GlobalStyled />
      <img src='/imagens/banner.png' alt='Um banner mostrando uma pizza' />
      <img src='/imagens/logo.png' alt='Logo da Alura Pizza' />
      <Cardapio>
        {pratos.map(prato => (
          <Prato 
          key={prato.id} 
          nome={prato.nome}
          descricao={prato.descricao}
          imagem={prato.imagem}
          preco={prato.preco}
           />
        ))}
      </Cardapio>
    </div>
  );
}

export default App;
