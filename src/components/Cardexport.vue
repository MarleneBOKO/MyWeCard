<script setup>
import { ref, onMounted } from 'vue';

const cardOrientation = ref('horizontal');
const rectoImage = ref('');
const versoImage = ref('');

onMounted(() => {
  rectoImage.value = localStorage.getItem('rectoImage');
  versoImage.value = localStorage.getItem('versoImage');
  cardOrientation.value = localStorage.getItem('orientation') || 'horizontal';
});

</script>

<template>
  <div class="bg-[#eee] p-5 min-h-screen w-full">
    <div :class="cardOrientation === 'vertical' ? 'flex flex-col items-center gap-[50px]' : 'flex flex-col items-center justify-center gap-[50px]'">
      <div  :class="cardOrientation === 'vertical' ? 'w-[250px] h-full' : 'w-[400px] h-[250px]'">
        <img :src="rectoImage" alt="Recto" class="max-w-full max-h-full rounded-lg sm:rounded-lg lg:rounded-lg" :class="cardOrientation === 'vertical' ? 'w-[250px] h-full' : 'w-[400px] h-[250px]'"/>
      </div>
      <div  :class="cardOrientation === 'vertical' ? 'w-[250px] h-full' : 'w-[400px] h-[250px]'">
        <img :src="versoImage" alt="Verso" class="max-w-full max-h-full rounded-lg sm:rounded-lg lg:rounded-lg" :class="cardOrientation === 'vertical' ? 'w-[250px] h-full' : 'w-[400px] h-[250px]'"/>
      </div>
    </div>
  </div>
</template>
