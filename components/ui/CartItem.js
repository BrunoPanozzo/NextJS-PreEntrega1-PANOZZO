import Image from "next/image";
import styles from './cartItem.module.css'

const CartItem = ({ producto }) => {

    return (
        <div className={`${styles.prod} container text-center`}>
            <div className="row">
                <div className="col">
                    <Image
                        src={`/imgs/productos/${producto.imagen}`}
                        className="img-fluid float-start rounded-start"
                        alt={producto.nombre}
                        width={300}
                        height={300} />
                </div>
                <div className="col-6">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className={`${styles.itemPrecio} card-text`}>Cantidad: {producto.stock}</p>
                    <p className={`${styles.itemPrecio} card-text`}>Precio por Unidad = $ {producto.precio.toLocaleString()}</p>
                    <p className={`${styles.itemPrecio} card-text`}>Subtotal = $ {(producto.stock * producto.precio).toLocaleString()}</p>
                </div>
                <div className="col align-self-center">
                    <button type="button" className={`${styles.btnEliminarItem} btn btn-warning text-decoration text-center`}>
                        <p className="card-title">Cancelar compra</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem