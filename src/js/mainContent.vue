<template>
    <div id="content">
        <concept-section />
        <client-section />
        <lab-footer />
    </div>
</template>

<script>
    import ConceptSection from './sections/concept-section';
    import ClientSection from './sections/client-section';
    import LabFooter from './sections/lab-footer';

    export default {
        name: "mainContent",
        components:{
            "concept-section": ConceptSection,
            "client-section": ClientSection,
            "lab-footer": LabFooter,
        }
    }
</script>

<style scoped lang="stylus">

</style>