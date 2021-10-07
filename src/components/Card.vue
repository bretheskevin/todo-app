<template>
  <div class="container">
    <div class="checkbox-container" @click="$emit('checkCard')">
      <div class="checkbox">
        <div class="checkbox-bg">

        </div>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="delete" @click="$emit('deleteCard')">
      <img src="../assets/icon-cross.svg" alt="delete"/>
    </div>
    <hr class="divider"/>
  </div>
</template>


<style scoped lang="scss">
$backgroundColor: hsl(235, 24%, 19%);

.container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: $backgroundColor;
  width: 100%;
  min-height: 70px;
}

.divider {
  position: absolute;
  margin: 0;
  bottom: 0;
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(133, 132, 132, 0.3);
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

.content {
  display: flex;
  height: 100%;
  align-items: center;
}

p {
  background-color: $backgroundColor;
  color: hsl(234, 39%, 85%);
  width: 100%;
}

.input-container {
  width: 75%;
}

.delete {
  margin-left: auto;
  margin-right: 15px;
}

</style>
