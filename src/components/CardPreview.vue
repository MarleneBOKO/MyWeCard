<script setup>
import { computed } from 'vue';
import QRCode from 'qrcode.vue';

const defaultValues = {
  rectoBackgroundColor: '#eae6e6', 
  textColor: '#000000', 
  logo:'/Images/DEVER.2af7c9b8.png',
  textSize: 15,
  logoSize: 50, 
  versoBackgroundColor: '#000077', 
  versoTextColor: '#ffffff', 
  qrInfo: 'https://luap-dever.me',
  defaultLogo: '/Images/DEVER.2af7c9b8.png',
};

const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({}),
  },
});

const cardOrientation = computed(() => props.cardData.cardOrientation || 'vertical');
const logo = computed(() => props.cardData.logo || defaultValues.logo);
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
    class="flex w-full px-12 py-6 card-container lg:w-[60%] h-full"
    :class="cardOrientation === 'horizontal' ? 'flex-col' : 'flex-row'"
  >
  <!-- recto -->
  <div class=" flex flex-col justify-between px-[10px] py-[20px] rounded-lg" :id="'card-recto'"  style="padding: 20px 10px;"
   :class="cardOrientation === 'horizontal' ? 'w-[400px] h-[250px] ' : 'lg:w-[250px] lg:h-[400px]  w-[250px] h-[400px]'"
  :style="{ backgroundColor: rectoBackgroundColor, color: textColor }">

    <div class="flex justify-between max-h-[100px]">
        <div></div>
        <img v-if="logo" :src="logo" :style="{ height: logoSize + 'px' }" class="mr-4" />

    </div>
    <div class="flex ml-8" >
      <div class="text-center">
        <div class="flex space-x-2">
          <h1  class="text-[15px] font-bold">Nom: </h1>
          <span class="text-[15px]">{{ name }}</span>
        </div>
        <div class="flex space-x-2">
          <h1  class="text-[15px] font-bold">Prénoms: </h1>
          <span class="text-[15px]">{{ surname }}</span>
        </div>
        <div class="flex space-x-2">
          <h1 class="text-[15px] font-bold">Titre: </h1>
          <span class="text-[15px]"> {{ title }}</span>
        </div>
      </div>
    </div>
  </div>
   
  <!-- // verso -->
    <div class="flex flex-col justify-between rounded-lg shadow-md "  :id="'card-verso'" style="padding: 20px 10px 5px;"
    :class="cardOrientation === 'horizontal' ? 'w-[400px] h-[250px]' : 'lg:w-[250px] lg:h-[400px] w-[250px] h-[400px]'"

    :style="{ backgroundColor: versoBackgroundColor, color: versoTextColor }
    ">
    <div class="flex flex-col "
    :class="cardOrientation === 'horizontal' ? ' items-center justify-end gap-[30px] h-full' :  ' justify-end items-center gap-[30px] h-full '"
    >
      
      <QRCode v-if="qrInfo" :value="qrInfo"  class="flex w-[100px] h-[100px]"    
      />

      <div class="flex justify-between w-full" >
        <h1 class="mb-2 text-[15px]" :style="{ color: versoTextColor }">                
        WeCard
        <sup class=" items-center justify-center text-black w-[23px] h-[16px] bg-white rounded text-[10px] p-1 mt-10">
            Pro
  </sup>
</h1>

            <img src="/public/Images/wireless.878de477.png" alt="" class="w-[10px] h-[10px] " />
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