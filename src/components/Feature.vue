
<script setup lang="ts">
    defineProps<{ title: string, body: string, iconName: string }>()
</script>

<template>
    <div class="col-md-6 icon-box" data-aos="fade-up">
            <i :class="iconName"></i>
            <h4>{{title}}</h4>
            <p>{{body}}</p>
        </div> 
  </template>
  
  <style scoped>
    .icon-box {
        margin-top: 25px;
    }

    .icon-box h4 {
        font-size: 20px;
        font-weight: 700;
        margin: 5px 0 10px 60px;
    }

    .icon-box i {
        font-size: 48px;
        float: left;
        color: #2C6030;
    }

    .icon-box p {
        font-size: 15px;
        color: #2c603079;
        margin-left: 60px;
    }

    h4 {
        font-size: 20px;
        font-weight: 700;
        margin: 5px 0 10px 60px;
    }
  </style>
  