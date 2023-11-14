import ListaProductos from '@/components/productos/ListaProductos'
import MenuCategorias from '@/components/productos/MenuCategorias'

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Categoría - ${params.categoria}`,
        description: `${params.description}`,
    }
}

const ProductosPage = ({params}) => {

    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <MenuCategorias />
                <ListaProductos categoria={categoria}/>
            </div>
        </main>
    )
}

export default ProductosPage