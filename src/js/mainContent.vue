<template>
    <section id="content">
        <div class="container">
            <intro-section/>
            <brainstorm-section/>
            <onderzoek-section/>
        </div>
    </section>
</template>

<script>

    import brainstormSection from './sections/brainstorm-section'
    import introSection from './sections/intro-section'
    import onderzoekSection from './sections/onderzoek-section'
    export default {
        name: "mainContent",
        components:{
            "brainstorm-section" : brainstormSection,
            "intro-section" : introSection,
            "onderzoek-section" : onderzoekSection
        }
    }
</script>

<style scoped>

</style>