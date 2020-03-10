<template>
    <section id="concepts" class="">

        <div class="container h-full mx-auto flex justify-center items-center">
            <div>
                <div class="container mx-auto flex justify-center items-end">
                    <h2 class="text-4xl text-center">Concepts</h2>
                </div>
                <div class="container flex">
                    <concept class="flex-1 mx-1" name="Eigen identiteit" description="De focus ligt op de personalisatie van de robot. De robot is van de gebruiker. Op deze manier ontstaat er een betere band tussen mens en machine."/>
                    <concept class="flex-1 mx-1" name="Emotie" description="De focus ligt bij alle communicatie dat niet gecommuniceerd wordt met woorden, met name gezichtsuitdrukkingen, geluiden, kleuren en lichten." />
                    <concept class="flex-1 mx-1" name="Interactie" description="De robot werkt goed, maar nog niet optimaal. Door de functies die niet werken aan te passen, kan de robot optimaal de gebruiker helpen."/>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import Concept from '../components/concept';
    export default {
        name: "concept-section",
        components:{
            Concept
        }
    }
</script>

<style scoped lang="stylus">

</style>