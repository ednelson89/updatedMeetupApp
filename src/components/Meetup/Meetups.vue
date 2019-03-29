<template>
  <v-container>
    <v-layout row wrap  >
      <v-flex xs12 md8 lg6 v-for="item in meetUps" :key="item.KeyId">
        <v-card class="info my-3 mx-3" >
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img :src="item.imageUrl" aspect-ratio="1.2" class="mt-5" @click="onLoadMeetup(item.id)" style="cursor:pointer">
                </v-img>
              </v-flex>
              <v-flex row xs7 sm8 md9 style="color:white;">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline my-3" >{{item.title}}</h3>
                    <div>Located at: {{item.location}}, {{item.date}} @{{item.time}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat style="color:white; cursor:pointer;" :to="'/meetups/' + item.id" >
                    <v-icon light>arrow_forward</v-icon>
                    View Meet-Up
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetUps () {
        return this.$store.getters.loadedMeetupsList
      }
    },
    methods: {
      onLoadMeetup (itemID) {
        this.$router.push('/meetups/' + itemID)
      }
    }
  }
</script>
