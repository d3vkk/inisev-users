<template>
  <div>
    <div class="user-card">
      <section
        class="user-card--fade-in"
        v-for="(user, userIndex) in userProfiles"
        :key="userIndex"
      >
        <div class="user-card__container" @click="togglePopup(userIndex)">
          <div class="user-card__image-container">
            <img
              :src="user.image"
              :alt="user.name"
            />
            <div class="user-card__image-container__overlay">
              <div class="user-card__image-container__details">
                <div class="user-card__image-container__details__name">
                  {{ user.name }}
                </div>
                <div>
                  {{ user.address.city }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section id="popup-overlay" v-if="showPopup && userProfiles">
      <section id="popup-container">
        <div>
          <div class="popup__close" @click="togglePopup()">&times;</div>
          <div class="popup">
            <div class="popup__image-container">
              <img
                class="popup__image"
                :src="popupInfo.image"
                :alt="popupInfo.name"
              />
            </div>
            <div class="popup__details">
              <div>
                {{ popupInfo.name }}
              </div>
              <div>
                {{ popupInfo.email }}
              </div>
              <div>
                {{ popupInfo.phone }}
              </div>
              <div>
                {{ `${popupInfo.address.city},${popupInfo.address.street}` }}
              </div>
              <div>
                {{ popupInfo.website }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    userProfiles: Array,
  },
  data() {
    return {
      showPopup: false,
      popupInfo: null,
    };
  },
  methods: {
    togglePopup(userIndex) {
      this.showPopup = !this.showPopup;
      this.popupInfo = this.userProfiles[userIndex];
    },
  },
};
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.user-card__container {
  position: relative;
  text-align: center;
  padding: 1.5rem;
}
.user-card__image-container {
  position: relative;
}
.user-card__image-container:hover .user-card__image-container__overlay {
  opacity: 1;
}

.user-card__image-container img {
  width: 150px;
  height: 100%;
  border-radius: 10px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
}

.user-card__image-container__overlay {
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.65);
}
.user-card__image-container__details {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.user-card__image-container__details__name {
  padding-bottom: 1rem;
  font-weight: bold;
}

.popup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.popup__details {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
}
.popup__details div {
  padding-bottom: 1rem;
  /* font-size: 1.5rem; */
  font-weight: bold;
}
.popup__image {
  width: 150px;
  height: 100%;
}

#popup-overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: pointer;
}
#popup-container {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.popup__close {
  font-size: 3rem;
}
.user-card--fade-in {
  -webkit-animation: user-card--fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: user-card--fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes user-card--fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes user-card--fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
