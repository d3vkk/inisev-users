<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    checkLoginInfo() {
      const logininfoStored = JSON.parse(localStorage.getItem("loginInfo"));
      if (logininfoStored == null) {
        this.logout();
      } else {
        this.$router.push("/users");
      }
    },
    logout() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.checkLoginInfo();
  },
};
</script>

<style scoped></style>
