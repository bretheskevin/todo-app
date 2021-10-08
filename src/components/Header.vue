<template>
  <div class="container">
    <p id="todo">TODO</p>
    <div id="dark-mode">
      <img src="../assets/icon-sun.svg" alt="dark mode" height="20" class="theme-logo"/>
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
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 30px;
    margin-top: 10px;
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

  @media screen and (min-width: 960px) {
    .container {
      margin-top: 40px;
    }

    #todo {
      font-size: 40px;
      letter-spacing: 20px;
      margin-left: 20px;
    }

    .theme-logo {
      height: 30px;
      margin-right: 20px;
    }
  }
</style>
