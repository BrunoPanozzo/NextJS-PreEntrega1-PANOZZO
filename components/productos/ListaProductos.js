import { mockData } from '@/data/productos'
import Producto from './Producto'
import Boton from '../ui/Boton'

const ListaProductos = ({ categoria, mostrarBotones }) => {

    const items = categoria === 'todos' ? mockData : mockData.filter(item => item.categoria === categoria)

    return (
        <>
            {mostrarBotones ? <Boton className="flex justify-between items-center ml-auto font-mono text-lg my-4">
                                Crear nuevo
                              </Boton>
                : <></>
            }
            <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
                {
                    items.map(item => <Producto key={item.slug} item={item} mostrarBotones={mostrarBotones}/>)
                }                  
            </section>
        </>
    )
}
export default ListaProductos