<template>
    <div class="input-group mb-3 select animate__animated animate__fadeInDown">
      <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-translate"></i>
      </span>
      <select v-model="localStore.local" class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option v-for="local in LOCALS" :value="local" >
          {{ local.flag }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useLocalStore } from '@/stores/local'
  import { LOCALS } from '@/helper/constants'
  
  const localStore = useLocalStore()
  </script>
  
  <style scoped>
  .select {
    width: 110px;
    padding-top: 25px;
    margin-right: 25px;
  }
  </style>
  