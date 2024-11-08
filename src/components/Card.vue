<script setup>
import { ref } from 'vue';
import router from '../router';
import html2canvas from 'html2canvas';
import CardPreview from './CardPreview.vue';
const emit = defineEmits();

const cardOrientation = ref('horizontal');
const logo = ref('/public/Images/DEVER.2af7c9b8.png');
const rectoBackgroundColor = ref('#ffffff');
const versoBackgroundColor = ref('#000077'); 
const textColor = ref('#000000');
const versoTextColor = ref('#ffffff'); 
const textSize = ref(20);
const logoSize = ref(100); 
const name = ref('');
const surname = ref('');
const title = ref('');
const qrInfoVerso = ref(''); 
const showPreview = ref(false); 

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

const generateCardImage = async () => {
  const rectoElement = document.getElementById('card-recto');  // Section recto
  const versoElement = document.getElementById('card-verso');  // Section verso
  
  // Vérifiez que les éléments existent
  if (!rectoElement) {
    console.error('Élément recto non trouvé');
    return;
  }
  
  if (!versoElement) {
    console.error('Élément verso non trouvé');
    return;
  }

  try {
    // Capture la partie recto
    const canvasRecto = await html2canvas(rectoElement);
    const imageDataRecto = canvasRecto.toDataURL('image/png');
    
    // Capture la partie verso
    const canvasVerso = await html2canvas(versoElement);
    const imageDataVerso = canvasVerso.toDataURL('image/png');

    // Vous pouvez ensuite rediriger vers la page de prévisualisation avec query params
    router.push({
      name: 'Cardexport',
      query: {
        rectoImage: imageDataRecto,
        versoImage: imageDataVerso,
        orientation: cardOrientation.value  // Inclure l'orientation dans les paramètres
      }
    });
  } catch (error) {
    console.error("Erreur lors de la capture de l'image : ", error);
  }
};




const setOrientation = (orientation) => {
  cardOrientation.value = orientation;
};
</script>
<template>
    <div class="flex items-center justify-center w-full h-screen lg:px-16 md:px-16 ">
      <div class="flex flex-col items-center w-full h-full m-auto overflow-auto lg:w-4/5 justify-evenly sm:flex-col lg:flex-row ">
      
      <div class="gap-[30px] flex flex-col md:flex-col p-9 h-auto w-full lg:overflow-auto sm:rounded-s   lg:rounded-s-md lg:w-[40%] lg:h-4/5 custom-scrollbar bg-white   sm:flex-col lg:flex-col "  >
        <h2 class="mb-4 text-2xl">Personnalisez votre carte</h2>
  
          <!-- Orientation -->
          <div class="">
            <label class="block text-sm font-medium">Orientation</label>
            <div class="mt-2 flex flex-col items-center gap-[10px] lg:flex-row lg:gap-[10px] md:flex-col sm:flex-col">
                <!-- Option Horizontal -->
                <div 
                :class="[ 
                    cardOrientation === 'horizontal' ? 'shadow-[0_0_5px_#0004] ' : ' text-gray-800',
                    'cursor-pointer',
                    'p-[10px]',
                    'transition: 1s',
                    'rounded-[8px]',
                    'flex',
                    'items-center'
                ]"
                @click="setOrientation('horizontal')"
                >
                <!-- Barre horizontale colorée -->
                <div class="mr-2 bg-[#fb4aff] rounded-[5px] w-[60px] h-[40px]"></div>
                <span>Horizontal</span>
                </div>

                <!-- Option Vertical -->
                <div 
                :class="[ 
                    cardOrientation === 'vertical' ? 'shadow-[0_0_5px_#0004] ' : ' text-gray-800',
                    'cursor-pointer',
                    'p-[10px]',
                    'rounded-md',
                    'flex',
                    'items-center'
                ]"
                @click="setOrientation('vertical')"
                >
                <!-- Barre verticale colorée -->
                <div class="w-[40px] h-[60px] mr-2 bg-[#fcaa30] rounded-[5px]"></div>
                <span>Vertical</span>
                </div>
            </div>
             </div>

  
          <!-- Logo -->
          <div class="">
            <label class="block text-sm font-medium">Logo</label>
            <input type="file" @change="handleLogoUpload" class="w-full h-10 p-2 rounded-lg" />
          </div>
  
          <!-- Fond Recto -->
          <div class="">
            <label class="block text-sm font-medium">Couleur du fond (Recto)</label>
            <input type="color" v-model="rectoBackgroundColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <!-- Couleur Texte Recto -->
          <div class="">
            <label class="block text-sm font-medium">Couleur du texte</label>
            <input type="color" v-model="textColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <!-- Taille du logo -->
          <div class="">
            <label class="block text-sm font-medium">Taille du logo</label>
            <input type="range" v-model="logoSize" min="10" max="200" class="w-full" />
          </div>
  
          <!-- Informations Recto -->
          <div class="">
            <label class="block text-sm font-medium">Nom</label>
            <input type="text" v-model="name" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="">
            <label class="block text-sm font-medium">Prénom</label>
            <input type="text" v-model="surname" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="">
            <label class="block text-sm font-medium">Titre</label>
            <input type="text" v-model="title" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <!-- Personnalisation Verso -->
          <h2 class="text-2xl ">Personnalisez le verso de votre carte</h2>
  
          <div class="">
            <label class="block text-sm font-medium">Couleur du fond (Verso)</label>
            <input type="color" v-model="versoBackgroundColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="">
            <label class="block text-sm font-medium">Couleur du texte (Verso)</label>
            <input type="color" v-model="versoTextColor" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <div class="">
            <label class="block text-sm font-medium">QR Info (Verso)</label>
            <input type="text" v-model="qrInfoVerso" class="w-full h-10 border border-gray-400 rounded-lg p-1.5" />
          </div>
  
          <button 
          @click="generateCardImage"
          class="px-[15px] py-[10px] flex justify-center items-center text-white transition rounded-lg border bg-[#000077] hover:bg-white hover:text-[#000077] w-full h-9 hover:border-[#000077]"
          >
            Preview
          </button>
        </div>
  
        <CardPreview 
  id="card-preview"
  :cardData="{
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
  }" 
  :orientation="cardOrientation"
/>


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