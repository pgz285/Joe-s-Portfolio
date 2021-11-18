<template>
  <div class="allportfolios both-center">
    <div class="allportfolios-container col stgap1">
      <div class="allportfolios-header space-between hor-center">
        <div class="col stgaph1">
          <div class="allportfolios-title">小程序</div>
          <div class="allportfolios-subtitle">页面介绍</div>
        </div>
        <img
          class="img-close"
          src="@/assets/cross.svg"
          @click="$emit('closePopup')"
        />
      </div>

      <div class="allportfolios-div">
        <div class="col" v-for="(allpf, i) in portfolios" :key="i">
          <div class="allportfolios-box space-between">
            <div class="allportfolios-imgdes col">
              <div class="heading5">{{ allpf.title }}</div>
              <div class="body3">{{ allpf.description }}</div>
            </div>
            <img
              class="allportfolios-img"
              :src="allpf.stamp"
              @click="popup(i)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPortfolios",
  data: function () {
    return {
      pfStemp: "",
      selected: 0,
    };
  },
  props: {
    portfolios: Array,
  },
  methods: {
    popup(i) {
      this.selected = i;
      this.$emit("popup", this.portfolios[i]);
      this.$emit("popupi", i);
      this.$emit("allpopup", this.portfolios.length);
    },
    popupLeft() {
      if (this.selected == 0) {
        return;
      }
      this.selected -= 1;
      this.$emit("popup", this.portfolios[this.selected]);
      this.$emit("popupi", this.selected);
    },
    popupRight() {
      if (this.portfolios.length - 1 <= this.selected) {
        return;
      }
      this.selected += 1;
      this.$emit("popup", this.portfolios[this.selected]);
      this.$emit("popupi", this.selected);
    },
    popupJump(i) {
      this.selected = i;
      this.$emit("popup", this.portfolios[this.selected]);
      this.$emit("popupi", this.selected);
    },
  },
};
</script>

<style scoped>
.img-close {
  width: unset;
  min-width: unset;
  max-width: unset;
  min-height: unset;
  max-height: unset;
}
svg {
  cursor: pointer;
}
img {
  cursor: pointer;
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
.allportfolios-container {
  width: 1280px;
  height: 100%;
}
.allportfolios {
  z-index: 2;
  background: #fff;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  overflow: auto;
}
.allportfolios-header {
  width: 100%;
  padding: 60px 40px 0px 40px;
  background: #fff;
}
.allportfolios-title {
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 3px;
  color: #384268;
  opacity: 0.68;
}
.allportfolios-subtitle {
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  color: #384268;
}
.allportfolios-div {
  padding: 40px 40px;
  background-color: #fff;
  border-radius: 20px;
  overflow: auto;
  transition: width 1s;
}
.allportfolios-imgdes {
  text-align: left;
  width: 25%;
}
.heading5 {
  width: 100%;
}
.body3 {
  width: 100%;
}
.allportfolios-img {
  min-width: 300px;
  max-width: 700px;
  min-height: 300px;
  max-height: 700px;
  border-radius: 5px;
  object-fit: cover;
}

.businesspage-title-b {
  margin-bottom: 15px;
}
.allportfolios-box + .allportfolios-box {
  margin-top: 20px;
}
.allportfolios-box:last-child {
  margin-bottom: 50px;
}

@media only screen and (max-width: 1280px) {
  .allportfolios-container {
    width: 100%;
  }
  .allportfolios-header {
    width: 100%;
  }
}
@media only screen and (max-width: 800px) {
  .allportfolios-img {
    width: 100%;
    min-width: unset;
    max-width: unset;
    min-height: unset;
    max-height: 100%;
  }
  .allportfolios-header {
    padding: 60px 20px 0px 20px;
  }

  .allportfolios-div {
    padding: 0px 20px;
  }
  .allportfolios-box {
    flex-direction: column;
  }
  .allportfolios-imgdes {
    width: 100%;
  }
  .heading5,
  .body3 {
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 500px) {
  .allportfolios-header {
    padding: 60px 15px 0px 15px;
    width: calc(100%);
  }

  .allportfolios-div {
    padding: 0px 15px;
  }
  .allportfolios-box {
    flex-direction: column;
  }
  .allportfolios-imgdes {
    width: 100%;
  }
  .allportfolios-subtitle {
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    color: #384268;
  }
}
</style>