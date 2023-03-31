<template>
    <div class="input-group mb-3 select  ">
        <span class="input-group-text  glass" id="basic-addon1">
            <i class="bi bi-globe"></i>
        </span>
        <!-- <select id="language-select" :value="store.local" @change="store.updateLocal($event.target?.value)">
      </select> -->
        <select v-model="store.local" class="form-select form-select-sm glass btn-p" aria-label=".form-select-sm example">
            <option v-for="local in store.locals" :value="local.id">
                {{ local.name }} {{ local.flag }}
            </option>
        </select>
    </div>
</template>
  
<script setup lang="ts">
import { useLocalStore } from '@/stores/local';

const store = useLocalStore()

console.log(6)
console.log(store.local?.id)

</script>





<style scoped>
    .select {
       width: 170px;
       padding-top: 25px;;
    }
</style>
