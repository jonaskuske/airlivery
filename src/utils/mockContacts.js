import jonasImage from '../assets/images/jonas.jpg'
import womanImage from '../assets/images/woman.jpg'
import defaultAvatar from '../assets/images/generic-user.png'

export default [
  {
    name: 'Jonas Kuske',
    image: jonasImage,
    isAdded: true,
    adress: {
      street: 'Sielstraße',
      streetNumber: '5',
      plz: 27568,
      city: 'Bremerhaven',
    },
  },
  {
    name: 'Marta Müller',
    image: womanImage,
    isAdded: false,
    adress: {
      street: 'Lange Gasse',
      streetNumber: '17a',
      plz: 72070,
      city: 'Tübingen',
    },
  },

  {
    name: 'John Doe',
    image: defaultAvatar,
    isAdded: true,
    adress: {
      street: 'Eine Straße',
      streetNumber: '123/2',
      plz: 38569,
      city: 'Unterstätten',
    },
  },
]
