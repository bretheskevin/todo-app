<template>
  <div id="app">
    <div class="background" />
    <div class="main-container">
      <Header />
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
  beforeMount() {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", []);
    } else {
      this.todo = JSON.parse(localStorage.getItem("todo"));
      this.todoToShow = this.todo;
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

body {
  background: hsl(235, 21%, 11%);
}

.background {
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: url("./assets/bg-mobile-dark.jpg") no-repeat;
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
    background: url("./assets/bg-desktop-dark.jpg") no-repeat;
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
