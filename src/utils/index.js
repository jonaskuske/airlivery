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

export const capitalize = str => {
  if (!str) return ''
  str = str.toString()
  return str
    .split(/\s|-/g)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

export const createPropertyComparer = prop => {
  return (a, b) => {
    const propA = a[prop].toUpperCase()
    const propB = b[prop].toUpperCase()

    let comparison = 0
    if (propA > propB) {
      comparison = 1
    } else if (propA < propB) {
      comparison = -1
    }
    return comparison
  }
}

export const readFile = file => {
  return new Promise(res => {
    const reader = new FileReader()
    reader.addEventListener('load', f => res(f.target.result))
    reader.readAsDataURL(file)
  })
}

const imageFile = /^image\//
export const readImageFromInput = ({ target }) => {
  const file = target.files[0]
  if (!imageFile.test(file.type)) return

  return readFile(file)
}
