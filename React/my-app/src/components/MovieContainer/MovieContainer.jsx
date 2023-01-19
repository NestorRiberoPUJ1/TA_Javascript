
import styles from "./MovieContainer.module.css"

const MovieContainer = (props) => {


    return (
        <div className={styles.Container}>
            {props.children}
        </div>
    )
}

export default MovieContainer;