export function generateId(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateId)
}

export const wait = time => new Promise(resolve => setTimeout(resolve, time))

export const includesString = (str1 = '', str2, exact) => {
  if (!(typeof str1 === 'string') && str1.toString) {
    str1 = str1.toString()
  }

  if (!exact) return str1.toLowerCase().includes(str2.toLowerCase())
  else return str1.includes(str2)
}
