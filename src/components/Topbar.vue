
<script setup lang="ts">
import LocalSelect from './LocalSelect.vue';

</script>

<template>
    <div class=" topbar fixed-top d-flex justify-content-end align-items-end " role="toolbar" aria-label="Toolbar with button groups">
        <LocalSelect />
    </div>
</template>

<style scoped>
 .topbar {
    height: 50px;
    top: 25px;
 }
</style>