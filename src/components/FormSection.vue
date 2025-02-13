<template>
  <div class="container mx-auto my-16 z-1 px-6 md:px-24">
    <form class="bg-white p-12 rounded-3xl shadow-form mx-auto text-gray-900 max-w-4xl">
      <h3 class="text-3xl  text-center mb-10">
        Raccontaci le tue esigenze: ottieni il tuo preventivo
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <input type="text" placeholder="Nome"
          class="border p-5 rounded-lg w-full h-14 bg-gray-200 placeholder:text-dark focus:outline-none" />
        <input type="text" placeholder="Cognome"
          class="border p-5 rounded-lg w-full h-14 bg-gray-200 placeholder:text-dark focus:outline-none" />
        <input type="email" placeholder="Email"
          class="border p-5 rounded-lg w-full h-14 bg-gray-200 placeholder:text-dark focus:outline-none" />
        <input type="tel" placeholder="Recapito telefonico"
          class="border p-5 rounded-lg w-full h-14 bg-gray-200 placeholder:text-dark focus:outline-none" />
      </div>
      <textarea placeholder="Messaggio"
        class="border p-5 rounded-lg w-full h-32 mb-8 bg-gray-200 placeholder:text-dark focus:outline-none"></textarea>
      <div class="flex items-center mb-6">
        <input type="checkbox" id="privacy" class="mr-3 h-5 w-5" />
        <label for="privacy" class="text-sm">
          Autorizzo al trattamento dei miei dati personali ai sensi della <a class="text-secondary" href="#">normativa
            sulla privacy (UE 2016/679)</a>
        </label>
      </div>

      <div class="flex justify-center">
        <button
          class="bg-primary text-white font-bold text-base py-3 px-10 flex items-center gap-2 hover:bg-[#365673] transition">
          INVIA
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>
