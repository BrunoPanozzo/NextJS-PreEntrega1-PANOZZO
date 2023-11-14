import styles from './footer.module.css'

const Footer = () => {

    return (
        <div className={styles.pie}>
            <section className={styles.bloqueFooter}>
            <article>
                <div>
                    <h2 className="tituloImportante2">CineFans</h2>
                    <ul className="lista1">
                        <li>Quiénes somos</li>
                        <li>Trabaja con nosotros</li>
                        <li>Unite al Club CineFans</li>
                    </ul>
                </div>
            </article>
            <article>
                <div>
                    <h2 className="tituloImportante2">Información</h2>
                    <ul className="lista2">
                        <li className="hover-subrayado">Festejá tu cumple</li>
                        <li className="hover-subrayado">Promos Vigentes</li>
                        <li className="hover-subrayado">Calificaciones</li>
                        <li className="hover-subrayado">Ventas corporativas</li>
                        <li claclassNamess="hover-subrayado">Contactanos</li>
                    </ul>
                </div>
            </article>
            <article className={styles.redesSociales}>
                <button className="btn btn-primary"><span className="fa  fa-brands  fa-facebook"></span> | Facebook</button>
                <button className="btn btn-info"><span className="fa fa-brands fa-twitter"></span> | Twitter</button>
                <button className="btn btn-secondary"><span className="fa fa-brands fa-instagram"></span> |
                    Instagram</button>
                <button className="btn btn-danger"><span className="fa fa-brands fa-youtube"></span> | Youtube</button>
            </article>
        </section>
        </div>
    )
}

export default Footer
