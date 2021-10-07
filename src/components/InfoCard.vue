<template>
  <div class="container grix xs2">
    <div class="items-left">
      <slot></slot>
    </div>
    <div class="clear" @click="$emit('clearCompletedTodo')">
      <p>Clear completed</p>
    </div>
  </div>
</template>


<style scoped lang="scss">
$backgroundColor: hsl(235, 24%, 19%);

.container {
  position: relative;
  background-color: $backgroundColor;
  width: 100%;
  min-height: 70px;
  align-items: center;
  color: hsl(233, 14%, 35%)
}

.clear {
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
}

.items-left {
  margin-left: 20px;
}


</style>
