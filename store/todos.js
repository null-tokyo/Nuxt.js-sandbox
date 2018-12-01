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
  add(state, title) {
    state.list.push({
      title: title,
      complete: false,
      timestamp: new Date().getTime()
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggleComplete(state, todo) {
    todo.complete = !todo.complete
  }
}
