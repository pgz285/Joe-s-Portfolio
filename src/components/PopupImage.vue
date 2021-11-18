<template>
  <div class="popupimage both-center" @click="$emit('closePopup')">
    <button
      class="popupimage-l"
      @click="before()"
      @click.stop
      :class="{ disablebutton: index == 0 }"
    >
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1L1 5L5 9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      class="popupimage-r"
      @click="next()"
      @click.stop
      v-if="portfolio"
      :class="{ disablebutton: index == portfolio.length - 1 }"
    >
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5L1 9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="popupimage-box"  v-if="portfolio">
      <img
        @click.stop
        :src="portfolio[index]"
        ref="popimg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupImage",
  props: {
    portfolio:Object,
  },
  data(){
    return{
      index:0
    }
  },
  methods: {
    handleKeyup(event) {
      const e = event || window.event || arguments.callee.caller.arguments[0];
      if (!e) return;
      const { keyCode } = e;
      if (keyCode == 27) this.$emit("closePopup");
      if (keyCode == 37) this.before();
      if (keyCode == 39) this.next();
    },
    before(){
      if(this.index>=1){
        this.index -= 1;
      }
    },
    next(){
      this.index += 1;
    }
  },
  mounted() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.handleKeyup);
  },
};
</script>

<style scoped>
:root {
  --imgw: 0px;
  --imgh: 0px;
}
.popupimage-l {
  cursor: pointer;
  position: absolute;
  left: 20px;
  background: #fff;
}
.popupimage-r {
  cursor: pointer;
  position: absolute;
  right: 20px;
  background: #fff;
}
.popupimage-label {
  position: absolute;
  max-width: 800px;
  padding: 15px;
  border-radius: 10px;
  background: rgba(26, 31, 49, 0.3);
  visibility: visible;
  transform: scale(1);
  transition: transform 0.5s, visibility 0.5s;
}
img:hover + .popupimage-label {
  visibility: visible;
  transform: scale(1);
}
.popupimage-div {
  position: absolute;
  width: 340px;
  padding: 30px;
  background-color: black;
  border-radius: 5px;
  opacity: 0.8;
  margin-top: var(--imgh);
  margin-left: var(--imgw);
  transform-origin: 100% 100%;
  transition: all 0.3s;
}
img {
  min-width: 250px;
  max-width: 900px;
  min-height: 180px;
  max-height: 643px;
  border-radius: 5px;
  object-fit: cover;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
button {
  text-align: center;
  width: 39px;
  height: 39px;
  color: #00bcd4;
  background: none;
  border: 1px solid #00bcd4;
  border-radius: 20px;
  outline: none;
}
button:hover {
  background-color: #00bcd4;
}
svg {
  stroke: #00bcd4;
}
button:hover > svg {
  stroke: white;
}
button + button {
  margin: 5px;
}
.disablebutton {
  stroke: white;
  pointer-events: none;
  opacity: 0.2;
}
.popupimage {
  z-index: 5;
  background: rgba(26, 31, 49, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}
.popupimageitem {
  width: 8px;
  height: 8px;
  background-color: #494545;
  border-radius: 4px;
  margin: 2.5px;
  cursor: pointer;
}
.popupimageitemselected {
  width: 21px;
  height: 8px;
  background-color: #fff;
  border-radius: 4px;
  margin: 2.5px;
}
.heading4,
.body3 {
  color: #fff;
}
.heading4 {
  max-width: 600px;
  min-height: 24px;
}
.body3 {
  max-width: 760px;
  min-height: 22px;
}
.popupimage-box {
  display: flex;
  flex-direction: column-reverse;
}
@media only screen and (max-width: 1050px) {
  img {
    max-width: 720px;
    max-height: 514px;
  }
  .popupimage-div {
    transform: scale(0.8);
    transform-origin: 100% 100%;
  }
}
@media only screen and (max-width: 850px) {
  img {
    max-width: 576px;
    max-height: 411px;
  }
  .popupimage-div {
    transform: scale(0.64);
    transform-origin: 100% 100%;
  }
}
@media only screen and (max-width: 700px) {
  img {
    max-width: 460px;
    max-height: 328px;
  }
  .popupimage-div {
    transform: scale(0.512);
    transform-origin: 100% 100%;
  }
}
@media only screen and (max-width: 550px) {
  img {
    max-width: 300px;
  }
  .popupimage-l,
  .popupimage-r {
    bottom: 120px;
  }
  .popupimage-label {
    max-width: 300px;
    padding: 10px;
  }
  .heading4 {
    max-width: 250;
    min-height: 24px;
  }
  .body3 {
    max-width: 280px;
    min-height: 22px;
  }
  .popupimage-box {
    display: block;
  }
}
</style>