import styles from "./Peliculas.module.css"

const Peliculas = ({ titulo, url, favorita, setFavorita }) => {

    return (
        <div className={styles.Card}>
            <h4>{titulo}</h4>
            <img className={styles.Cartelera} src={url} alt={titulo} onDoubleClick={(e) => setFavorita(titulo)} />
            {
                favorita === titulo ?
                    <h5>Favorita</h5>
                    :
                    null
            }
        </div>
    )
}

export default Peliculas;