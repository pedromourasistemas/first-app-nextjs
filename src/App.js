import { useState } from 'react';

import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador')

  function handleChangeName(name) {
    setAluno(name)
  }

  return (
    <div >
      <h1>Componentes App</h1>
      <h2>Olá: {aluno} </h2>
      <button onClick={ () => handleChangeName('Pedro Moura') }>
        Muda Nome
      </button>
    </div>
  );
}

export default App;
