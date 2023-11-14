import Boton from "@/components/ui/Boton"

export const metadata = {
    title: "Contactanos | Samsung Argentina",
    description: "Página principal de contacto",
    keywords: "contacto, contacta, WhatsApp, llamanos, soporte"
}

export default function ContactoPage() {
    return (
        <>
            <main className="container m-auto max-w-md">
                <h1 className="text-4xl text-blue-600 my-4 text-center font-mono">Contacto</h1>
                <hr/>                 
                <form class="bg-white px-8 pt-6 pb-8 mb-4 rounded-xl">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-lg font-bold mb-2 font-mono" for="mensaje"> Mensaje </label>
                        <textarea class="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" rows="5" type="text" placeholder="Dejanos un mensaje" required></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-lg font-bold mb-2 font-mono" for="email"> Email </label>
                        <input class="w-full shadow border border-blue-100 rounded py-2 px-3 text-gray-700 font-mono" type="email" placeholder="Tu email" required/>
                    </div>                                              
                    <div class="flex items-center justify-between font-mono text-lg">
                        <Boton type="submit"> Aceptar </Boton>
                    </div>
                </form>                    
            </main>
        </>
    )
}