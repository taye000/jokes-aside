<template>
    <div class="joke-detail">
      <button @click="goBack" class="back-button">← Back</button> <!-- Back button -->
      <div v-if="joke" class="joke-card">
        <h1 class="joke-category">{{ joke.categories[0] || selectedCategory || 'Uncategorized' }}</h1>
        <img :src="joke.icon_url" alt="icon" class="joke-icon" />
        <p class="joke-text">{{ joke.value }}</p>
        <small class="joke-date">Created at: {{ joke.created_at }}</small>
      </div>
      <p v-else class="loading-text">Loading joke details...</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'JokeDetail',
    computed: {
      ...mapState(['joke', 'selectedCategory']),  // Map the joke and selectedCategory from Vuex
    },
    async created() {
      const jokeId = this.$route.params.id;  // Fetch the joke ID from the route
      this.fetchJokeById(jokeId);  // Fetch the joke using the Vuex action
    },
    methods: {
      ...mapActions(['fetchJokeById']),  // Map the fetchJokeById action from Vuex
      goBack() {
        this.$router.back();  // Navigate back to the previous page
      },
    },
  };
  </script>
  
  <style scoped>
  .joke-detail {
    max-width: 600px;
    margin: 2em auto;
    padding: 1em;
    text-align: center;
  }
  
  .back-button {
    display: inline-block;
    margin-bottom: 1.5em;
    padding: 0.7em 1.5em;
    background-color: #42b983;
    color: #ffffff;
    border: none;
    border-radius: 25px; /* Rounded pill shape */
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;
  }
  
  .back-button:hover {
    background-color: #34495e;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* More prominent shadow on hover */
    transform: translateY(-2px); /* Slight lift on hover */
  }
  
  .joke-card {
    background-color: #ffffff;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .joke-category {
    font-size: 1.2em;
    color: #333;
    font-weight: bold;
    margin-bottom: 1em;
  }
  
  .joke-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin: 1em 0;
  }
  
  .joke-text {
    font-size: 1.1em;
    color: #4f4f4f;
    line-height: 1.6;
    margin-bottom: 1em;
  }
  
  .joke-date {
    display: block;
    font-size: 0.9em;
    color: #888888;
    margin-top: 0.5em;
  }
  
  .loading-text {
    font-size: 1.2em;
    color: #555;
    padding: 2em;
  }
  </style>
  