export const marcas = [
  {
    id: 1,
    nombre: "Europeo",
  },
  {
    id: 2,
    nombre: "Américano",
  },
  {
    id: 3,
    nombre: "Asiático",
  },
]

const maxYear = new Date().getFullYear()
export const years = Array.from(new Array(20), (val, index) => maxYear - index)

export const planes = [
  {
    id: 1,
    nombre: "Básico",
  },
  {
    id: 2,
    nombre: "Completo",
  },
]
