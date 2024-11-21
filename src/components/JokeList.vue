<template>
  <div class="jokes-container">
    <!-- Loading state -->
    <div v-if="isLoading" class="loading"><LoadingSpinner :isVisible="true" /></div>

    <!-- Error state -->
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <!-- No jokes found -->
    <div v-if="!isLoading && !error && !paginatedJokes.length" class="no-jokes">
      <p>No jokes found for the selected category.</p>
    </div>

    <!-- Render jokes -->
    <div
      v-for="joke in paginatedJokes"
      :key="joke.id"
      class="joke-card"
      @click="goToJokeDetail(joke.id)"
    >
      <img :src="joke.icon_url" alt="icon" class="joke-icon" />
      <div class="joke-content">
        <h3>{{ joke.categories[0] || selectedCategory || "Uncategorized" }}</h3>
        <p>{{ joke.value }}</p>
        <small>Created at: {{ joke.created_at }}</small>
      </div>
    </div>

    <!-- Pagination -->
    <AppPagination
      v-if="!isLoading && !error && paginatedJokes.length"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script>
import { useJokeStore } from "../store/index"; // Import Pinia store
import AppPagination from "../components/AppPagination.vue";
import { defineComponent, onMounted, watch, computed } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";

export default defineComponent({
  components: {
    AppPagination,
    LoadingSpinner,
  },
  setup() {
    const jokeStore = useJokeStore();

    // Reactive data and methods
    const {
      paginatedJokes,
      selectedCategory,
      currentPage,
      totalPages,
      isLoading,
      error,
    } = jokeStore;

    // Watch for category changes and refetch jokes
    watch(
      () => jokeStore.selectedCategory,
      () => {
        jokeStore.fetchJokes();
      }
    );

    // Fetch jokes when component mounts
    onMounted(() => {
      if (!jokeStore.jokes.length) {
        jokeStore.fetchJokes();
      }
    });

    // Navigate to joke detail page
    const goToJokeDetail = (id) => {
      this.$router.push({ name: "JokeDetail", params: { id } });
    };

    // Handle page change
    const handlePageChange = (page) => {
      jokeStore.changePage(page);
    };

    // Computed props for loading, errors, and joke data
    const computedPaginatedJokes = computed(() => paginatedJokes);

    return {
      paginatedJokes: computedPaginatedJokes,
      selectedCategory,
      currentPage,
      totalPages,
      isLoading,
      error,
      handlePageChange,
      goToJokeDetail,
    };
  },
});
</script>

<style scoped>
/* Styles for joke cards and pagination */
.jokes-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}

.joke-card {
  display: flex;
  align-items: flex-start;
  border: 1px solid #e0e0e0;
  padding: 1.5em;
  margin: 1em 0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.joke-card:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.joke-icon {
  width: 50px;
  height: 50px;
  margin-right: 1em;
  border-radius: 50%;
  object-fit: cover;
}

/* Align content inside joke card */
.joke-content {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: flex-start; /* Align content at the top */
  flex-grow: 1; /* Make sure content fills the available space */
  height: 100%; /* Ensure it takes the full height */
}

.joke-content h3 {
  font-size: 1.1em;
  color: #2c3e50;
  margin: 0; /* Remove any extra margin to make content align perfectly */
}

.joke-content p {
  font-size: 1em;
  color: #4f4f4f;
  margin: 0.5em 0;
  line-height: 1.5;
}

.joke-content small {
  display: block;
  font-size: 0.8em;
  color: #888888;
  margin-top: 0.5em;
  margin-bottom: 0; /* Remove bottom margin for consistency */
}
</style>
