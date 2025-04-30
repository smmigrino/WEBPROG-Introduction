const { createApp } = Vue;

createApp({
  data() {
    return {
      photos: [
        { src: 'assets/images/image-1.png' },
        { src: 'assets/images/image-2.png' },
        { src: 'assets/images/image-3.png' },
        { src: 'assets/images/image-4.png' },
        { src: 'assets/images/image-5.png' }
      ]
    };
  },
  template: `
    <div class="gallery-wrapper">
      <div class="collage">
        <div v-for="(photo, index) in photos" :key="index" class="collage-item" :style="getItemStyle(index)">
          <img :src="photo.src" :alt="'Photo ' + (index + 1)" />
        </div>
      </div>
    </div>
  `,
  methods: {
    getItemStyle(index) {
      const styles = [
        { flex: '1 1 45%', height: '200px' },
        { flex: '1 1 50%', height: '200px' },
        { flex: '1 1 40%', height: '400px' },
        { flex: '1 1 20%', height: '200px' },
        { flex: '1 1 45%', height: '250px' }
      ];
      return styles[index] || { flex: '1 1 45%', height: '150px' };
    }
  }
}).mount('#gallery-app');
