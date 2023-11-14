"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/tienda/todos", },
    { label: "Móviles", href: "/tienda/Moviles", },
    { label: "TV y Audio", href: "/tienda/TV-Audio", },
    { label: "Electrodomésticos", href: "/tienda/Electrodomesticos", },
    { label: "Computación", href: "/tienda/Computacion", }
]

const MenuCategorias = () => {

    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.href}
                        className={`${pathname === link.href ? "font-semibold border-b" :''} py-2`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default MenuCategorias