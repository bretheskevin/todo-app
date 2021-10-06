<template>
  <div class="container">
    <div class="checkbox">
    </div>
    <div contenteditable="true">
      <p>Create a new todo...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputCard",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  background-color: hsl(235, 24%, 19%);
  width: 85%;
  height: 60px;
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
}
</style>
