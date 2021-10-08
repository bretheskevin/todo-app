<template>
  <div class="container">
    <p class="filters" v-for="filter in filters" :key="filter.id" :class="{active: filter.isActive}"
       @click="setActive(filter.id); $emit('filterTheCards', filter.name)">
      {{ filter.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FilterCard",
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
      if (window.innerWidth < 960) {
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

.container {
  display: flex;
  justify-content: center;
  background-color: var(--card-color);
  width: 85%;
  min-height: 70px;
  align-items: center;
  align-self: center;
  color: var(--info-card-text);
  border-radius: 10px;
  margin-bottom: 10px;
}

.filters {
  margin-right: 7px;
  margin-left: 7px;
  font-size: 20px;

  &:hover {
    color: var(--hover-text);
    cursor: pointer;
  }
}

.active {
  color: hsl(220, 98%, 61%);
}

@media screen and (min-width: 961px) {
  .container {
    position: absolute;
    left: 99999px;
  }
}

</style>
