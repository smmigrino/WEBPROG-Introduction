const { createApp } = Vue;

createApp({
  data() {
    return {
      name: '',
      reason: '',
      submitted: false
    };
  },
  methods: {
    submitForm() {
      console.log(`Name: ${this.name}`);
      console.log(`Reason: ${this.reason}`);
      this.submitted = true;
      this.name = '';
      this.reason = '';
    }
  },
  template: `
    <form @submit.prevent="submitForm" class="guestbook-form">
      <h2>Guestbook</h2>

      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="reason">Reason for visiting:</label>
      <textarea id="reason" v-model="reason" required></textarea>

      <button type="submit">Sign Guestbook</button>

      <p v-if="submitted" class="thank-you">Thank you for signing the guestbook!</p>
    </form>
  `
}).mount('#guestbook-app');
