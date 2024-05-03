import { useState } from 'react';

import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador')

  return (
    <div >
      <h1>Componentes App</h1>
      <h2>Olá: {aluno} </h2>
      <Nome aluno= "Pedro Moura" idade={33}/>
    </div>
  );
}

export default App;
