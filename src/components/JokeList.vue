<template>
    <div class="jokes-container">
      <div v-for="joke in paginatedJokes" :key="joke.id" class="joke-card">
        <img :src="joke.icon_url" alt="icon" class="joke-icon" />
        <div class="joke-content">
          <h3>{{ joke.categories[0] || 'Uncategorized' }}</h3>
          <p>{{ joke.value }}</p>
          <small>Created at: {{ joke.created_at }}</small>
        </div>
      </div>
      <AppPagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="changePage"
      />
    </div>
  </template>
  
  <script>
  import { mapGetters, mapState, mapMutations } from "vuex";
  import AppPagination from "../components/AppPagination.vue";
  
  export default {
    components: {
      AppPagination,
    },
    computed: {
      ...mapState(["currentPage"]),
      ...mapGetters(["paginatedJokes", "totalPages"]),
    },
    methods: {
      ...mapMutations(["setCurrentPage"]),
      changePage(page) {
        this.setCurrentPage(page); // Update the page in Vuex store
        this.$store.dispatch("fetchJokes"); // Fetch jokes based on the new page
      },
    },
    mounted() {
      this.$store.dispatch("fetchJokes"); // Initially fetch jokes on mount
    },
  };
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
  
  .joke-content h3 {
    font-size: 1.1em;
    color: #2c3e50;
    margin: 0;
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
  }
  </style>
  