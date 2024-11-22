import { defineStore } from "pinia";
import axios from "axios";

export const useJokeStore = defineStore("jokeStore", {
  state: () => ({
    isLoading: false,
    categories: [],
    jokes: [],
    joke: null,
    selectedCategory: "food",
    currentPage: 1,
    jokesPerPage: 5,
    totalJokes: 0, // Store total jokes count from API
    error: null, // Add error state to handle fetch failures
  }),

  getters: {
    paginatedJokes(state) {
      if (state.isLoading) return []; // Return empty if loading
      const start = (state.currentPage - 1) * state.jokesPerPage;
      return state.jokes.slice(start, start + state.jokesPerPage);
    },
    totalPages(state) {
      return Math.ceil(state.totalJokes / state.jokesPerPage); // Use totalJokes from the API
    },
  },

  actions: {
    async fetchCategories() {
      if (this.categories.length > 0) return;

      this.isLoading = true;
      this.error = null;
      try {
        const { data } = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        this.categories = data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        this.error = "Failed to load categories. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchJokes() {
      if (this.selectedCategory === this.previousCategory) return;

      this.isLoading = true;
      this.error = null;
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${this.selectedCategory}`
        );
        console.log("Fetched jokes for category:", data);
        this.jokes = data.result; // Store jokes in state
        this.totalJokes = data.total; // Store total count from the response
        this.previousCategory = this.selectedCategory;
      } catch (error) {
        console.error("Error fetching jokes:", error);
        this.error = "Failed to load jokes. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchJokeById(id) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get(
          `https://api.chucknorris.io/jokes/${id}`
        );
        this.joke = response.data;
      } catch (error) {
        console.error("Error fetching joke:", error);
        this.error = "Failed to load the joke. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },

    changeCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1; // Reset to first page
      this.fetchJokes(); // Trigger fetching new jokes
    },

    changePage(page) {
      this.currentPage = page;
    },
  },
});
