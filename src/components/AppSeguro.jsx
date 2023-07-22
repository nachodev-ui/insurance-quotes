import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguro = () => {

    const { loading } = useCotizador()

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Vehículo
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-md p-10">
        <Formulario /> 

        <div className="mt-10">
            <h2 className="text-center text-2xl font-black text-gray-700">
                {loading ? <Spinner /> : <Resultado />}
            </h2>
        </div>
      </main>
    </>
  )
}

export default AppSeguro
