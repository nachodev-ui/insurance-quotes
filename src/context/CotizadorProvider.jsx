import { useState, createContext } from 'react'
import {
  getYearDifference,
  calculateBrand,
  calculatePlan,
  formatCurrency,
} from '../helpers'

const CotizadorContext = createContext()

// eslint-disable-next-line react/prop-types
const CotizadorProvider = ({ children }) => {
  // El provider es donde se encuentran las funciones y el state (de donde se obtienen los datos)
  const [data, setData] = useState({
    marca: '',
    year: '',
    plan: '',
  })
  const [error, setError] = useState('')
  const [result, setResult] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleChangeData = (e) => {
    // Aquí se obtienen los datos del formulario
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const cotizarSeguro = () => {
    // Base
    let result = 2000

    // Obtener la diferencia de años
    const difference = getYearDifference(data.year)

    // Restar el 3% por cada año de diferencia
    result -= difference * 0.03 * result

    // Americano 15%, Asiático 5%, Europeo 30%
    result *= calculateBrand(data.marca)

    // Básico aumenta 20%, Completo 50%
    result *= calculatePlan(data.plan)

    result = formatCurrency(result)

    setLoading(true)

    setTimeout(() => {
      setResult(result)
      setLoading(false)
    }, 3000)
  }

  return (
    <CotizadorContext.Provider
      value={{
        // Aquí van las funciones y el state
        data,
        handleChangeData,
        error,
        setError,
        cotizarSeguro,
        result,
        loading,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export { CotizadorProvider }

export default CotizadorContext
