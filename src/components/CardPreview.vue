<script setup>
import { computed } from 'vue';
import QRCode from 'qrcode.vue';

// Valeurs par défaut
const defaultValues = {
  rectoBackgroundColor: '#eae6e6', 
  textColor: '#000000', 
  textSize: 16,
  logoSize: 50, 
  versoBackgroundColor: '#000077', 
  versoTextColor: '#ffffff', 
  qrInfo: 'https://luap-dever.me',
  defaultLogo: '/public/Images/DEVER.2af7c9b8.png',
};

const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({}),
  },
});

// Calcul des valeurs avec les valeurs par défaut
const cardOrientation = computed(() => props.cardData.cardOrientation || 'vertical');
const logo = computed(() => props.cardData.logo || defaultValues.defaultLogo);
const rectoBackgroundColor = computed(() => props.cardData.rectoBackgroundColor || defaultValues.rectoBackgroundColor);
const textColor = computed(() => props.cardData.textColor || defaultValues.textColor);
const textSize = computed(() => props.cardData.textSize || defaultValues.textSize);
const logoSize = computed(() => props.cardData.logoSize || defaultValues.logoSize);
const name = computed(() => props.cardData.name || 'DEVER');
const surname = computed(() => props.cardData.surname || 'Luap');
const title = computed(() => props.cardData.title || 'Fullstack Dev');
const versoBackgroundColor = computed(() => props.cardData.versoBackgroundColor || defaultValues.versoBackgroundColor);
const versoTextColor = computed(() => props.cardData.versoTextColor || defaultValues.versoTextColor);
const qrInfo = computed(() => props.cardData.qrInfo || defaultValues.qrInfo);
</script>

<template>
  <div 
    class="flex w-full p-6 card-container lg:w-[60%] h-full"
    :class="cardOrientation === 'horizontal' ? 'flex-col' : 'flex-row'"
  >
  <div class="z-10 flex flex-col justify-between pt-5 pb-5 pl-3 pr-3 rounded-lg" style="box-shadow: 8px 8px 55px #333;" 
   :class="cardOrientation === 'horizontal' ? 'w-[400px] h-[250px] ' : 'lg:w-[250px] lg:h-full  w-[250px] h-[500px]'"
  :style="{ backgroundColor: rectoBackgroundColor, color: textColor }">

    <div class="flex justify-between">
        <div></div>
        <img v-if="logo" :src="logo" :style="{ height: logoSize + 'px' }" class="mr-4" />

    </div>
    <div class="flex " >
      <div class="text-center">
        <div class="flex space-x-2">
          <h1  class="text-base font-bold">Nom: </h1>
          <span>{{ name }}</span>
        </div>
        <div class="flex space-x-2">
          <h1  class="text-base font-bold">Prénoms: </h1>
          <span>{{ surname }}</span>
        </div>
        <div class="flex space-x-2">
          <h1 class="text-base font-bold">Titre: </h1>
          <span> {{ title }}</span>
        </div>
      </div>
    </div>
  </div>
   

    <div class="flex flex-col justify-between h-full pt-5 pb-2 pl-3 pr-3 rounded-lg shadow-md" style="box-shadow: 8px 8px 55px #333;"
    :class="cardOrientation === 'horizontal' ? 'w-[400px] h-[250px]' : 'w-[250px] h-full'"

    :style="{ backgroundColor: versoBackgroundColor, color: versoTextColor }
    ">
    <div class="flex flex-col "
    :class="cardOrientation === 'horizontal' ? ' items-center justify-between h-full' :  'items-center justify-between h-full '"
    >
      <div class="flex items-center justify-center"

      
      >
       
      </div>
      <QRCode v-if="qrInfo" :value="qrInfo" size="120" class="flex items-end"/>

      <div class="flex justify-between w-full" >
        <h1 class="text-xl" :style="{ color: versoTextColor }">                
                WeCard
                <sup class="text-black bg-white  rounded text-[10px] p-1">Pro</sup>
                </h1>
            <img src="/public/Images/wireless.878de477.png" alt="" class="w-[10px] h-[10px]" />
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  height: 80vh;
  background: url('/public/Images/backcard.82a6598a.jpg'), rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  transition: flex-direction 0.5s ease-in-out;
  user-select: none;
  
}
</style>
