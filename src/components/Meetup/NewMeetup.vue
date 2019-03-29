<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="primary--text">Create a New Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Title" label="Title" id="title" v-model="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="Location"
                label="Location"
                id="location"
                v-model="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="ImageURL"
                id="imgURL"
                v-model="imageUrl"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="my-3" v-if="imageUrl != ''">
            <v-flex xs12 sm6 offset-sm3>
              <label>Image Preview:</label>
              <img :src="imageUrl" alt="Image Thumbnail" width="100%">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="info"
                label="Description"
                id="location"
                v-model="description"
                required
                rows="3"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h3>Pick a Date and Time:</h3>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="my-3">
            <v-flex xs12 sm4 offset-sm3 md4 offset-md3 class="my-3">
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>
            <v-flex xs12 sm5 class="my-3">
              <v-time-picker v-model="time"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary" :disabled="!formValid" type="submit">Create Meetup!</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      date: "",
      imageUrl: "",
      description: "",
      time: ""
    };
  },
  computed: {
    formValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== "" &&
        this.date !== "" &&
        this.time !== ""
      );
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.date,
        time: this.time
      };
      this.$store.dispatch("createFormattedMeetup", meetupData);
      this.$router.push("/meetups");
    }
  }
};
</script>
