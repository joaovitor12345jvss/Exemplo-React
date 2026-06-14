import CardFilme from './CardFilme';

function ListaFilmes({ filmes }) {
  return (
    <div>
      {/* Utilizando o método map() para renderizar a lista */}
      {filmes.map((filme) => (
        // Passamos os dados do filme via props para o CardFilme
        // A propriedade "key" é obrigatória no React ao usar o map()
        <CardFilme key={filme.id} filme={filme} /> 
      ))}
    </div>
  );
}

export default ListaFilmes;