<template>
  <div>
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter username"
          v-model="message.username"
        />
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter subject"
          v-model="message.subject"
        />
      </div>

      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="imageURL"
          placeholder="Enter imageURL"
          v-model="message.imageURL"
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          type="text"
          class="form-control"
          id="message"
          placeholder="Enter message"
          v-model="message.message"
        />
      </div>

      <button type="submit" class="btn btn-primary" v-on:click="onButtonSubmitClicked">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

import validator from "validator";

export default {
  data() {
    return {
      message: {
        username: "Anonymous",
        subject: "",
        imageURL: "",
        message: ""
      }
    };
  },
  methods: {
    onButtonSubmitClicked() {
      if (
        this.message.username === "" ||
        this.message.subject === "" ||
        this.message.imageURL === "" ||
        this.message.message === ""
      ) {
        alert("Form couldn't be empty!");
      } else {
        axios
          .post("http://localhost:3000/messages", { ...this.message })
          .then(response => alert("Success!"))
          .catch(error => {
            console.log(error);
            alert("Failed!");
          });

        this.message.subject = "";
        this.message.imageURL = "";
        this.message.message = "";
      }
    }
  }
};
</script>

<style scoped>
</style>
