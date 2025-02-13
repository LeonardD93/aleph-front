<template>
  <section class="relative bg-primary text-white pt-16 pb-32 overflow-hidden">
    <div class="container mx-auto z-10 relative px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-h1 text-secondary font-normal">
            La camera climatica perfetta per la tua realtà
          </h2>
          <p class="text-p1 text-secondary font-normal my-4">
            Siamo Aleph: al tuo fianco dal sopralluogo alla consegna chiavi in mano.
          </p>
          <p class="text-p2 text-white font-normal">
            Le nostre camere climatiche da laboratorio garantiscono condizioni climatiche idonee alla realizzazione di
            <b>test di stabilità</b> su farmaci, alimenti o imballaggi, oltre che alla <b>germinazione</b> e alla
            <b>crescita di piante</b>.
          </p>
        </div>
        <div class="flex justify-center">
          <img src="@/assets/img/maschere-1.png" alt="Camera climatica" class="w-full max-w-md lg:max-w-2xl h-auto" />
        </div>
      </div>
    </div>

    <svg class="absolute top-1/3 left-0 w-full h-auto z-5" viewBox="0 0 2000 8100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,300 2000,0 2000,8100 0,8100" fill="#FF8672" />
    </svg>

    <div class="relative z-10">
      <FormSection />
    </div>

    <div class="container mx-auto z-[10] p-8 text-center relative">
      <h3 class="text-[43px] leading-[53px] my-4 font-bold">
        Selezioniamo la camera climatica più adatta al tuo laboratorio. Ci occupiamo noi del trasporto,
        dell’installazione e della manutenzione
      </h3>
      <p class="text-[35px] leading-[45px] font-normal my-4">
        Grazie all’esperienza maturata negli anni, siamo in grado di <b>consigliare</b> le soluzioni più adatte alle
        esigenze della tua realtà, garantendo alla tua struttura <b>macchinari pronti all’uso</b>.
      </p>

      <div class="flex justify-center mt-20">
        <button
          class="border-t-2 border-white text-white uppercase text-base py-4 hover:text-gray-200 transition flex items-center gap-2">
          Richiedi una consulenza
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FormSection from './FormSection.vue';
</script>