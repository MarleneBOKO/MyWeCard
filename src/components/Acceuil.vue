<template>
  <div class="relative flex items-center justify-center h-screen">
    <div class="absolute w-[60%] h-[90%] lg:w-[70%] lg:h-[80%] sm:h-[90%] sm:w-[50%] md:w-[70%] md:h-[80%] rounded-full overflow-hidden flex">
      <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#ff0000] to-[#004]"></div>
      <div class="absolute bottom-0 left-0 w-full h-1/2  bg-gradient-to-r from-[#004] to-[#e36a6a]"></div>
    </div>

    <div class="relative z-10 text-center bg-[#004] lg:w-[70%] lg:h-[60%] text-[#fff] p-5 rounded-[18px] shadow-lg flex flex-col justify-center items-center md:w-[80%] md:h-[70%] sm:w-[80%] sm:h-[80%] w-[90%] h-[80%]">
      <h1 class="mb-4 text-2xl font-bold">Bienvenue sur WeCard</h1>
      <p class="mb-6 text-sm">Site pour générer votre carte de visite basée sur un design personnalisé.</p>
      <router-link 
        to="/createcard" 
        class="px-4 py-2 text-[#004] bg-[#fff] border flex justify-center hover:border-white hover:text-white hover:bg-[#004] items-center w-48 h-10  transition-[3s] rounded-[8px]"
      >
        Créer votre carte
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>

    