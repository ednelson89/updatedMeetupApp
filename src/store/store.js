import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export const store = new VueX.Store({
  state: {
    savedMeetups: [
      {
        imageUrl:
          "https://thenypost.files.wordpress.com/2018/03/shutterstock_221032825.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        id: "MU1",
        title: "Meetup in New York",
        date: "2018-07-17",
        time: "1530",
        location: "Times Square, New York City",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
          "              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
          "              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
          "              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n" +
          "              mollit anim id est laborum."
      },
      {
        imageUrl:
          "http://www.canypropertysolutions.com/wp-content/uploads/2016/03/downtownbuffalo.jpg",
        id: "MU2",
        title: "Meetup in Buffalo",
        date: "2018-09-09",
        time: "1330",
        location: "Shea's Performing Arts Center, Buffalo",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
          "              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
          "              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
          "              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n" +
          "              mollit anim id est laborum."
      }
    ],
    user: {
      id: "UID1",
      registeredMeets: ["MU2"]
    }
  },
  getters: {
    loadedMeetupsList(state) {
      return state.savedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    loadedMeetup(state) {
      return meetupid => {
        return state.savedMeetups.find(meetup => {
          return meetup.id === meetupid;
        });
      };
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetupsList.slice(0, 2);
    }
  },
  mutations: {
    createMeetup(state, payload) {
      payload.id = "MU" + (state.savedMeetups.length + 1);
      state.savedMeetups.push(payload);
    }
  },
  actions: {
    createFormattedMeetup({ commit }, payload) {
      const localMeetup = {
        title: payload.title,
        location: payload.location,
        info: payload.description,
        imageUrl: payload.imageUrl,
        date: payload.date,
        id: "",
        time: payload.time
      };
      commit("createMeetup", localMeetup);
    }
  }
});
