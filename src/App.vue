<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Dev-Meetup</router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon @click="sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="sideNav" class="hidden-sm-and-up">
      <v-list>
        <v-list-tile v-for="mItem in menuItems" :key="mItem.title" router :to="mItem.link">
          <v-list-tile-action>
            <v-icon>{{mItem.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{mItem.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'calendar_today', title: 'View Meetups', link: '/meetups'},
        {icon: 'terrain', title: 'Organize Meetup', link: '/new-meetups'},
        {icon: 'person', title: 'User Profile', link: '/profile'},
        {icon: 'face', title: 'Sign Up', link: '/sign-up'},
        {icon: 'play_for_work', title: 'Log In', link: '/sign-in'}
      ]
    }
  }
}
</script>

<style>
  .centered{
    left:50%;
    transform: translate(-50%, 0);
  }
</style>
