<template>
  <div>
    <h1>USERS</h1>
    <div class="users-container">
      <div id="sidebar-menu" @click="toggleSidebar()">MENU</div>
      <SideBar :showSidebar="showSidebar" />
      <UsersCards :userProfiles="userProfiles" />
    </div>
  </div>
</template>

<script>
import SideBar from "../layouts/SideBar.vue";
import UsersCards from "../components/UsersCards.vue";

export default {
  components: {
    SideBar,
    UsersCards,
  },
  data() {
    return {
      userProfiles: null,
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    getUserProfiles() {
      fetch("https://mock.follow.it/profiles.json", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.userProfiles = data;
        })
        .catch((err) => {
          console.log(err.Error || "check your network then try again");
        });
    },
  },
  mounted() {
    this.getUserProfiles();
  },
};
</script>

<style scoped>
.users-container {
  display: flex;
  flex-direction: row;
}
</style>
