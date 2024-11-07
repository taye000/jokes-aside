<template>
    <div>
      <div v-for="joke in paginatedJokes" :key="joke.id" class="joke-card">
        <img :src="joke.icon_url" alt="icon" />
        <h3>{{ joke.categories[0] || 'Uncategorized' }}</h3>
        <p>{{ joke.value }}</p>
        <small>Created at: {{ joke.created_at }}</small>
      </div>
      <pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="changePage"
      />
    </div>
  </template>
  
  <script>
  import { mapGetters, mapState, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['currentPage']),
      ...mapGetters(['paginatedJokes', 'totalPages']),
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      changePage(page) {
        this.setCurrentPage(page);
      },
    },
    mounted() {
      this.$store.dispatch('fetchJokes');
    },
  };
  </script>
  
  <style scoped>
  .joke-card {
    border: 1px solid #ddd;
    padding: 1em;
    margin: 1em 0;
  }
  </style>
  