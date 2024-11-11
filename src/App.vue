<template>
  <div id="app" class="app-wrapper">
    <!-- Navbar appears at the top of the page -->
    <AppNavbar />

    <!-- Main content area with jokes list and pagination -->
    <main class="main-content">
      <!-- The router-view is used to dynamically load views based on the route -->
      <router-view />
    </main>

    <!-- Footer appears at the bottom of the page -->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
/* Set up full-height layout */
html, body, #app {
  height: 100%;
  margin: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the wrapper takes the full viewport height */
}

.main-content {
  flex: 1; /* This makes the main content area take up any remaining space */
  padding: 1em;
  text-align: center;
}

footer {
  background-color: #2c3e50;
  color: #ffffff;
  text-align: center;
  padding: 1em;
}
</style>
