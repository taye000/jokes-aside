<template>
  <div class="pagination">
    <button 
      :disabled="currentPage === 1" 
      @click="pageChanged(currentPage - 1)"
      :class="{ 'cursor-pointer': currentPage !== 1, 'cursor-not-allowed': currentPage === 1 }"
    >
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button 
      :disabled="currentPage === totalPages" 
      @click="pageChanged(currentPage + 1)"
      :class="{ 'cursor-pointer': currentPage !== totalPages, 'cursor-not-allowed': currentPage === totalPages }"
    >
      Next
    </button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useJokeStore } from '../store/index'; // Import the Pinia store

export default defineComponent({
  name: 'AppPagination',
  setup() {
    const jokeStore = useJokeStore(); // Access the joke store
    
    // Use computed properties to make currentPage and totalPages reactive
    const currentPage = computed(() => jokeStore.currentPage);
    const totalPages = computed(() => jokeStore.totalPages);

    // Handle page change
    const pageChanged = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        jokeStore.changePage(page); // Update the current page in the Pinia store
      }
    };

    return {
      currentPage,
      totalPages,
      pageChanged,
    };
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
}

button {
  padding: 0.5em 1em;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-not-allowed {
  cursor: not-allowed;
}
</style>
