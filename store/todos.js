import firebase from '~/plugins/firebase'
import 'firebase/database'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { INIT_TODO, ADD_TODO } from './action-types'
const db = firebase.database()
const todosRef = db.ref('todos')
const myPlugin = store => store.dispatch(INIT_TODO, [])

export const state = () => ({
  todos: []
})

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  [INIT_TODO]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('todos', todosRef, { wait: true })
  }),
  [ADD_TODO]: firebaseAction((context, text) => {
    todosRef.push(text)
  })
}

export const getters = {
  todos: state => state.todos
}

export const plugins = [myPlugin]
