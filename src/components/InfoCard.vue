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

.container {
  position: relative;
  background-color: var(--card-color);
  width: 100%;
  min-height: 70px;
  align-items: center;
  color: var(--info-card-text);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.clear {
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
  > :hover {
    color: var(--hover-text);
  }
}

.items-left {
  margin-left: 20px;
}

@media screen and (min-width: 961px) {
  .container {
    position: absolute;
    display: none;
    z-index: -5;
  }
}

</style>
