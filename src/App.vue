<template>
  <div id="app">
    <div class="background" />
    <div class="main-container">
      <Header @toggleTheme="toggleTheme"/>
      <InputCard @addCard="addCard($event)"/>
      <div class="card-container">
        <Card v-for="item in todoToShow" :key="item.id"
              @deleteCard="deleteCard(item.id)"
              @checkCard="checkCard(item.id)"
              :class="{checked: item.isChecked}"
        >
          <template v-slot:content>
            <p>{{ item.content }}</p>
          </template>
        </Card>
        <InfoCard @clearCompletedTodo="clearCompletedTodo">
        <p>{{ numberOfTask }} item{{ numberOfTask > 1 ? "s" : null }} left</p>
        </InfoCard>
        <InfoCardDesktop @clearCompletedTodo="clearCompletedTodo" @filterTheCards="filterTheCards">
          <p>{{ numberOfTask }} item{{ numberOfTask > 1 ? "s" : null }} left</p>
        </InfoCardDesktop>
      </div>
      <FilterCard @filterTheCards="filterTheCards" />

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import InputCard from "./components/InputCard.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
import InfoCard from "./components/InfoCard.vue";
import FilterCard from "./components/FilterCard.vue";
import InfoCardDesktop from "./components/InfoCardDesktop.vue";

export default {
  name: "App",
  components: {
    Header,
    InputCard,
    Footer,
    Card,
    InfoCard,
    FilterCard,
    InfoCardDesktop
  },
  data() {
    return {
      todo: [],
      todoCompleted: [],
      todoActive: [],
      todoToShow: [],
      actualFilter: "All",
    }
  },
  methods: {
    deleteCard(cardToDeleteId) {
      this.todo = this.todo.filter( ({id}) =>
          cardToDeleteId !== id
          );
    },
    checkCard(cardToCheckId) {
      this.todo.map( (item) => {
          if (item.id === cardToCheckId) {
            item.isChecked = !item.isChecked
          }
      });
    },
    addCard(inputContent) {
      this.todo.push({
        id: this.nextId,
        content: inputContent,
        isChecked: false,
      })
    },
    clearCompletedTodo() {
      this.todo = this.todo.filter( ({isChecked}) =>
          isChecked === false
      );
    },
    filterTheCards(filterName) {
      this.actualFilter = filterName;
      switch (filterName) {
        case "All":
          this.todoToShow = this.todo;
          break;
        case "Active":
          this.todoToShow = this.todoActive;
          break;
        case "Completed":
          this.todoToShow = this.todoCompleted;
          break;
      }
    },
    toggleTheme() {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        document.body.setAttribute("data-theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
        document.body.setAttribute("data-theme", "dark");

      }
    }
  },
  computed: {
    numberOfTask() {
      return this.todoToShow.length;
    },
    nextId() {
      return this.todo.length === 0 ? 0 : this.todo[this.todo.length - 1].id + 1;
    }
  },
  mounted() {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    } else {
      this.theme = localStorage.getItem("theme");
    }
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", []);
    } else {
      this.todo = JSON.parse(localStorage.getItem("todo"));
      this.todoToShow = this.todo;
    }
  },
  beforeUpdate() {
    if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  },
  watch: {
    todo: {
      handler() {
        localStorage.setItem("todo", JSON.stringify(this.todo));

        this.todoCompleted = this.todo.filter( ({isChecked}) =>
            isChecked
        );

        this.todoActive = this.todo.filter( ({isChecked}) =>
            isChecked === false
        );

        this.filterTheCards(this.actualFilter);
      },
      deep: true
    },
  }
};
</script>

<style lang="scss">


#app {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

body[data-theme="dark"] {
  --background-color: hsl(235, 21%, 11%);
  --background-image-mobile: url("./assets/bg-mobile-dark.jpg");
  --background-image-desktop: url("./assets/bg-desktop-dark.jpg");
  --theme-icon: url("./assets/icon-sun.svg");
  --card-color: hsl(235, 24%, 19%);
  --task-text:  hsl(234, 39%, 85%);
  --info-card-text: hsl(236, 9%, 61%);
  --input-color: hsl(234, 11%, 52%);
  --checked-content: hsl(233, 14%, 35%);
  --hover-text: white;
}

body[data-theme="light"] {
  --background-color: hsl(236, 33%, 92%);
  --background-image-mobile: url("./assets/bg-mobile-light.jpg");
  --background-image-desktop: url("./assets/bg-desktop-light.jpg");
  --theme-icon: url("./assets/icon-moon.svg");
  --card-color: hsl(0, 0%, 98%);
  --task-text: hsl(235, 19%, 35%);
  --info-card-text: hsl(236, 9%, 61%);
  --input-color: black;
  --checked-content: hsl(233, 11%, 84%);
  --hover-text: black;
}

body {
  background: var(--background-color);
  overflow-x: hidden;
}

.background {
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: var(--background-image-mobile) no-repeat;
  background-size: cover;
}

.card-container {
  $radius: 10px;

  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 58vh;
  overflow: scroll;

  width: 85%;
  align-self: center;
  border-radius: $radius;

  > :first-child {
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }
  > :last-child {
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}
</style>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 960px) {
  .main-container {
    align-self: center;
    width: 50%;
  }

  .background {
    background: var(--background-image-desktop) no-repeat;
    background-size: cover;
    height: 300px;
  }
}
</style>

<style>
/*RESET*/


/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

input:focus, textarea:focus, select:focus{
  outline: none;
}
</style>
