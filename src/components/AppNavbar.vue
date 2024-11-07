<template>
    <nav>
      <ul>
        <li 
          v-for="category in categories" 
          :key="category"
          @click="changeCategory(category)"
          :class="{ active: category === selectedCategory }"
        >
          {{ category }}
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['categories', 'selectedCategory']),
    },
    methods: {
      ...mapActions(['changeCategory']),
    },
    mounted() {
      this.$store.dispatch('fetchCategories');
    },
  };
  </script>
  
  <style scoped>
  /* Basic styling for active category */
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav ul li {
    cursor: pointer;
    padding: 0.5em;
  }
  
  nav ul li.active {
    font-weight: bold;
    color: blue;
  }
  </style>
  