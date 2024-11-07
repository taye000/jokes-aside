import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    categories: [],
    jokes: [],
    selectedCategory: "food",
    currentPage: 1,
    jokesPerPage: 5,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setJokes(state, jokes) {
      state.jokes = jokes;
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const { data } = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        commit("setCategories", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchJokes({ commit, state }) {
      try {
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${state.selectedCategory}`
        );
        commit("setJokes", data.result);
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    },
    changeCategory({ commit, dispatch }, category) {
      commit("setSelectedCategory", category);
      commit("setCurrentPage", 1); // Reset to first page
      dispatch("fetchJokes");
    },
    changePage({ commit }, page) {
      commit("setCurrentPage", page);
    },
  },
  getters: {
    paginatedJokes(state) {
      const start = (state.currentPage - 1) * state.jokesPerPage;
      return state.jokes.slice(start, start + state.jokesPerPage);
    },
    totalPages(state) {
      return Math.ceil(state.jokes.length / state.jokesPerPage);
    },
  },
});
