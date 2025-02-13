<template>
  <section class="bg-white py-16">
    <div class="container mx-auto text-center">
      <h2 class="text-h1 font-normal whitespace-normal text-center py-8 mb-12">
        I vantaggi di affidarsi <br>ad Aleph
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(service, index) in services" :key="index" class="p-6">
          <div class="mb-4">
            <img :src="service.icon" :alt="service.title" class="w-16 h-16 mx-auto" />
          </div>
          <h3 class="text-xl font-semibold text-secondary mb-2">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-20">
      <button
        class="border-t-2 uppercase border-black text-base py-4  hover:text-gray-500 transition flex items-center gap-2">
        Scegli Aleph
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>


<script setup lang="ts">
const services = [
  {
    icon: new URL('@/assets/img/keys.svg', import.meta.url).href,
    title: 'SOLUZIONI CHIAVI IN MANO',
    description: 'Consegniamo ogni strumento occupandoci del trasporto al piano e della relativa installazione, per garantirti una soluzione da laboratorio sempre pronta all’uso.',
  },
  {
    icon: new URL('@/assets/img/consulting.svg', import.meta.url).href,
    title: 'CONSULENZA SPECIALIZZATA',
    description: 'La nostra consulenza si traduce nell’individuazione delle attrezzature più adatte alle specifiche esigenze del tuo laboratorio.',
  },
  {
    icon: new URL('@/assets/img/bin.svg', import.meta.url).href,
    title: 'SMALTIMENTO ATTREZZATURE',
    description: 'In caso di rinnovo delle attrezzature, ci occupiamo del prelievo e dello smaltimento degli strumenti obsoleti per il tuo laboratorio.',
  },
  {
    icon: new URL('@/assets/img/warranty.svg', import.meta.url).href,
    title: 'GARANZIA 24 MESI',
    description: 'Tutti i nostri strumenti da laboratorio sono coperti da garanzia di 24 mesi.',
  },
  {
    icon: new URL('@/assets/img/loan.svg', import.meta.url).href,
    title: 'PAGAMENTO A RATE',
    description: 'Scegliendo le nostre attrezzature puoi usufruire di condizioni di pagamento agevolate.',
  },
  {
    icon: new URL('@/assets/img/assistance.svg', import.meta.url).href,
    title: 'ASSISTENZA',
    description: 'Garantiamo un servizio di pronta assistenza in caso di malfunzionamenti, con tecnici qualificati disponibili ad intervenire in loco.',
  },
];
</script>