import { Fragment } from 'react'
import useCotizador from '../hooks/useCotizador'
import { marcas, years, planes } from '../constants'
import Error from './Error'

const Formulario = () => {
  const { data, handleChangeData, setError, cotizarSeguro } = useCotizador()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.values(data).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')
    cotizarSeguro()
  }

  return (
    <>
      <Error />

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>

          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 text-gray-600 font-semibold"
            onChange={(e) => handleChangeData(e)}
            value={data.marca}
          >
            <option value="" className="text-gray-500">
              Selecciona la marca
            </option>

            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id} className="text-gray-900">
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>

          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200 text-gray-600 font-semibold"
            onChange={(e) => handleChangeData(e)}
            value={data.year}
          >
            <option value="" className="text-gray-500">
              Selecciona el año
            </option>

            {years.map((year) => (
              <option key={year} value={year} className="text-gray-900">
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>

          <div className="flex gap-3">
            {planes.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <input
            type="submit"
            className="w-60 bg-[#735951] hover:scale-105 hover:bg-[#553B32] transition-all text-white cursor-pointer p-3 uppercase font-bold rounded"
            value="Cotizar seguro"
          />
        </div>
      </form>
    </>
  )
}

export default Formulario
