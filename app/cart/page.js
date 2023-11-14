import CartItem from "@/components/ui/CartItem"
import { mockData } from "@/data/productos"
import Link from "next/link"


const CartPage = () => {

    const cart = mockData.filter(item => item.categoria === "Moviles")

    return (
        <div>
            <div className="row">
                <div className="col-9">
                    <h1 className="titulo-importante">Productos Comprados</h1>
                </div>
                <div className="col align-self-center">
                    <button type="button" className="btn btn-danger text-decoration text-center btn-vaciarCArrito">
                        <p className="card-title">Vaciar carrito</p>
                    </button>
                </div>
            </div>
            <div className="cart-list">
                {cart.map(producto => (
                    <CartItem key={producto.id} producto={producto} />
                ))}
            </div>
            <Link href="/checkout" className="btn btn-secondary text-decoration text-center btn-ver-detalle">Confirmar Compra</Link>
        </div>
    )
}

export default CartPage