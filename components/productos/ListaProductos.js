import { mockData } from '@/data/productos'
import Producto from './Producto'

const ListaProductos = ({ categoria }) => {

    const items = categoria === 'todos' ? mockData : mockData.filter(item => item.categoria === categoria)

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <Producto key={item.slug} item={item}/>)
            }
        </section>
    )
}
export default ListaProductos