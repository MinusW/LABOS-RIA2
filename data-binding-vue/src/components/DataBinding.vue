<script setup>
import { ref } from 'vue'

const name = ref('John Doe')
const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
</script>

<template>
  <div id="name-container">
    <p>{{ name }}</p>
  </div>

<ul id="items-container">
  <li v-for="item in items" :key="item">{{ item }}</li>
</ul>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 40px;
}

h1 {
  color: #333;
}

#name-container {
  margin-bottom: 20px;
  font-size: 24px;
}

#items-container {
  font-size: 18px;
}

</style>
