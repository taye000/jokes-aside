<template>
    <div class="loading-spinner" v-if="isVisible">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingSpinner",
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Adjust based on parent container */
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #42b983; /* Green */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  