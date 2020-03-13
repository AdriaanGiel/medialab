<template>
    <div id="content">
        <concept-section />
        <client-section />
        <target-section />
        <todo-section />
        <lab-footer />
    </div>
</template>

<script>
    import ConceptSection from './sections/concept-section';
    import ClientSection from './sections/client-section';
    import TargetSection from './sections/target-audience-section';
    import TodoSection from './sections/todo-section';
    import LabFooter from './sections/lab-footer';

    export default {
        name: "mainContent",
        components:{
            "concept-section": ConceptSection,
            "client-section": ClientSection,
            "target-section": TargetSection,
            "todo-section": TodoSection,
            "lab-footer": LabFooter,
        }
    }
</script>

<style scoped lang="stylus">

</style>