<script setup lang="ts">
import Feature from './Feature.vue'
import Section from './Section.vue';
import { local } from '@/stores/local'

</script>

<template>
  <Section id="features">
    <template #title>
      <h2>{{local.strings.features}}</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </template>
    <template #body>
      <div class="row no-gutters">
        <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1 animate__animated animate__fadeInUp">
          <div class="content d-flex flex-column justify-content-center">
            <div class="row">
              <Feature icon-name="bi bi-heart-fill" title="Favorites"
                body="Slack un one of personal collection that provided by anyone" />
              <Feature icon-name="bi bi-github" title="Slack"
                body="Slack un one of personal collection that provided by anyone" />
              <Feature icon-name="bi bi-github" title="Slack"
                body="Slack un one of personal collection that provided by anyone" />
              <Feature icon-name="bi bi-github" title="Slack"
                body="Slack un one of personal collection that provided by anyone" />
              <Feature icon-name="bi bi-github" title="Slack"
                body="Slack un one of personal collection that provided by anyone" />
              <Feature icon-name="bi bi-github" title="Slack"
                body="Slack un one of personal collection that provided by anyone" />
            </div>
          </div>
        </div>
        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2"
          data-aos="fade-left" data-aos-delay="100">
          <img src="@/assets/img/features.svg" class="img-fluid animate__animated animate__fadeInRight" alt="" />
        </div>
      </div>
    </template>

  </Section>
</template>

<style scoped>
.features .content {
  padding: 30px 0;
}

@media (max-width: 991px) {
  .features .image {
    text-align: center;
  }

  .features .image img {
    max-width: 80%;
  }
}

@media (max-width: 667px) {
  .features .image img {
    max-width: 100%;
  }
}</style>