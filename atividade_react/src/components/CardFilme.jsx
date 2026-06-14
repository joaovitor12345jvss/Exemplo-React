import styles from './CardFilme.module.css';

function CardFilme({ filme }) {

  // Exemplo de evento exigido no trabalho
  const lidarComDuploClique = () => {
    alert(`Você favoritou o filme: ${filme.nome}`);
  };

  return (
    <div
      className={styles.card}
      onDoubleClick={lidarComDuploClique} // Evento onDoubleClick adicionado aqui
    >
      <h3>{filme.nome}</h3>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>

      {/* Renderização Condicional baseada na Nota */}
      <span className={filme.nota >= 8 ? styles.badgeRecomendado : styles.badgeComum}>
        {filme.nota >= 8 ? '⭐ Filme Recomendado' : '📌 Filme Comum'}
      </span>

      <p className={styles.notaTexto}>
        <strong>Nota:</strong> {filme.nota} / 10
      </p>
    </div>
  );
}

export default CardFilme;