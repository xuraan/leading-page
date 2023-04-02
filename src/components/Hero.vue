<script setup lang="ts">
import { local } from '@/stores/local'

</script>

<template>
    <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-lg-0 order-2 order-lg-1"
                    data-aos="fade-up">
                    <div class="animate__animated animate__fadeInUp">
                        <h1 class="mb-3">{{ local.strings.app_name }}</h1>
                        <h2 class="mb-2 animate__animated animate__fadeInLeft">
                            Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii
                            forensibus voluptatibus. His ei nihil feugait percipitur sa la vie.
                        </h2>

                        <div class="d-flex justify-content-center ">
                            <a href="#" class="btn download-btn  disabled"><i class="bi bi-google-play"></i> Google Play</a>
                            <a href="#" class="btn download-btn "><i class="bi bi-apple"></i> Apple Store</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
                    data-aos="fade-up">
                    <img src="@/assets/img/icon.svg" class="img-fluid animate__animated animate__fadeInRight" alt="" />
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
#hero {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 125px 0 220px 0;
}

#hero::before {
    content: "";
    position: absolute;
    right: -100%;
    top: 20%;
    width: 250%;
    height: 200%;
    z-index: -1;
    background-color: #26bd3222;
    transform: skewY(135deg);
} 


#hero .download-btn {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 15px;
    border-radius: 20px;
    transition: 0.5s;
    color: #fff;
    background: #2C6030;
    text-align: center !important;
}

#hero .download-btn:hover {
    background: #2c603000;
    border: #2C6030 1px solid;
    color: #2C6030;
}

#hero .download-btn i {
    font-size: 20px;
}

#hero .hero-img {
    text-align: center;
}

@media (max-width: 991px) {
    #hero {
        text-align: center;
    }

    #hero .hero-img {
        text-align: center;
    }

}

@media (max-width: 575px) {
    #hero {
        padding-top: 0px;
    }
}
</style>