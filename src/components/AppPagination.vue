<template>
    <div class="pagination">
      <button 
        :disabled="currentPage === 1" 
        @click="pageChanged(currentPage - 1)"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button 
        :disabled="currentPage === totalPages" 
        @click="pageChanged(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
    emits: ['page-changed'],
    methods: {
      pageChanged(page) {
        this.$emit('page-changed', page);
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
  }
  </style>
  