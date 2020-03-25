<template>
    <section id="visuals">
        <div class="container h-full mx-auto flex flex-col justify-center items-center">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                <div class="w-full h-full flex justify-center items-center">
                    <div class="w-1/2 h-full flex justify-center items-center">
                        <img class="sketch" :src="sketch1" alt="Schets 1">
                    </div>
                </div>
                <div class="w-full h-full flex justify-center items-center">
                    <div class="w-1/2 h-full flex justify-center items-center">
                        <img class="sketch" :src="sketch2" alt="Schets 2">
                    </div>
                </div>
            </div>
            <div class="w-full">
                <p class="text-3xl text-center py-3 my-10"> <span class="title-box px-5 py-3">Onze schetsen</span></p>
            </div>

            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                <div class="w-full h-full flex justify-center items-center">
                    <div class="w-1/2 h-full flex justify-center items-center">
                        <img class="sketch" :src="sketch3" alt="Schets 4">
                    </div>
                </div>

                <div class="w-full h-full flex justify-center items-center">
                    <div class="w-1/2 h-full flex justify-center items-center">
                        <img class="sketch mx-auto" :src="sketch4" alt="Schets 4">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "visuals-section",
        data(){
            return{
                sketch1:"./images/Vida1.jpg",
                sketch2:"./images/Vida2.jpg",
                sketch3:"./images/Vida3.jpg",
                sketch4:"./images/Vida4.jpg",
            }
        }
    }
</script>

<style lang="stylus" scoped>
.sketch
    width 75%
    height auto
</style>