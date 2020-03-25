<template>
    <div id="content">
        <client-section />
        <assignment-section />
        <target-section />

        <concept-section />
        <client-choice-section />
        <research-section />
        <choice-section />
        <visuals-section />
        <todo-section />
        <lab-footer />

    </div>
</template>

<script>
    import AssignmentSection from './sections/assignment-section';
    import ConceptSection from './sections/concept-section';
    import ClientSection from './sections/client-section';
    import ClientChoiceSection from './sections/client-choice-section';
    import ChoiceSection from './sections/choice-section';
    import ResearchSection from './sections/research-section';
    import TargetSection from './sections/target-audience-section';
    import VisualsSection from './sections/visuals-section';
    import TodoSection from './sections/todo-section';
    import LabFooter from './sections/lab-footer';

    export default {
        name: "mainContent",
        components:{
            "assignment-section": AssignmentSection,
            "concept-section": ConceptSection,
            "client-section": ClientSection,
            "client-choice-section": ClientChoiceSection,
            "choice-section": ChoiceSection,
            "research-section": ResearchSection,
            "target-section": TargetSection,
            "visuals-section": VisualsSection,
            "todo-section": TodoSection,
            "lab-footer": LabFooter,
        }
    }
</script>

<style scoped lang="stylus">

</style>