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
.container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--card-color);
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
  background-color: var(card-color);
  color: var(--task-text);
  width: 100%;
}

.input-container {
  width: 75%;
}

.delete {
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;
}

.checked {
  .checkbox-container .checkbox {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    z-index: 1;
  }

  .checkbox-container .checkbox .checkbox-bg {
    width: 100%;
    height: 100%;
    background-size: 15px;
    background: url("../assets/icon-check.svg") no-repeat center;
    z-index: 2;
  }

  .content p {
    color: var(--checked-content);
    text-decoration: line-through;
  }


}
</style>
