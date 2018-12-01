<template>
  <form
    action=""
    name="addTodo"
    @submit.prevent="onSubmit">
    <div class="input">
      <input
        v-model="title"
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
      title: ''
    }
  },
  methods: {
    onSubmit(e) {
      this.$store.commit('todos/add', this.title)
      this.title = ''
    }
  }
}
</script>

<style>
</style>
