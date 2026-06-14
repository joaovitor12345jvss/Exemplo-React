import { useState } from 'react';
import styles from './FormFilme.module.css'; 

function FormFilme({ onAdicionar }) {
// Estados para cada campo
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [nota, setNota] = useState('');

  const lidarComEnvio = (e) => {
    e.preventDefault();
    
    // Cria o objeto do filme
    const novoFilme = {
      id: Date.now(), // Gera um ID único para a renderização da lista
      nome,
      genero,
      ano,
      nota: Number(nota) // Converte a rota para número
    };

    onAdicionar(novoFilme); // Chama a função recebida via Props para enviar o filme no App

    // Limpa os campos
    setNome('');
    setGenero('');
    setAno('');
    setNota('');
  };

  return (
    <form onSubmit={lidarComEnvio} className={styles.formulario}>
      <div className={styles.campo}>
        <label>Nome do filme:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      
      <div className={styles.campo}>
        <label>Gênero:</label>
        <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} required />
      </div>

      <div className={styles.campo}>
        <label>Ano de Lançamento:</label>
        <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} required />
      </div>

      <div className={styles.campo}>
        <label>Nota (0 a 10):</label>
        <input type="number" min="0" max="10" value={nota} onChange={(e) => setNota(e.target.value)} required />
      </div>
      
      <button type="submit" className={styles.botao}>Cadastrar Filme</button>
    </form>
  );
}

export default FormFilme;