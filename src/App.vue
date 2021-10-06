<template>
  <div id="app">
    <Header />
    <InputCard />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputCard from "./components/InputCard.vue";

export default {
  name: "App",
  components: {
    Header,
    InputCard,
  },
};
</script>

<style lang="scss">
*, ::before, ::after {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app {
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: url("./assets/bg-mobile-dark.jpg") no-repeat, hsl(235, 21%, 11%);
  height: 100vh;
  overflow: hidden;
}
</style>
