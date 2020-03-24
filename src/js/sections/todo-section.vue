<template>
    <section id="todo" class="bg-blue-500">
        <div class="container h-full mx-auto flex-col flex justify-center items-center ">
            <div class=" w-full rounded overflow-hidden shadow-lg bg-white p-5">
                <div class="h2 mb-20 text-4xl text-center">TODO</div>
                <div class="container flex text-xl">
                    <div class="flex-1 ">
                        <ul>
                            <li>Brainstormen drie concepten <i class="fas text-green-500 fa-check"></i></li>
                            <li>Presenteren drie concepten <i class="fas text-green-500 fa-check"></i></li>
                            <li>Doelgroep onderzoek (interview, enquete)<i class="fas text-green-500 fa-check"></i></li>
                            <li>Persona(s) maken <i class="fas text-green-500 fa-check"></i></li>
                            <li>Concept keuze maken </li>
                        </ul>
                    </div>
                    <div class="flex-1 text-right">
                        <ul>
                            <li>Business model canvas en waarde propositie</li>
                            <li>Brainstormen visuals</li>
                            <li>Rapid prototypen </li>
                            <li>Prototype testen bij doelgroep </li>
                            <li>Itereren met prototype </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "todo-section"
    }
</script>

<style scoped lang="stylus">
section#todo
    min-height 75vh
    @media (min-width: 768px)
        height 75vh
</style>