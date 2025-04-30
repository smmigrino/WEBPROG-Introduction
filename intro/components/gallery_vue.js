const { createApp } = Vue;

createApp({
  data() {
    return {
      photos: [
        { src: 'assets/images/image-1.png', width: 200, height: 300 },
        { src: 'assets/images/image-2.png', width: 300, height: 200 },
        { src: 'assets/images/image-3.png', width: 200, height: 200 },
        { src: 'assets/images/image-4.png', width: 400, height: 300 },
        { src: 'assets/images/image-5.png', width: 300, height: 400 },
      ]
    };
  },
  template: `
    <div class="collage">
      <div v-for="(photo, index) in photos" 
           :key="index" 
           class="collage-item"
           :style="{
             width: photo.width + 'px',
             height: photo.height + 'px'
           }">
        <img :src="photo.src" :alt="'Photo ' + (index + 1)" />
      </div>
    </div>
  `
}).mount('#gallery-app');
