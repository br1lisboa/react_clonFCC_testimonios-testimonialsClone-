import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre fCChamp: </h1>
        <Testimonio 
          nombre='Mr Bean'
          pais='Inglaterra'
          imagen='mr'
          cargo='Ingeniero de Software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus corporis asperiores distinctio alias praesentium aut? Suscipit magnam quidem debitis velit distinctio maxime recusandae illo iusto non reiciendis, similique atque.'/>
        <Testimonio
          nombre='Joker'
          pais='EE UU'
          imagen='joker'
          cargo='RRPP'
          empresa='Facebook'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus corporis asperiores distinctio alias praesentium aut? Suscipit magnam quidem debitis velit distinctio maxime recusandae illo iusto non reiciendis, similique atque.'/>
        <Testimonio
          nombre='The Brad'
          pais='EE UU'
          imagen='brad'
          cargo='Gerente General'
          empresa='Walmart'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus corporis asperiores distinctio alias praesentium aut? Suscipit magnam quidem debitis velit distinctio maxime recusandae illo iusto non reiciendis, similique atque.'/>
      </div>
    </div>
  );
}

export default App;
