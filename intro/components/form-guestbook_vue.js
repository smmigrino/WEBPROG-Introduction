// Create a new Vue app instance and mount it to the element with the ID 'guestbook-app'
Vue.createApp({
  // Define reactive data properties
  data() {
    return {
      name: '',         // Holds the user's name input
      reason: '',       // Holds the user's reason for visiting
      submitted: false  // Tracks whether the form has been submitted
    };
  },
  // Define methods to handle logic and user interactions
  methods: {
    // Called when the form is submitted
    submitForm() {
      // Log the submitted name and reason to the console
      console.log(`Name: ${this.name}`);
      console.log(`Reason: ${this.reason}`);
      
      // Set 'submitted' to true to trigger the thank-you message
      this.submitted = true;

      // Reset the form fields
      this.name = '';
      this.reason = '';
    }
  },
  // Define the HTML structure and Vue bindings
  template: `
    <form @submit.prevent="submitForm" class="guestbook-form">
      <h2>Guestbook</h2>

      <!-- Input for user's name -->
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <!-- Textarea for reason for visiting -->
      <label for="reason">Reason for visiting:</label>
      <textarea id="reason" v-model="reason" required></textarea>

      <!-- Submit button -->
      <button type="submit">Sign Guestbook</button>

      <!-- Thank-you message displayed after submission -->
      <p v-if="submitted" class="thank-you">Thank you for signing the guestbook!</p>
    </form>
  `
}).mount('#guestbook-app'); // Mount the app to the DOM element with ID 'guestbook-app'
