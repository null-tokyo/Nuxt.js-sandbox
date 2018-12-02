import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const todosRef = db.ref('todos')
const INIT_TODO = 'INIT_TODO'
const myPlugin = store => store.dispatch(INIT_TODO, 'todos')

export const state = () => ({
  list: [
    {
      title: 'hoge',
      complete: false,
      timeStamp: 1543577105953
    }
  ]
})

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  [INIT_TODO]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('todos', todosRef, { wait: true })
  })
}

export const plugins = [myPlugin]
