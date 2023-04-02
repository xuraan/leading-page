<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="doc-style fixed-bottom glass d-flex justify-content-around align-items-center start-50 translate-middle ">
      <RouterLink  to="/features"><i class="bi bi-gear-fill icon animate__animated animate__bounce"></i></RouterLink>
      <RouterLink  to="/versions"><i class="bi bi-git icon "></i></RouterLink>
      <RouterLink  to="/"><i class="bi bi-circle-fill icon "></i></RouterLink>
      <RouterLink  to="/faq"><i class="bi bi-question-circle-fill icon "></i></RouterLink>
      <RouterLink  to="/contacts"><i class="bi bi-person-vcard-fill icon "></i></RouterLink>
  </nav>
</template>

<style scoped>
.doc-style {
  width: 300px;
  height: 50px;
  border-radius: 20px;
  bottom: -10px;
}

.icon {
  font-size: 2rem; 
  animation: icon-animate-down 0.1s ease-in-out;
}

/* .icon:hover {
  font-size: 3rem; 
  animation: icon-animate-up 0.1s ease-in-out;
} */


@media only screen and (min-width: 768px) {
  .doc-style {
    width: 350px;
    height: 50px;
  }
}
@keyframes icon-animate-up {
    0% {
      font-size: 2rem; 
    }
    100% {
      font-size: 3rem; 
    }
}

@keyframes icon-animate-down {
    0% {
      font-size: 3rem; 
    }
    100% {
      font-size: 2rem; 
    }
}

nav a.router-link-exact-active .icon {
  color: var(--color-icon-active);
  font-size: 3rem; 
  animation: icon-animate-up 0.1s ease-in-out;
}

nav a.router-link-exact-active {
  color: #2C6030;
}

nav a.router-link-exact-active:hover {
  color: #2C6030;
}

nav a:hover {
  color: #2c6030b2;
}


nav a {
  background: transparent;
  color: #2a322a;
}

nav a:first-of-type {
  border: 0;
}

</style>