<script setup>
import { ref } from 'vue';
import CardPreview from './CardPreview.vue';
const emit = defineEmits();

const cardOrientation = ref('horizontal');
const logo = ref(null);
const rectoBackgroundColor = ref('#eae6e6');
const versoBackgroundColor = ref('#000077'); 
const textColor = ref('#000000');
const versoTextColor = ref('#ffffff'); 
const textSize = ref(20);
const logoSize = ref(100); // Taille du logo
const name = ref('');
const surname = ref('');
const title = ref('');
const qrInfoVerso = ref(''); // QR info pour le verso

const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      logo.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const generateCard = () => {
  emit('generate-card', {
    cardOrientation: cardOrientation.value,
    logo: logo.value,
    rectoBackgroundColor: rectoBackgroundColor.value,
    versoBackgroundColor: versoBackgroundColor.value,
    textColor: textColor.value,
    versoTextColor: versoTextColor.value,
    logoSize: logoSize.value,
    textSize: textSize.value,
    name: name.value,
    surname: surname.value,
    title: title.value,
    qrInfoVerso: qrInfoVerso.value,
  });
};
// Changement d'orientation au clic
const setOrientation = (orientation) => {
  cardOrientation.value = orientation;
};
</script>
<template>
    <div class="flex items-center justify-center w-full h-screen " >
      <div class="flex flex-col items-center w-full h-full m-auto overflow-auto rounded-md lg:w-4/5 justify-evenly lg:h-4/5 sm:flex-col lg:flex-row " style="box-shadow: 8px 8px 55px #000000"    
      >
      <div class="gap-8 flex flex-col p-9 h-auto w-full lg:overflow-auto lg:w-[40%] lg:h-4/5 custom-scrollbar  bg-white   sm:flex-col lg:flex-col " >
        <h2 class="mb-4 text-2xl">Personnalisez votre carte</h2>
  
          <!-- Orientation -->
          <div class="mb-4">
            <label class="block text-sm font-medium">Orientation</label>
            <div class="flex space-x-4">
              <div 
              :class="[
  cardOrientation === 'horizontal' ? 'bg-blue-500' : '',
  'cursor-pointer',
  'px-4',
  'py-2',
  'rounded-md'
]"
                @click="setOrientation('horizontal')">
                <span class="type hc"></span><span>Horizontal</span>
              </div>
              <div 
              :class="[
  cardOrientation === 'vertical' ? 'bg-blue-500' : '',
  'cursor-pointer',
  'px-4',
  'py-2',
  'rounded-md'
]"
                @click="setOrientation('vertical')">
                <span class="type hc"></span><span>Vertical</span>
              </div>
            </div>
          </div>
  
          <!-- Logo -->
          <div class="mb-4">
            <label class="block text-sm font-medium">Logo</label>
            <input type="file" @change="handleLogoUpload" class="w-full h-10 p-2 rounded-lg" />
          </div>
  
          <!-- Fond Recto -->
          <div class="mb-4">
            <label class="block text-sm font-medium">Couleur du fond (Recto)</label>
            <input type="color" v-model="rectoBackgroundColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <!-- Couleur Texte Recto -->
          <div class="mb-4">
            <label class="block text-sm font-medium">Couleur du texte</label>
            <input type="color" v-model="textColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <!-- Taille du logo -->
          <div class="mb-4">
            <label class="block text-sm font-medium">Taille du logo</label>
            <input type="range" v-model="logoSize" min="10" max="200" class="w-full" />
          </div>
  
          <!-- Informations Recto -->
          <div class="mb-4">
            <label class="block text-sm font-medium">Nom</label>
            <input type="text" v-model="name" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="mb-4">
            <label class="block text-sm font-medium">Prénom</label>
            <input type="text" v-model="surname" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="mb-4">
            <label class="block text-sm font-medium">Titre</label>
            <input type="text" v-model="title" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <!-- Personnalisation Verso -->
          <h2 class="mb-4 text-2xl">Personnalisez le verso de votre carte</h2>
  
          <div class="mb-4">
            <label class="block text-sm font-medium">Couleur du fond (Verso)</label>
            <input type="color" v-model="versoBackgroundColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="mb-4">
            <label class="block text-sm font-medium">Couleur du texte (Verso)</label>
            <input type="color" v-model="versoTextColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="mb-4">
            <label class="block text-sm font-medium">QR Info (Verso)</label>
            <input type="text" v-model="qrInfoVerso" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <button 
            @click="generateCard"
            class="px-4 py-2 text-white transition rounded-lg border bg-[#000077] hover:bg-white hover:text-[#000077] w-full h-9 hover:border-[#000077]"
          >
            Preview
          </button>
        </div>
  
        <CardPreview :cardData="{
          cardOrientation,
          logo,
          rectoBackgroundColor,
          versoBackgroundColor,
          textColor,
          versoTextColor,
          logoSize,
          textSize,
          name,
          surname,
          title,
          qrInfo: qrInfoVerso
        }" />
      </div>
    </div>
  </template>
  
<style>
.custom-scrollbar::-webkit-scrollbar {
    width: 1px; 
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #333; 
    border-radius: 4px; 
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #e0e0e0; 
    border-radius: 4px;
  }
</style>