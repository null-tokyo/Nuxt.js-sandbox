import firebase from 'firebase'
import config from '../config/firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
