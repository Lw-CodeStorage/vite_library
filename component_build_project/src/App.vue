<!-- 這裡是用來單純看元件開發的樣子，打包因vite config 有設定 entry，因此會參考 lib/lib.js 設定 -->
<template>
<A></A>
<B></B>
</template>
<script setup>
import {ref} from 'vue'
import A from '@/components/A.vue'
import B from '@/components/B.vue'
const test  = ref("test")
</script>