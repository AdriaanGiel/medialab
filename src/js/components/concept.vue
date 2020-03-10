<template>
    <div class="max-w-sm concept-card rounded overflow-hidden shadow-lg">
        <div class="h-5 svg-box bg-blue-500 flex">

        </div>
        <div class="px-6 py-4 concept">
            <div class="font-bold text-xl mb-2">{{ name }}</div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "concept",
        props: ["name", "description","svg"],
    }
</script>

<style scoped lang="stylus">
.concept
    height 12em

.svg-box
    height 15em

.concept-card
    height 28em
</style>