import useCotizador from '../hooks/useCotizador'

const Error = () => {
  const { error } = useCotizador()

  return (
    <>
      {error && (
        <div className=" bg-red-500 text-white font-bold py-2 mb-8 text-center rounded">
          <p>{error}</p>
        </div>
      )}
    </>
  )
}

export default Error
