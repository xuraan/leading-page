<script setup lang="ts">
import AccordionItem from './AccordionItem.vue'
import Section from './Section.vue'
</script>

<template>
    <Section id="faq">
        <template #title>
            <h2>Frequently Asked Questions</h2>
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.
            </p>
        </template>
        <template #body>
            <div class="row no-gutters">
                <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                    <div class="accordion col-12" id="accordionExample">
                        <AccordionItem id="1" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="2" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="3" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="4" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="5" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="6" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="7" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="8" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="9" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                        <AccordionItem id="10" title="Qui es-tu?" body="moussa" parent-id="accordionExample" />
                    </div>
                </div>
                <div class="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2"
                    data-aos="fade-left" data-aos-delay="100">
                    <img src="@/assets/img/features.svg" class="img-fluid" alt="" />
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
}
</style>