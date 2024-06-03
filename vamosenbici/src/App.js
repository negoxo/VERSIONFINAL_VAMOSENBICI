
import './App.css';

function App() {
  return (
    
    <div className="App">
      <section className='columna1'>
        <div className='formulario1'>
        <form >
            <label for="fname">ORIGEN:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="lname">DESTINO:</label><br/>
            <input type="text" id="lname" name="lname"/>
        </form>
        </div> 
          
        
          
        donde estoy
      </section>
      <section className='columna2'>
      <form className='formulario2'>
          <label>Municipios del valle de aburra</label>
          <br /><br />
          <select >
            <option>Medellin</option>
            <option>Envigado</option>
            <option>Sabaneta</option>
            <option>Caldas</option>
            <option>La Estrella</option>
            <option>Girardota</option>
            <option>Copacabana</option>
            <option>Barbosa</option>
            <option>Bello</option>
            <option>Itagui</option>
          </select>
        </form>
        <section>

        </section>
      </section>

    </div>
    
  );
}

export default App;
