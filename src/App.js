import { useState } from 'react';
import './App.css';
import { Info } from 'phosphor-react';
import { Tooltip } from 'react-tooltip'

function App() {

  //VALORES FIXOS
  var t5 = 0.12;
  var t6 = 0.012;
  var t7 = 0.225;

  // CALCULOS DAS TAXAS
  const t1 = Math.pow(1 + t5, 1 / 12) - 1;
  const t2 = Math.pow(1 + t1, 1 / 30) - 1;
  const t3 = Math.pow(1 + t6, 12) - 1;
  const t4 = Math.pow(1 + t6, 1 / 30) - 1; // verificar calculado do cleison

  const [valorInicial, setValorInicial] = useState(0);
  const [prazoInicial, setPrazoInicial] = useState(0);

  const [custoRiscoSacado, setCustoRiscoSacado] = useState('');
  const [rendimentoEm70Dias, setRendimentoEm70Dias] = useState('');
  const [acrescimoIdealEm70Dias, setAcrescimoIdealEm70Dias] = useState('');
  const [acrescimoMaximoEm70Dias, setAcrescimoMaximoEm70Dias] = useState('');

  function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  function calcular() {
    const d1 = 70 - prazoInicial;

    const c1 = valorInicial * (Math.pow(1 + t4, d1) - 1);
    const v2 = (c1 - valorInicial) * -1;
    setCustoRiscoSacado(formatCurrency(v2.toFixed(2)));

    const r1 = (valorInicial - c1) * (Math.pow(1 + t2, d1) - 1);
    setRendimentoEm70Dias(formatCurrency(r1.toFixed(2)));

    const acrescimoIdeal = ((v2 - valorInicial + r1) * -1) + valorInicial;
    setAcrescimoIdealEm70Dias(formatCurrency(acrescimoIdeal.toFixed(2)));

    const v3 = valorInicial + c1;
    setAcrescimoMaximoEm70Dias(formatCurrency(v3.toFixed(2)));
  }

  return (
    <div className="container">
      <div className='header-container'>
        <img className='logo' src="logo-neodent.png" alt="logo" />
      </div>
      <div className='main-container'>
        <div className='input-fields'>
          <div className='input-field'>
            <label>Valor inicial:</label>
            <div className='input-container'>
              <input className='calc-input' placeholder='Digite aqui' type='number' onChange={(event) => { setValorInicial(Number(event.target.value)) }} />
              <Info className='input-icon' size={19} data-tooltip-id="valor-inicial" />
              <Tooltip
                id='valor-inicial'
                place='right'
                className='tooltip-zindex'
                content='Esse é o valor final negociado, ao prazo de pagamento da proposta.'
              />
            </div>
          </div>
          <div className='input-field'>
            <label>Prazo de pagamento inicial:</label>
            <div className='input-container'>
              <input className='calc-input' placeholder='Digite aqui' type='number' onChange={(event) => { setPrazoInicial(Number(event.target.value)) }} />
              <Info className='input-icon' size={19} data-tooltip-id="prazo-inicial" />
              <Tooltip
                id='prazo-inicial'
                place='right'
                className='tooltip-zindex'
                content='Esse é o prazo de pagamento da proposta.'
              />
            </div>
          </div>
          <button className='clean-btn' onClick={() => calcular()}>Calcular</button>
        </div>
        <div className='result-fields'>
          <div className='result-name'>
            <p>Resultados</p>
            <div className='underline'></div>
            <div className='result-input-fields'>
              <div className='input-field'>
                <label>Valor que irá receber no dia {prazoInicial != 0 ? prazoInicial : 'X'} via risco sacado:</label>
                <div className='result-input-container'>
                  <input className='result-input' placeholder='$' type='text' disabled value={custoRiscoSacado} />
                  <Info className='input-icon' size={19} data-tooltip-id="custoRiscoSacado" />
                  <Tooltip
                    id='custoRiscoSacado'
                    place='right'
                    className='tooltip-zindex'
                    content='O custo do risco sacado é o valor negociado menos esse valor.'
                  />
                </div>
              </div>
              <div className='input-field'>
                <label>Rendimento fornecedor do dia {prazoInicial != 0 ? prazoInicial : 'X'} ao dia 70:</label>
                <div className='more-label-container'>
                  <div className='result-input-container'>
                    <input className='result-input' placeholder='$' type='text' disabled value={rendimentoEm70Dias} />
                    <Info className='input-icon' size={19} data-tooltip-id="rendimentoEm70Dias" />
                    <Tooltip
                      id='rendimentoEm70Dias'
                      place='right'
                      className='tooltip-zindex'
                      content={`Esse é o valor que o dinheiro rende aplicado no CDI do dia ${prazoInicial != 0 ? prazoInicial : 'X'} ao dia 70.`}
                    />
                  </div>
                </div>
              </div>
              <div className='input-field'>
                <label>Valor ideal de acréscimo para chegar em 70 dias:</label>
                <div className='more-label-container'>
                  <div className='result-input-container'>
                    <input className='result-input' placeholder='$' type='text' disabled value={acrescimoIdealEm70Dias} />
                    <Info className='input-icon' size={19} data-tooltip-id="acrescimoIdealEm70Dias" />
                    <Tooltip
                      id='acrescimoIdealEm70Dias'
                      place='right'
                      className='tooltip-zindex'
                      content='Esse é o valor máximo de acréscimo menos o rendimento.'
                    />
                  </div>
                  <p>(Caso necessário)</p>
                </div>
              </div>
              <div className='input-field'>
                <label>Valor máximo de acréscimo para chegar em 70 dias:</label>
                <div className='more-label-container'>
                  <div className='result-input-container'>
                    <input className='result-input' placeholder='$' type='text' disabled value={acrescimoMaximoEm70Dias} />
                    <Info className='input-icon' size={19} data-tooltip-id="acrescimoMaximoEm70Dias" />
                    <Tooltip
                      id='acrescimoMaximoEm70Dias'
                      place='right'
                      className='tooltip-zindex'
                      content='Esse é o valor negociado mais o custo do risco sacado.'
                    />
                  </div>
                  <p>(Último caso)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
