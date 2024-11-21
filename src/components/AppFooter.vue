<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} JokeApp | Powered by Chuck Norris Jokes API</p>
      <ul class="footer-links">
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
  setup() {
    // Getting the current year dynamically in the setup function
    const currentYear = new Date().getFullYear();

    return {
      currentYear,
    };
  },
});
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 1.5em 0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
}

.footer p {
  margin: 0;
  font-size: 0.9em;
  color: #cccccc;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 1em 0 0 0;
  display: flex;
  justify-content: center;
}

.footer-links li {
  margin: 0 1em;
}

.footer-links a {
  color: #42b983;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #1abc9c;
}
</style>
