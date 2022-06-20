export const formatDate = (stringDate: string) => {
  const dateDate: Date = new Date(stringDate)
  return `${dateDate.getDay()}.${dateDate.getMonth()}.${dateDate.getFullYear()}`
}

export const formatDateTime = (stringDate: string) => {
  const dateDate: Date = new Date(stringDate)
  return `${formatDate(
    stringDate
  )} ${dateDate.getHours()}:${dateDate.getMinutes()}:${dateDate.getSeconds()}`
}
