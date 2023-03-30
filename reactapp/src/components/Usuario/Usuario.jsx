import styles from './Usuario.module.css'
// parametros especificos tem que estar em chaves
//ao inves de props.idade 
// alt texto alternativo da imagem   

function Usuario({nome, idade,foto, cargo}){

    return(
        <div className={styles.div_user}>
            <img alt={nome} src={foto}></img>
            <h1 className={styles.titulo}>{nome}</h1>
            <p className={styles.titulo}>{idade}</p>
            <p className={styles.titulo}>{cargo}</p>

        </div>
    )

}
export default Usuario