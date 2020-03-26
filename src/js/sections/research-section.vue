<template>
    <section id="research">
        <div class="container test p-5 h-full mx-auto flex flex-col justify-center items-center">

            <div class="w-full text-center mb-10 mb-10">
                <p class="lg:text-3xl md:text-3xl sm:text-2xl"><span class="title-box px-5 py-3">Doelgroep Onderzoek</span></p>
            </div>

            <div class="sm:w-full lg:w-1/2 md:w-full text-center mb-10 mb-10">
                <p class="text-xl">Om ons doelgroep te leren kennen hebben we meerdere interviews en enquetes gedaan. Helaas is het vrij moeilijk om specifiek een
                student te vinden die door landurige ziekte thuis zit. We hebben daarom studenten geinterviewed die dicht aansluiten op de criteria. De resultaten hebben
                we gebruikt om ons concept keuze te maken</p>
            </div>

            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                    <img @click="index = 2" class="empathy-img" :src="empathyImage" alt="empathy-map">
                </div>
                <div class="flex flex-col justify-center items-center">

                    <LightGallery
                            :images="[
                                {title: 'Persona', url: personaOneImage},
                                {title: 'Persona 2', url: personaTwoImage},
                                {title: 'Empathy-map', url: empathyImage},
                            ]"
                            :index="index"
                            :disable-scroll="true"
                            @close="index = null"
                    />
                    <ul>
                        <li v-for="(thumb, thumbIndex) in [
                                      personaOneImage,
                                      personaTwoImage,
                                    ]"
                                :key="thumbIndex"
                                @click="index = thumbIndex">
                            <img class="persona mb-3" :src="thumb">
                        </li>
                    </ul>

<!--                    <ul id="lightgallery">-->
<!--                        <li :data-src="personaOneImage">-->
<!--                            <img class="persona mb-5" :src="personaOneImage" alt="persona">-->
<!--                        </li>-->

<!--                        <li :data-src="personaTwoImage">-->
<!--                            <img class="persona" :src="personaTwoImage" alt="persona two">-->
<!--                        </li>-->
<!--                    </ul>-->

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { LightGallery } from 'vue-light-gallery';

    export default {
        name: "research-section",
        components: {
            LightGallery,
        },
        data(){
            return{
                empathyImage: "./images/empathy_map-1.jpg",
                personaOneImage: "./images/persona_1.jpg",
                personaTwoImage: "./images/persona_2-1.jpg",
                index: null
            }
        }
    }
</script>

<style lang="stylus" scoped>

@media (min-width: 768px)
    section
        height 100% !important


.test
    height 1000px !important
.empathy-img
    width 90%
    height auto

.persona
    width 80%
    height auto

</style>