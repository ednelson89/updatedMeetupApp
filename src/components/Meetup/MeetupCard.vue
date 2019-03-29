<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 >
        <v-card>
          <v-card-title primary-title>
            <div >
              <h3 class="headline my-3 primary--text" >{{meetup.title}}</h3>
            </div>
          </v-card-title>
          <v-img :src="meetup.imageUrl" width="100%" height="40em" class="mb-2 mx-2" >
          </v-img>
          <v-card-text>
            <div class="info--text">Date: {{meetup.date}} </div>
            <div class="info--text">Time: {{meetup.time}}</div>
            <div class="info--text">Located at: {{meetup.location}} </div>
            <div> {{meetup.info}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary" @click="navMeetupList">Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    },
    methods: {
      navMeetupList () {
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style scoped>

</style>
