<template>
  <div class="container">
    <div class="checkbox" @click="inputValidation">
    </div>
    <div class="input-container" @keyup.enter="inputValidation">
      <input v-model="content" type="text" placeholder="Create a new todo..." id="todoInput"/>
    </div>
  </div>
</template>

<script>


export default {
  name: "InputCard",
  data() {
    return {
      content: "",
      input: null,
    }},
  methods: {
    inputValidation() {
      if (this.content.trim() === "") return // Don't add the task if it's empty

      this.$emit('addCard', this.content);
      this.content = "";
    }
  },
}
</script>

<style scoped lang="scss">

.container {
  display: flex;
  align-items: center;
  background-color: var(--card-color);
  width: 85%;
  height: 70px;
  border-radius: 10px;
  align-self: center;
}

.checkbox {
  height: 20px;
  width: 20px;
  border: hsla(0, 2%, 57%, 0.55) solid 1px;
  border-radius: 100%;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
}

input {
  background-color: var(--card-color);
  color: var(--input-color);
  border: none;
  width: 100%;
}

.input-container {
  width: 75%;
}
</style>
