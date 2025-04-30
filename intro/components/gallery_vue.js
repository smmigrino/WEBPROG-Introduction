const { createApp } = Vue;

createApp({
  data() {
    return {
      photos: [
        { src: 'assets/images/img-1.gif' },
        { src: 'assets/images/img-2.jpg' },
        { src: 'assets/images/img-3.jpg' },
        { src: 'assets/images/img-4.jpg' },
        { src: 'assets/images/img-5.jpg' }
      ]
    };
  },
  template: `
    <div class="gallery-wrapper">
      <div class="grid-gallery">
        <div v-for="(photo, index) in photos" :key="index" :class="'item' + (index + 1)">
          <img :src="photo.src" :alt="'Photo ' + (index + 1)" />
        </div>
      </div>
    </div>
  `
}).mount('#gallery-app');
