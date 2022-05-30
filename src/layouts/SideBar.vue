<template>
  <div id="sidebar" v-if="showSidebar">
    <div class="sidebar__list">
      <div>Account&nbsp;Settings</div>
      <div>Create&nbsp;User</div>
      <div>Update&nbsp;User</div>
      <div>Delete&nbsp;User</div>
      <div @click="logout()">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean,
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
#sidebar {
  width: 200px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  padding-right: 0.8rem;
}
.sidebar__list {
  padding-top: 1rem;
}
.sidebar__list div {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
}

</style>
