const formater = new Intl.NumberFormat('en-US', {
  style:"decimal",
  minimumIntegerDigits: 2,
})

export function formatMS(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = formater.format(Math.floor((milliseconds % 60000) / 1000))

  return `${minutes}:${seconds}`
}
