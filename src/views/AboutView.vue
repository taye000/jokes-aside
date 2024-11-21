<template>
  <div class="about">
    <h1>About the Chuck Norris Jokes App</h1>
    <p>
      Welcome to the Chuck Norris Jokes App! Here, you can browse an endless supply of hilarious Chuck Norris jokes
      by category. This app was created for fans of Chuck Norris and his legendary status in pop culture.
    </p>

    <h2>Why Chuck Norris Jokes?</h2>
    <p>
      Chuck Norris jokes have been a staple of internet humor for years. Known for his invincible, superhuman persona,
      these jokes reflect the exaggerated, humorous feats of Chuck Norris.
    </p>

    <h2>Fun Facts</h2>
    <ul>
      <li>Chuck Norris jokes started circulating on the internet in the early 2000s.</li>
      <li>They became a phenomenon, with fans worldwide creating new jokes every day.</li>
      <li>This app uses the Chuck Norris Jokes API to deliver fresh jokes to your screen.</li>
    </ul>

    <h2>Contact Us</h2>
    <p>
      Have suggestions or feedback? Feel free to <a href="#contact">contact us</a>!
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  setup() {
    // No dynamic data is needed, so setup remains simple.
    return {};
  },
});
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
  color: #2c3e50;
}

.about h1 {
  font-size: 2em;
  color: #42b983;
  text-align: center;
}

.about h2 {
  font-size: 1.5em;
  color: #34495e;
  margin-top: 1.5em;
}

.about p {
  font-size: 1em;
  line-height: 1.6;
  color: #555555;
}

.about ul {
  list-style-type: disc;
  padding-left: 1.5em;
}

.about ul li {
  margin: 0.5em 0;
  color: #666666;
}

.about a {
  color: #42b983;
  text-decoration: none;
  transition: color 0.3s;
}

.about a:hover {
  color: #1abc9c;
}
</style>
