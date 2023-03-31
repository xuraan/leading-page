
<script setup lang="ts">
import LocalSelect from './LocalSelect.vue';

</script>

<template>
    <div class=" topbar fixed-top d-flex justify-content-around align-items-center start-50 translate-middle" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
            <a type="button" class="btn btn-p disabled">2.0</a>
            <a type="button" class="btn btn-p" href="#"><span class='small bold fw-bold' >QuranAPI</span></a>
            <a type="button" class="btn btn-p" href="#"><i class="bi bi-github" ></i></a>
        </div>
        <LocalSelect />
    </div>
</template>

<style scoped>
 .topbar {
    height: 50px;
    top: 25px;
 }
</style>