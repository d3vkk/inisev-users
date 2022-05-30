<template>
  <div id="login-page">
    <div id="login-page__container">
      <h1>Log In To Your Account</h1>
      <div>
        <div class="login-page__input-container">
          <label>Username</label>
          <input type="text" required v-model="username" />
        </div>
        <div class="login-page__input-container">
          <label>Password</label>
          <input type="password" required v-model="password" />
        </div>
      </div>
      <div class="login-page__error" v-show="showError">
        Username or password is incorrect. Try again please.
      </div>
      <button class="login-page__button" @click="loginUser()">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      showError: false,
    };
  },
  methods: {
    loginUser() {
      if (this.username == "admin" && this.password == "1234") {
        localStorage.setItem(
          "loginInfo",
          JSON.stringify({
            logininfo: {
              loggedIn: true,
            },
          })
        );
        this.$router.push("/users");
      } else {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
#login-page {
  display: flex;
  justify-content: center;
}

#login-page__container {
  padding-top: 4rem;
}

.login-page__input-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
}
.login-page__input-container label {
  padding-bottom: .5rem;
  font-weight: bold;
}
.login-page__input-container input {
  width: 100%;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-width: 0;
  appearance: none;
  background-color: azure;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
}

.login-page__button {
  text-transform: uppercase;
  font-weight: bold;
  background-color: black;
  color: white;
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  letter-spacing: 0.025em;
  border-radius: 5px;
}

.login-page__error {
  color: red;
  padding-bottom: 1rem;
}
</style>
