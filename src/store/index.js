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
    error: null, // Add error state to handle fetch failures
  }),

  getters: {
    paginatedJokes(state) {
      const start = (state.currentPage - 1) * state.jokesPerPage;
      return state.jokes.slice(start, start + state.jokesPerPage);
    },
    totalPages(state) {
      return Math.ceil(state.jokes.length / state.jokesPerPage);
    },
  },

  actions: {
    async fetchCategories() {
      // Prevent redundant API calls if categories are already loaded
      if (this.categories.length > 0) return;

      this.isLoading = true;
      this.error = null; // Reset error state before fetching
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
      // Avoid fetching if the selected category's jokes are already loaded
      if (this.selectedCategory === this.previousCategory) return;

      this.isLoading = true;
      this.error = null;

      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${this.selectedCategory}`
        );
        this.jokes = data.result;
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
      this.error = null; // Reset error state
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
