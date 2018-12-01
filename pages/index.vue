<template>
  <section class="container">
    <div class="l-input-form">
      <InputForm
        @add-todo="addTodo"/>
    </div>
    <div class="l-todo-list">
      <TodoList 
        :todo-list="todoList" 
        @complete="complete"
        @close="close"/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import InputForm from '~/components/InputForm.vue'
import TodoList from '~/components/TodoList.vue'

export default {
  components: {
    InputForm,
    TodoList
  },
  computed: {
    todoList() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(task) {
      this.todoList.unshift(task)
    },
    complete(task) {
      let i = this.todoList.length
      while (i--) {
        if (this.todoList[i].timestamp === task.timestamp) {
          this.todoList[i].complete = !this.todoList[i].complete
          return
        }
      }
    },
    close(task) {
      let i = this.todoList.length
      while (i--) {
        if (this.todoList[i].timestamp === task.timestamp) {
          this.todoList.splice(i, 1)
          return
        }
      }
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  width: 100%;
  max-width: 680px;
  padding: 0 60px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.l-todo-list {
  width: 100%;
}
</style>
