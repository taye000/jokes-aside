<template>
  <div>
    <h1>Chuck Norris Jokes</h1>
    <JokeList />
    <AppPagination />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import JokeList from '../components/JokeList.vue';
import AppPagination from '../components/AppPagination.vue';

export default defineComponent({
  name: 'AppHome',
  components: {
    JokeList,
    AppPagination,
  },
  setup() {
    // In the setup function, we can handle logic related to state and actions if needed
    return {};
  },
});
</script>
