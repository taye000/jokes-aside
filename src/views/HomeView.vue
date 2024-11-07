<template>
  <div>
    <h1>Chuck Norris Jokes</h1>
    <JokeList />
    <AppPagination />
  </div>
</template>

<script>
import JokeList from '../components/JokeList.vue';

export default {
  name: 'AppHome',
  components: {
    JokeList,
  },
};
</script>
