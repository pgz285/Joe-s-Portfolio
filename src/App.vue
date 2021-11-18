<template>
  <div id="app" class="both-center">
    <div class="index-main">
      <Header />
      <Info />
      <Navbar :fix="fix" />
      <Experiences  v-if="false"/>
      <Portfolio />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Info from "@/components/Info.vue";
import Navbar from "@/components/Navbar.vue";
import Experiences from "@/components/Experiences.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "app",
  data() {
    return {
      fix: false,
    };
  },
  components: {
    Header,
    Info,
    Navbar,
    Experiences,
    Portfolio,
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 613) {
        //大于200的时候要做的操作
        this.fix = true;
      } else {
        this.fix = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.index-main {
  width: 100%;
}
.div-center {
  margin: auto;
}
.text-center {
  text-align: center;
}
/*== New CSS Setting ==*/
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

html {
  overflow: overlay;
}
body {
}

#app {
  font-family: "Poppins",sans-serif;
  color: #384268;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container-new {
  width: 1140px;
  transition: all 0.3s;
}
.container {
  width: 1280px;
  transition: all 0.3s;
}
svg {
  cursor: pointer;
}
input,
textarea,
select {
  font-family: inherit;
  border: none;
  outline: none;
}
table {
  border: none;
}
/* Color */
.main-color {
  color: #fa8817d3;
}
.default-color {
  color: #384268;
}
.hover-color {
  color: #f3510cd3;
}
.bg-color {
  color: #f7f7f7;
}
/* Font Setting */
.bold {
  font-weight: bold;
}
.opacity {
  opacity: 0.68;
}
.heading1 {
  font-weight: bold;
  font-size: 38px;
  line-height: 57px;
}
.heading2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
}
.heading3 {
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
}
.heading4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
.heading5 {
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
}
.heading6 {
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
}
.body1 {
  font-size: 16px;
  line-height: 32px;
}
.body2 {
  font-size: 14px;
  line-height: 30px;
}
.body3 {
  font-size: 12px;
  line-height: 24px;
}
.small {
  font-size: 10px;
  line-height: 15px;
}

/* Element specific css */
.stgap > *:not(:first-child) {
  margin-top: 5px;
}
.stgap1 > *:not(:first-child) {
  margin-top: 10px;
}
.stgap2 > *:not(:first-child) {
  margin-top: 20px;
}
.stgap3 > *:not(:first-child) {
  margin-top: 30px;
}
.stgap4 > *:not(:first-child) {
  margin-top: 40px;
}
.stgap5 > *:not(:first-child) {
  margin-top: 50px;
}
.stgap6 > *:not(:first-child) {
  margin-top: 60px;
}
.stgaph1 > *:not(:first-child) {
  margin-top: 15px;
}
.stgaph2 > *:not(:first-child) {
  margin-top: 25px;
}
.stgaph3 > *:not(:first-child) {
  margin-top: 35px;
}
.stgaph4 > *:not(:first-child) {
  margin-top: 45px;
}
.stgaph5 > *:not(:first-child) {
  margin-top: 55px;
}
.stgaph6 > *:not(:first-child) {
  margin-top: 65px;
}

.slgap > *:not(:first-child) {
  margin-left: 5px;
}
.slgap1 > *:not(:first-child) {
  margin-left: 10px;
}
.slgap2 > *:not(:first-child) {
  margin-left: 20px;
}
.slgap3 > *:not(:first-child) {
  margin-left: 30px;
}
.slgap4 > *:not(:first-child) {
  margin-left: 40px;
}
.slgap5 > *:not(:first-child) {
  margin-left: 50px;
}
.slgap6 > *:not(:first-child) {
  margin-left: 60px;
}
.slgaph1 > *:not(:first-child) {
  margin-left: 15px;
}
.slgaph2 > *:not(:first-child) {
  margin-left: 25px;
}
.slgaph3 > *:not(:first-child) {
  margin-left: 35px;
}
.slgaph4 > *:not(:first-child) {
  margin-left: 45px;
}
.slgaph5 > *:not(:first-child) {
  margin-left: 55px;
}
.slgaph6 > *:not(:first-child) {
  margin-left: 65px;
}

/* New flex css */
.flex {
  display: flex;
}
.row {
  display: flex;
  flex-direction: row;
}
.col {
  display: flex;
  flex-direction: column;
}

.space-between {
  display: flex;
  justify-content: space-between;
}

/* (Horizontal) The main spindle is X, the X axis is symmetrical */
.hor-center {
  display: flex;
  align-items: center;
}
/* (Vertical) The main spindle is Y, the Y axis is symmetrical */
.ver-center {
  display: flex;
  justify-content: center;
}
.both-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Common Setting */
a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
select {
  cursor: pointer;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.require {
  color: #fc5a5a;
}

/* ScrollBar */
/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #dcdce0;
  border-radius: 30px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b4b4b4;
}
.will-flex {
  display: none;
}

@media only screen and (max-width: 1440px) {
  .container-new {
    width: 1140px;
  }
  .main {
    padding: 0 60px;
  }
}
@media only screen and (max-width: 1280px) {
  .container-new {
    width: 100%;
  }
  .container {
    width: 100%;
  }
  .main {
    padding: 0 40px;
  }
}
@media only screen and (max-width: 780px) {
  .main {
    padding: 0 15px;
  }
  .will-hide {
    display: none;
  }
}
/*== New CSS End ==*/

/* font */
.title {
  font-weight: bold;
  font-size: 22px;
  line-height: 34px;
  color: #384268;
  text-align: left;
}
.subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #384268;
  opacity: 0.68;
}
.text {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #384268;
  opacity: 0.68;
}
.label {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #384268;
  opacity: 0.68;
}
.popup-background {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(26, 31, 49, 0.4);
  z-index: 100;
  display: none;
}

/* button */
/* Button Setting */
button {
  text-align: center;
}

.normal-button {
  /* background: #fa8817d3; */
  background: #1bbfb4;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border-radius: 12px;
  color: white;
  padding: 12px 24px;
  cursor: pointer;
}
.normal-button:hover {
  /* background: #fa8817; */
  background: #11bdb1;
}
.normal-button:active {
  /* box-shadow: 0 0 5px #fa8817d3; */
  box-shadow: 0 0 5px #0cbdb1;
}
.disable-button {
  width: 160px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background: #c3cbde !important;
  cursor: default !important;
  outline: none;
  text-align: center;
}
.disable-button:active {
  box-shadow: 0 0 0px #c3cbde !important;
}
.white-button {
  background: white;
  border: none;
  box-shadow: 0 10px 20px rgb(56 66 104 / 2%);
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border-radius: 12px;
  color: #fa8817d3;
  padding: 12px 24px;
  cursor: pointer;
}
.border-button {
  background: white;
  border: none;
  border: #fa8817d3 1px solid;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border-radius: 12px;
  color: #fa8817d3;
  padding: 12px 24px;
  cursor: pointer;
}
.remove-button {
  height: 50px;
  width: 100px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  background: #ffefef;
  border-radius: 10px;
  color: #d16f70;
  outline: none;
  text-align: center;
}
.remove-button:hover {
  background: #fbe3e3;
}
.remove-button:active {
  box-shadow: 0 0 3px #d16f70;
}

.full-divider {
  height: 1px;
  width: 100%;
  opacity: 0.5;
  background-color: #c3cbde;
}
.rotate180clockwise {
  transition: transform 0.3s;
  transform: rotate(+180deg);
}
.rotate180counter {
  transition: transform 0.3s;
  transform: rotate(-180deg);
}
.rotate0 {
  transition: transform 0.3s;
  transform: rotate(0deg);
}

/* Transition */
.opacitytrans-enter-active,
.opacitytrans-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.opacitytrans-enter,
.opacitytrans-leave-to {
  transform: scale(0.5) !important;
  opacity: 0 !important;
  height: 0 !important;
  visibility: hidden !important;
}
.attrans-enter-active,
.attrans-leave-active {
  transition: opacity 0.3s, margin-top 0.3s;
}
.attrans-enter,
.attrans-leave-to {
  margin-top: -30px;
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 1s ease;
}
.page-enter,
.page-leave-to {
  width: 0px;
  height: 0px;
  opacity: 0;
  overflow: hidden;
}
</style>
