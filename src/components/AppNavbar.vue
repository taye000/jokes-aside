<template>
  <nav>
    <ul>
      <li 
        v-for="category in categories" 
        :key="category"
        @click="selectCategory(category)"
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
    selectCategory(category) {
      // Dispatch action to change the category
      this.changeCategory(category);

      // Navigate to the home page
      this.$router.push('/');
    },
  },
  mounted() {
    this.$store.dispatch('fetchCategories');
  },
};
</script>

<style scoped>
/* General Navbar Styling */
nav {
  background-color: #2c3e50;
  padding: 1em 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  cursor: pointer;
  padding: 0.5em 1em;
  margin: 0 0.5em;
  color: #ffffff;
  transition: color 0.3s, background-color 0.3s;
}

/* Active Category Styling */
nav ul li.active {
  background-color: #42b983;
  color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
}

/* Hover Effect */
nav ul li:hover {
  background-color: #34495e;
  color: #ffffff;
  border-radius: 4px;
}
</style>
