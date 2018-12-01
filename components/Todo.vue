<template>
  <div 
    :class="{ 'is-complete': todo.complete }"
    class="Todo">
    <div class="Todo_title">{{ todo.title }}</div>
    <div class="Todo_button">
      <button 
        class="Todo_complete" 
        @click="complete">complete</button>
      <button 
        class="Todo_remove" 
        @click="remove">remove</button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    complete() {
      this.$store.commit('todos/toggleComplete', this.todo)
    },
    remove() {
      this.$store.commit('todos/remove', this.todo)
    }
  }
}
</script>

<style>
.Todo {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.Todo.is-complete .Todo_title {
  text-decoration: line-through;
  color: #aaa;
}

.Todo_title {
  flex: 0 1 80%;
}
.Todo_button {
  cursor: pointer;
  flex: 0 1 10%;
  display: flex;
}
</style>
