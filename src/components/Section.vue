
<script setup lang="ts">
defineProps<{ class?: string, id?: string }>()
</script>

<template>
    <div :id="id" class="min-vh-100 d-flex align-items-center">
        <div class="container py-5">
            <div class="section-title animate__animated animate__fadeInDown">
                <slot name="title"></slot>
            </div>
            <div class="section-body pb-1"><slot name="body"></slot></div>
        </div>
    </div>
</template>
  
<style scoped>
section {
    min-height: 100vh;
    padding-bottom: 200px;
}
</style>