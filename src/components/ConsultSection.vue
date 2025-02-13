<template>
    <section class="relative bg-white text-white">
        <!-- Desktop-->
        <svg class="absolute top-0 left-0 w-full h-full z-[5] min-h-[800px] overflow-hidden hidden md:block "
            viewBox="0 0 2000 1100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 2000,120 2000,650 0,530" fill="#041E42" />
        </svg>
        <!-- Mobile-->
        <svg class="absolute top-[30px] left-0 w-full h-full z-[5] min-h-[800px] overflow-hidden block md:hidden"
            viewBox="0 0 1000 1100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 1000,80 1000,780 0,700" fill="#041E42" />
        </svg>

        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 pt-32 ">
            <div class="flex justify-center">
                <img src="@/assets/img/maschere-1.png" alt="Esempio Immagine"
                    class="w-full max-w-md lg:max-w-lg h-auto" />
            </div>
            <div class="flex flex-col justify-center px-8">
                <h2 class="text-4xl mb-4 text-secondary">Affidati ad Aleph: la scelta giusta per ogni laboratorio</h2>
                <p class="text-lg mb-4">
                    Le nostre camere climatiche garantiscono un pieno controllo su temperatura, umidità e illuminazione
                    interna. Il mantenimento di condizioni stabili e precise permette di eseguire con successo test di
                    stabilità e di crescita grazie alla combinazione di tre variabili: temperatura, umidità e luci.
                </p>
                <div class="flex mt-8">
                    <button
                        class="border-t-2 uppercase border-white text-base py-4 hover:text-gray-500 transition flex gap-2">
                        Prenota la tua consulenza
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 z-[2] relative  ">

            <div class="flex items-center px-8 md:px-24 py-16 bg-white ">
                <div class="container mx-auto ">
                    <p class="text-sm uppercase tracking-wider text-gray-500 mb-2 border-l-2 border-primary pl-4">Chi
                        siamo</p>

                    <h2 class="text-5xl text-primary mb-6">Oltre 30 anni di esperienza</h2>
                    <p class="text-lg mb-4 text-black">
                        Da <b>oltre trent’anni</b> lavoriamo nel campo della progettazione e dell’installazione di
                        <b>arredo e strumentazione da laboratorio</b>.
                        Mettiamo le <b>persone al centro</b> di ogni processo, ideando soluzioni in grado di dare vita a
                        un ambiente di lavoro sicuro, efficiente e su misura.
                    </p>
                    <div class="flex mt-8">
                        <button
                            class="border-t-2 uppercase border-black text-base py-4 text-black hover:text-gray-500 transition flex gap-2">
                            Contattaci
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden md:block relative min-h-[750px] bg-cover bg-center"
                style="background-image: url('src/assets/img/microscope.png');">
            </div>
        </div>
    </section>
</template>