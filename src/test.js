import React, { useState } from 'react';

function ExibirObjetos() {
  // Defina o estado para armazenar a array de objetos
  const [objetos, setObjetos] = useState([
    { id: 1, nome: 'Objeto 1', descricao: 'Descrição do Objeto 1' },
    { id: 2, nome: 'Objeto 2', descricao: 'Descrição do Objeto 2' },
    { id: 3, nome: 'Objeto 3', descricao: 'Descrição do Objeto 3' }
  ]);

  return (
    <div>
      <h1>Array de Objetos</h1>
      <ul>
        {/* Mapeie a array de objetos e renderize os elementos */}
        {objetos.map(objeto => (
          <li key={objeto.id}>
            <h2>{objeto.nome}</h2>
            <p>{objeto.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExibirObjetos;
