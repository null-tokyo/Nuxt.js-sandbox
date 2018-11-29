<template>
  <form
    action=""
    name="addTodo"
    @submit.prevent="onSubmit">
    <div class="input">
      <input
        v-model="task"
        name="title"
        type="text">
      <button type="submit">
        submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    onSubmit(e) {
      this.$emit('add-todo', {
        title: this.task,
        timestamp: new Date().getTime()
      })
      this.task = ''
    }
  }
}
</script>

<style>
</style>
