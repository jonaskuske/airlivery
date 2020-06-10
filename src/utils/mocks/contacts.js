import jonasImage from '../../assets/images/jonas.jpg'
import womanImage from '../../assets/images/woman.jpg'
import defaultAvatar from '../../assets/images/generic-user.png'
import store from '../../store'
import { capitalize } from '../'
import { contactsActions, contactsSelectors } from '../../state/contacts'

const fetchMockContacts = async () => {
  const { results } = await fetch(
    'https://randomuser.me/api/?results=20&inc=name,picture,location',
  )
    .then(r => r.json())
    .catch(() => ({ results: [] }))

  const mockContacts = results
    .map(({ name, location, picture }) => ({
      name: capitalize(`${name.first} ${name.last}`),
      image: picture.thumbnail,
      adress: {
        streetNumber: location.street.number,
        street: capitalize(location.street.name),
        plz: location.postcode,
        city: capitalize(location.city),
      },
    }))
    .filter(r => typeof r.adress.plz === 'number')

  return mockContacts
}

fetchMockContacts().then(contacts => {
  // only add contacts if none have been added yet
  const { getAllContacts } = contactsSelectors
  if (getAllContacts(store.getState()).length > 5) return

  store.dispatch(contactsActions.addContactsToList(contacts))
})

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
