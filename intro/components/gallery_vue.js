// Create a Vue 3 application instance for the Favorites Gallery
Vue.createApp({
  data() {
    return {
      // Array of photo objects, each with a 'src' pointing to the image path
      photos: [
        { src: 'assets/images/img-1.gif' },
        { src: 'assets/images/img-2.jpg' },
        { src: 'assets/images/img-3.jpg' },
        { src: 'assets/images/img-4.jpg' },
        { src: 'assets/images/img-5.jpg' }
      ]
    };
  },

  // HTML structure of the gallery using Vue template syntax
  template: `
    <div class="gallery-wrapper">
      <div class="collage">
        <!-- Loop through the photos array and render each image with custom style -->
        <div 
          v-for="(photo, index) in photos" 
          :key="index" 
          class="collage-item" 
          :style="getItemStyle(index)"
        >
          <!-- Bind image source and alt text -->
          <img :src="photo.src" :alt="'Photo ' + (index + 1)" />
        </div>
      </div>
    </div>
  `,

  methods: {
    // Method to return specific styles for each photo based on its index
    getItemStyle(index) {
      const styles = [
        { flex: '1 1 45%', height: '150px' },
        { flex: '1 1 30%', height: '150px' },
        { flex: '1 1 40%', height: '150px' },
        { flex: '1 1 30%', height: '150px' },
        { flex: '1 1 30%', height: '185px' }
      ];

      // Return the matching style or a default style if index is out of range
      return styles[index] || { flex: '1 1 45%', height: '150px' };
    }
  }
}).mount('#gallery-app'); // Mount the app to the div with ID "gallery-app"
