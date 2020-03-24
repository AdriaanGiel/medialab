<template>
    <section id="content">
        <div class="container">
            <intro-section/>
<!--            <brainstorm-section/>-->
        </div>
    </section>
</template>

<script>

    import brainstormSection from './sections/brainstorm-section'
    import introSection from './sections/intro-section'
    export default {
        name: "mainContent",
        components:{
            "brainstorm-section" : brainstormSection,
            "intro-section" : introSection
        }
    }
</script>

<style scoped>

</style>