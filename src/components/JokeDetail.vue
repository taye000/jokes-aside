<template>
    <div class="joke-detail">
        <button @click="goBack" class="back-button">← Back</button> <!-- Back button -->
      <h1>{{ joke ? joke.categories[0] || selectedCategory || 'Uncategorized' : 'Loading...' }}</h1>
      <div v-if="joke">
        <img :src="joke.icon_url" alt="icon" class="joke-icon" />
        <p>{{ joke.value }}</p>
        <small>Created at: {{ joke.created_at }}</small>
      </div>
      <p v-else>Loading joke details...</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'JokeDetail',
    props: ['id'], // Receive the `id` parameter from the route
    data() {
      return {
        joke: null, // Placeholder for joke details
      };
    },
    computed: {
      ...mapState(['selectedCategory']),
    },
    async created() {
      await this.fetchJoke();
    },
    methods: {
      async fetchJoke() {
        // Dispatch Vuex action to fetch a single joke by ID, or use a direct API call if that's simpler.
        try {
          const response = await this.$store.dispatch('fetchJokeById', this.id);
          this.joke = response;
        } catch (error) {
          console.error('Error fetching joke:', error);
        }
      },
      goBack() {
      this.$router.back(); // Navigates back to the previous page
    },
    },
  };
  </script>
  
  <style scoped>
  .joke-detail {
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
  }
  .joke-icon {
    width: 100px;
    height: 100px;
    margin-right: 1em;
    border-radius: 50%;
    object-fit: cover;
  }
  .back-button {
    display: inline-block;
    margin-bottom: 1em;
    padding: 0.5em 1em;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
  }
  .back-button:hover {
    background-color: #0056b3;
  }
  </style>
  