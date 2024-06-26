import './App.css';

function App() {

  return (
    <div className="container">
      <div className='header-container'>
        <img className='logo' src="logo-neodent.png" alt="logo" />
        <button className='btn'>KPI</button>
      </div>
      <div className='main-container'>
        <div className='input-fields'>
          <div className='input-field'>
            <label>Valor inicial da proposta:</label>
            <input className='calc-input' placeholder='Digite aqui' type='text' />
          </div>
          <div className='input-field'>
            <label>Valor final da proposta:</label>
            <input className='calc-input' placeholder='Digite aqui' type='text' />
          </div>
          <div className='input-field'>
            <label>Prazo inicial:</label>
            <input className='calc-input' placeholder='Digite aqui' type='text' />
          </div>
          <div className='input-field'>
            <label>Valor do desconto à vista:</label>
            <input className='calc-input' placeholder='Digite aqui' type='text' />
          </div>
          <button className='clean-btn'>Limpar</button>
        </div>
        <div className='result-fields'>
          <div className='result-name'>
            <p>Resultados</p>
            <div className='underline'></div>
            <div className='result-input-fields'>
              <div className='input-field'>
                <label>Custo risco sacado:</label>
                <input className='result-input' placeholder='$' type='text' />
              </div>
              <div className='input-field'>
                <label>Valor para 70 dias:</label>
                <input className='result-input' placeholder='$' type='text' />
              </div>
              <div className='input-field'>
                <label>Desconto real:</label>
                <input className='result-input' placeholder='$' type='text' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
