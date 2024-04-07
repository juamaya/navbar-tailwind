 
const Card = ({img}) => {
    return (
        <>
            <div className="max-w-sm rounded-lg  my-3  p-3 border border-2  border-white overflow-hidden shadow-lg bg-gray-300">
                <img className="w-full max-h-80 "   src={img} alt="Imagen" />
                <div clasNames="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Título de la Tarjeta</div>
                    <p className="text-gray-700 text-base">Descripción de la tarjeta. Puede ser una descripción larga o corta según tus necesidades.</p>
                </div>
                <div className="px-6 py-4">
                    <a href="#" className="flex inline-block bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-lg">Botón</a>
                </div>
            </div>



        </>
    )
}

export default Card