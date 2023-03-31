
<script setup lang="ts">
defineProps<{ class?: string, id?: string }>()
</script>

<template>
    <div :id="id" class="min-vh-100 d-flex align-items-center">
        <div class="container">
            <div class="section-title">
                <slot name="title"></slot>
            </div>
            <div class="section-body"><slot name="body"></slot></div>
        </div>
    </div>
</template>
  
<style scoped>
section {
    min-height: 100vh;
}
</style>