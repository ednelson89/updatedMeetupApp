<template>
  <v-container >
    <v-layout row wrap class="my-2">
      <v-flex xs12>
        <v-carousel style="cursor:pointer">
          <v-carousel-item
            v-for="item in meetups"
            :key="item.listID"
            :src="item.imageUrl"
            @click="onLoadMeetup(item.id)"
            >
            <div class="title text-xs-center centered">
              {{item.title}}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups"  dark class="indigo lighten-1" >Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/new-meetups" dark class="indigo lighten-1">Organize a Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="my-3">
      <v-flex xs12 class="text-xs-center">
        <h2 > PLAN YOUR MEETUPS TODAY </h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup (itemID) {
        this.$router.push('/meetups/' + itemID)
      }
    }
  }
</script>

<style scoped>
  .title{
    position: absolute;
    color: white;
    font-size: 3em;
    background-color: rgba(0,0,0,0.5);
    bottom: 50px;
    padding: 16px;
  }
  </style>
