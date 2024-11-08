<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cardOrientation = ref(route.query.orientation || 'horizontal'); // Récupère l'orientation ou 'horizontal' par défaut

const props = defineProps({
  rectoImage: String,
  versoImage: String,
});
</script>

<template>
    <div class="bg-[#eee] p-5 min-h-screen w-full">
        <div :class="cardOrientation === 'vertical' ? 'flex flex-col items-center gap-[50px]' : 'flex flex-col items-center justify-center gap-[50px]'">
            <img :src="rectoImage" alt="Recto" class="max-w-full max-h-full sm:rounded-lg lg:rounded-lg" style="box-shadow: 0 0 80px #0006;"  :class="cardOrientation === 'vertical' ? 'w-[250px] h-full' : 'w-[400px] h-[250px]'"/>
            <img :src="versoImage" alt="Verso" class="max-w-full max-h-full sm:rounded-lg lg:rounded-lg" style="box-shadow: 0 0 80px #0006;" :class="cardOrientation === 'vertical' ? 'w-[250px] h-full' : 'w-[400px] h-[250px]'" />
        </div>
    </div>
    
  </template>
  
 
  