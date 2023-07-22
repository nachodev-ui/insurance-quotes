import { useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { marcas, planes } from '../constants'

const Resultado = () => {
  const { result, data } = useCotizador()
  const { marca, year, plan } = data

  // Convertimos 'marca' y 'plan' a valores numéricos
  const marcaId = Number(marca)
  const planId = Number(plan)
  const yearRef = useRef(year)

  // Buscamos la marca con el id correspondiente en el arreglo 'marcas'
  const brand = useMemo(() => marcas.find((item) => item.id === marcaId), [result])

  // Si encontramos una marca, almacenamos su nombre en 'brandName', de lo contrario, 'brandName' será undefined
  const brandName = brand ? brand.nombre : undefined

  // Buscamos el plan con el id correspondiente en el arreglo 'planes'
  const planObject = useMemo(() => planes.find((item) => item.id === planId), [result])

  // Si encontramos un plan, almacenamos su nombre en 'planName', de lo contrario, 'planName' será undefined
  const planName = planObject ? planObject.nombre : undefined

  if (result === 0) return null

  return (
    <div className="bg-gray-100 p-5 rounded-md">
      <h2 className="text-center text-3xl font-black text-gray-700">
        Resumen de Cotización
      </h2>

      <ul className="mt-10">
        <li className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6">
          <p className="text-gray-600">Marca</p>
          <p className="text-gray-700 font-semibold">
            {brandName || 'No especificada'}
          </p>
        </li>

        <li className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6">
          <p className="text-gray-600">Año</p>
          <p className="text-gray-700 font-semibold">{yearRef.current}</p>
        </li>

        <li className="flex justify-between items-center pb-3 text-2xl">
          <p className="text-gray-600">Plan</p>
          <p className="text-gray-700 font-semibold capitalize">
            {planName || 'No especificado'}
          </p>
        </li>
      </ul>

      <p className="text-center text-3xl font-black text-gray-700 mt-8">
        Total: <span className="text-gray-700">{result}</span>
      </p>
    </div>
  )
}

export default Resultado
