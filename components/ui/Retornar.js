
"use client"

import { useRouter } from "next/navigation"

const Retornar = ({children, ...args}) => {
    
    const router = useRouter()

    return (
        <button onClick={() => router.back()} {...args}>
            {children}
        </button>
    )
}

export default Retornar