Vue.createApp({
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
        { flex: '1 1 45%', height: '150px' },
        { flex: '1 1 30%', height: '150px' },
        { flex: '1 1 40%', height: '150px' },
        { flex: '1 1 30%', height: '150px' },
        { flex: '1 1 30%', height: '185px' }
      ];
      return styles[index] || { flex: '1 1 45%', height: '150px' };
    }
  }
}).mount('#gallery-app');
