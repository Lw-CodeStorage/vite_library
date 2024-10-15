<template>
    <main>
      <v-btn color="red">123</v-btn>
      <h1>A</h1>
      {{ A }}
    </main>
</template>
<script setup>
import {ref} from 'vue'
const A  = ref("A")
</script>