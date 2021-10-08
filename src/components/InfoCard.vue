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
  color: hsl(233, 14%, 35%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.clear {
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
  > :hover {
    color: white;
  }
}

.items-left {
  margin-left: 20px;
}

@media screen and (min-width: 961px) {
  .container {
    position: absolute;
    left: 99999px;
  }
}

</style>
