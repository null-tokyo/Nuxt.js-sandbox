<template>
  <div class="Todo">
    <div class="Todo_title">{{ todo.title }}</div>
    <div 
      class="Todo_close" 
      @click="close">close</div>
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
    close() {
      this.$emit('close', this.todo)
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
.Todo_title {
  flex: 0 1 80%;
}
.Todo_close {
  cursor: pointer;
  flex: 0 1 10%;
}
</style>
