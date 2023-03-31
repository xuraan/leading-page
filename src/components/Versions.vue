<script setup lang="ts">
import Version from './Version.vue'
import Section from './Section.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
    <Section id="versions">
        <template #title>
            <h2>App Versions</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.</p>
        </template>
        <template #body>
            <div class="row no-gutters">
                <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                    <div class="content d-flex flex-column justify-content-center">
                        <div class="row">
                            <Version>
                                <template #icon>
                                    <ToolingIcon />
                                </template>
                                <template #heading>1.0.2</template>
                                <template #body>
                                    This project is served and bundled with
                                    <a href="https://vitejs.dev/guide/features.html" target="_blank"
                                        rel="noopener">Vite</a>.
                                    The
                                    recommended IDE setup is
                                    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
                                    <a href="https://github.com/johnsoncodehk/volar" target="_blank"
                                        rel="noopener">Volar</a>.
                                    If
                                    you need to test your components and web pages, check out
                                    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
                                    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.
                                </template>
                            </Version>
                            <Version>
                                <template #icon>
                                    <ToolingIcon />
                                </template>
                                <template #heading>1.0</template>
                                <template #body>
                                    This project is served and bundled with
                                    <a href="https://vitejs.dev/guide/features.html" target="_blank"
                                        rel="noopener">Vite</a>.
                                    The
                                    recommended IDE setup is
                                    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
                                    <a href="https://github.com/johnsoncodehk/volar" target="_blank"
                                        rel="noopener">Volar</a>.
                                    If
                                    you need to test your components and web pages, check out
                                    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
                                    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.
                                </template>
                            </Version>
                        </div>
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

</style>
