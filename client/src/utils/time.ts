export function secondsToDuration(seconds: number): string {
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)
  let days = Math.floor(hours / 24)
  let weeks = Math.floor(days / 7)
  let months = Math.floor(weeks / 4)
  let years = Math.floor(months / 12)
  seconds = seconds % 60
  minutes %= 60
  hours %= 24
  days %= 7
  weeks %= 4
  months %= 12

  let string = ""

  if (years > 0) {
    string += `${years}y `
  }
  if (months > 0) {
    string += `${months}mo `
  }
  if (weeks > 0) {
    string += `${weeks}w `
  }
  if (days > 0) {
    string += `${days}d `
  }
  if (hours > 0) {
    string += `${hours}h `
  }
  if (minutes > 0) {
    string += `${minutes}m `
  }
  if (seconds > 0) {
    string += `${seconds}s`
  }
  return string
}
