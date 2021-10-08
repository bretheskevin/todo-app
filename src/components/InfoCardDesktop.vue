<template>
  <div class="container">
    <div class="items-left">
      <slot></slot>
    </div>
    <div class="filters-container">
      <p class="filters" v-for="filter in filters" :key="filter.id" :class="{active: filter.isActive}"
         @click="setActive(filter.id); $emit('filterTheCards', filter.name)">
        {{ filter.name }}
      </p>
    </div>
    <div class="clear" @click="$emit('clearCompletedTodo')">
      <p>Clear completed</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCardResponsive",
  data() {
    return {
      filters: [
        {
          id: 0,
          name: "All",
          isActive: true,
        },
        {
          id: 1,
          name: "Active",
          isActive: false,
        },
        {
          id: 2,
          name: "Completed",
          isActive: false,
        },
      ],
    }
  },
  methods: {
    setActive(filterId) {
      this.filters.map( (filter) => {
        filter.isActive = filter.id === filterId;
      })
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        let filterName = "All";
        this.filters.forEach(item => {
          if (item.isActive) {
            filterName = item.name;
          }
        })
        this.$emit("filterTheCards", filterName);
      }
    })
  }
}

</script>

<style scoped lang="scss">
$backgroundColor: hsl(235, 24%, 19%);

.container {
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: $backgroundColor;
  width: 100%;
  min-height: 70px;
  align-items: center;
  color: hsl(233, 14%, 35%)
}

.clear {
  margin-left: auto;
  cursor: pointer;
  > :hover {
    color: white;
  }
  width: 33%;
  text-align: right;
  margin-right: 10px;
}

.items-left {
  margin-left: 10px;
  width: 33%;
}

.filters {
  margin-right: 7px;
  margin-left: 7px;
  font-size: 20px;

  &:hover {
    color: white;
    cursor: pointer;
  }
}

.filters-container {
  display: flex;
  width: 33%;
  margin-right: 40px;
}

.filters {
  font-size: 14px;
}

.active {
  color: hsl(220, 98%, 61%);
}


@media screen and (max-width: 960px) {
  .container {
    position: absolute;
    left: 99999px;
  }
}

</style>
