<template>
    <section id="onderzoek">
        <div class="flex flex-wrap">

            <div class="w-full mb-4 ">
                <div class="container mx-auto flex justify-center items-end">
                    <h2 class="text-4xl text-center py-8">Onderzoek</h2>
                </div>
            </div>


            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 py-8 " role="alert" >
                <p class="font-bold">Wordt nog aangewerkt</p>
                <p>Voor het onderzoek hebben we naar verschillende dingen gekeken en het onderzoek is nog niet klaar.</p>
                <p> Het blijft een cyclus die blijft doorlopen tijdens het ontwikkeltraject.</p> 
                <p>Als eerste hebben we een debrief gemaakt om een duidelijke beeld te krijgen van het opdracht, vervolgens is er een persona van het doelgroep gemaakt en daarna gingen we criteria's vastellen voor deze opdracht.</p>
                <p> Na het vaststellen van stakeholders hebben we een enquete en interviews gedaan om onze bevindingen te valideren.</p>
            </div>


                <div class="w-1/2 sm:w-1/2  md:w-1/3 lg:w-1/3 xl:w-1/4 py-8 ">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Debrief
                    </button>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 py-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Persona
                    </button>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 py-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Criteria
                    </button>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 py-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Stakeholders
                    </button>
                </div>
                <div class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 py-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Interviews
                    </button>
                </div>
                <div class="w-1/2 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 py-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Enquête
                    </button>
                </div>

            <div class="w-full mb-4 ">
                <div class="container mx-auto flex justify-center items-end">
                    <h2 class="text-4xl text-center py-8">Oneindig cyclus!</h2>
                </div>
            </div>


        </div>
    </section>
</template>

<script>
    export default {
        name: "onderzoek-section",
        data(){
            return{
                image: "./images/logo.png"
            }
        }
    }
</script>

<style scoped>

    #onderzoek{
        width: 100vw;
     background-color: #feebc8;
    }

    .logo{
        opacity: 0.3;
    }

</style>