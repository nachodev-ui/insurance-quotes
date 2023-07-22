// Return the difference between the current year and the year of the car
export function getYearDifference(year) {
  return new Date().getFullYear() - year
}

// Calculate the total to pay according to the brand
export function calculateBrand(brand) {
  let increment

  switch (brand) {
    case '1':
      increment = 1.3
      break
    case '2':
      increment = 1.15
      break
    case '3':
      increment = 1.05
      break
    default:
      break
  }

  return increment
}

// Calculate the type of insurance
export function calculatePlan(plan) {
  return plan === '1' ? 1.2 : 1.5
}

// Format the total to the currency
export function formatCurrency(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
