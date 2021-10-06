<template>
  <div class="container">
    <p id="todo">TODO</p>
    <div id="dark-mode">
      <img src="../assets/icon-sun.svg" alt="dark mode" height="20"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }

  #todo {
    letter-spacing: 10px;
    color: white;
    font-weight: 700;
    font-size: 26px;
  }

  #dark-mode:hover {
    cursor: pointer;
  }
</style>
