<template>
  <nav>
    <ul>
      <!-- Show loading state -->
      <li v-if="isLoading">
        <LoadingSpinner :isVisible="true" />
      </li>

      <!-- Show error state -->
      <li v-if="error" class="error">{{ error }}</li>

      <!-- Render categories -->
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
import { defineComponent, computed, onMounted } from "vue";
import { useJokeStore } from "../store/index";
import LoadingSpinner from "./LoadingSpinner.vue";

export default defineComponent({
  name: "AppNavbar",
  components: {
    LoadingSpinner,
  },
  setup() {
    const jokeStore = useJokeStore();

    // Reactive access to store state
    const categories = computed(() => jokeStore.categories);
    const selectedCategory = computed(() => jokeStore.selectedCategory);
    const isLoading = computed(() => jokeStore.isLoading);
    const error = computed(() => jokeStore.error);

    // Fetch categories on mount if not already fetched
    onMounted(() => {
      jokeStore.fetchCategories();
    });

    // Handle category selection
    const selectCategory = (category) => {
      jokeStore.changeCategory(category);
    };

    return {
      categories,
      selectedCategory,
      isLoading,
      error,
      selectCategory,
    };
  },
});
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

/* Error Message Styling */
.error {
  color: red;
  font-weight: bold;
}

/* Hover Effect */
nav ul li:hover {
  background-color: #34495e;
  color: #ffffff;
  border-radius: 4px;
}
</style>
