import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import MeetUps from "../components/Meetup/Meetups.vue";
import CreateMeet from "../components/Meetup/NewMeetup.vue";
import MeetUp from "../components/Meetup/MeetupCard.vue";
import Profile from "../components/User/Profile.vue";
import SignIn from "../components/User/SignIn.vue";
import SignUp from "../components/User/SignUp.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/meetups",
      name: "MeetUps",
      component: MeetUps
    },
    {
      path: "/new-meetups",
      name: "New MeetUps",
      component: CreateMeet
    },
    {
      path: "/meetups/:id",
      name: "MeetUp",
      props: true,
      component: MeetUp
    },
    {
      path: "/profile",
      name: "User",
      component: Profile
    },
    {
      path: "/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/*",
      name: "Gneral",
      component: Home
    }
  ],
  mode: "history"
});
