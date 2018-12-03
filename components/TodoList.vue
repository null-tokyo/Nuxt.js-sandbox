<template>
  <div class="TodoList">
    <ul 
      v-for="todo in todos"
      :key="todo.title">
      <li>
        <Todo 
          :todo="todo" 
          @complete="complete"
          @close="close"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from '~/components/Todo.vue'
export default {
  components: {
    Todo
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    complete(val) {
      this.$emit('complete', val)
    },
    close(val) {
      this.$emit('close', val)
    }
  }
}
</script>

<style>
.TodoList {
  width: 100%;
}

.TodoList ul {
  margin: 0;
  padding: 0;
}

.TodoList > ul > li {
  margin: 0;
  padding: 20px;
  list-style-type: none;
  text-align-last: left;
  border-top: 1px solid #eee;
}
</style>
