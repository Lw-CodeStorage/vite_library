<!-- src/components/MyComponent.vue -->
<template>
    <v-app>
          <v-main>
            <v-icon icon="$vuetify"></v-icon>
            <v-btn color="primary" @click="handleClick">
              {{ label }}
            </v-btn>
            <v-data-table :items="items"></v-data-table>
          </v-main>
        
    </v-app>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    const items = [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
  ]
    const label = ref('label2')
    function handleClick(){
        alert('test')
    }
  </script>
  
  <style scoped>
  /* 你可以添加組件的局部樣式 */
  </style>
  