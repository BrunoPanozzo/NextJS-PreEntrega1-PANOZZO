import Image from "next/image"
import Link from "next/link"

const Producto = ({ item }) => {

    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={`/tienda/detail/${item.slug}`}
                className="flex flex-col"
            >
                <Image
                    alt={item.nombre}
                    src={`/imgs/productos/${item.imagen}`}
                    width={300}
                    height={300}
                    style={{objectFit: "contain"}}
                />

                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm my-4">{item.nombre}</h4>
                    <p className="text-2xl font-semibold mb-6">$ {item.precio}</p>
                </div>
            </Link>
        </article>
    )
}

export default Producto