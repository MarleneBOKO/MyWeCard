<template>
  <div class="flex items-center justify-center min-h-screen overflow-y-hidden bg-gray-100">
    <div class="text-center bg-[#004] w-[60%] h-96 text-[#fff] p-5 items-center  rounded-[18px] shadow-lg flex flex-col justify-center z-10">
      <h1 class="mb-4 text-2xl font-bold">Bienvenue sur WeCard</h1>
      <p class="mb-6 text-sm">Site pour générer votre carte de visite basée sur un design personnalisé.</p>
      <router-link 
        to="/createcard" 
        class="px-4 py-2 text-[#004] bg-[#fff] transition-[3s] rounded-[8px]  justify-center items-center"
      >
        Créer votre carte
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Ton script ici
</script>

<style>
/* Ton style ici si nécessaire */
</style>
