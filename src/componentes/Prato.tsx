import styled from 'styled-components';
import IPrato from './Interfaces/IPrato';

const CardPrato = styled.div`
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 8px;
  padding-bottom: 10px;
  gap: 8px;
`;
const ImagemPrato = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const DescricaoPrato = styled.p`
  margin: 0 5px;
`;

const Prato = ({ descricao, imagem, nome, preco }: IPrato) => {
  function formatadorMonetario(valor: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  return (
    <>
      <CardPrato>
        <ImagemPrato src={imagem} alt={`Uma ${nome} deliciosa.`} />
        <p>
          <strong>{nome}</strong>
        </p>
        <DescricaoPrato>{descricao}</DescricaoPrato>
        <p>
          <strong>{formatadorMonetario(preco)}</strong>
        </p>
      </CardPrato>
    </>
  );
};

export default Prato;
