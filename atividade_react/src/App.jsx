import { useState } from 'react';
import FormFilme from './components/FormFilme';
import ListaFilmes from './components/ListaFilmes';
import styles from './App.module.css';

function App() {
  const [filmes, setFilmes] = useState([]); // Armazena a lista
  const [busca, setBusca] = useState(''); // Filtro de pesquisa

  const adicionarFilme = (novoFilme) => {
    setFilmes([...filmes, novoFilme]);
  };

  // Filtra os filmes baseados na busca
  const filmesFiltrados = filmes.filter(filme => 
    filme.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Meus Filmes Favoritos</h1>
      
      <FormFilme onAdicionar={adicionarFilme} />

      <input 
        type="text" 
        placeholder="Pesquisar filme..." 
        value={busca} 
        onChange={(e) => setBusca(e.target.value)} 
      />

      <p>Total de filmes cadastrados: {filmes.length}</p>

      {/* Renderização Condicional */}
      {filmes.length === 0 ? (
        <p>Nenhum filme cadastrado.</p>
      ) : (
        <ListaFilmes filmes={filmesFiltrados} />
      )}
    </div>
  );
}

export default App;