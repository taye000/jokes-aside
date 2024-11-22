<template>
  <div>
    <h1>Chuck Norris Jokes</h1>
    <!-- Pass currentPage as a prop to JokeList -->
    <JokeList :currentPage="currentPage" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useJokeStore } from '../store'; // Import your Pinia store
import JokeList from '../components/JokeList.vue';

export default defineComponent({
  name: 'AppHome',
  components: {
    JokeList,
  },
  setup() {
    const jokeStore = useJokeStore(); // Access the joke store
    
    return {
      currentPage: jokeStore.currentPage,
    };
  },
});
</script>
