<template>
  <div>
    <h1>Chuck Norris Jokes</h1>
    <JokeList />
    <AppPagination />
  </div>
</template>

<script>
import JokeList from '../components/JokeList.vue';
import AppPagination from '../components/AppPagination.vue';

export default {
  name: 'AppHome',
  components: {
    JokeList,
    AppPagination,
  },
};
</script>
