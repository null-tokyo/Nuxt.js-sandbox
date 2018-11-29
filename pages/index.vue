<template>
  <section class="container">
    <div class="l-input-form">
      <InputForm
        @add-todo="addTodo"/>
    </div>
    <div class="l-todo-list">
      <TodoList 
        :todo-list="todoList" 
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
  data: () => {
    return {
      todoList: []
    }
  },
  methods: {
    addTodo(task) {
      this.todoList.unshift(task)
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
