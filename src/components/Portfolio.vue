<template>
  <div class="portfolio both-center">
    <div class="container-new portfolio-box col both-center">
      <div class="title">Portfolio</div>
      <div class="menu row slgaph4">
        <!-- <div class="label" @click="change(0)" :class="{ check: select == 0 }">
          All
          <div
            class="hover-line"
            :class="{ 'hoverline-active': select == 0 }"
          ></div>
        </div> -->
        <div class="label" @click="change(1)" :class="{ check: select == 1 }">
          前端
          <div
            class="hover-line"
            :class="{ 'hoverline-active': select == 1 }"
          ></div>
        </div>
        <div class="label" @click="change(2)" :class="{ check: select == 2 }">
          后台
          <div
            class="hover-line"
            :class="{ 'hoverline-active': select == 2 }"
          ></div>
        </div>
        <div class="label" @click="change(3)" :class="{ check: select == 3 }">
          UNI-APP
          <div
            class="hover-line"
            :class="{ 'hoverline-active': select == 3 }"
          ></div>
        </div>
        <div class="label" @click="change(4)" :class="{ check: select == 4 }">
          微信小程序
          <div
            class="hover-line"
            :class="{ 'hoverline-active': select == 4 }"
          ></div>
        </div>
      </div>
      <div class="line"></div>
      <div class="grid row">
        <div
          v-show="select == 1"
          class="grid-item"
          v-for="(item, index) in front"
          :key="index"
        >
          <div class="hovereffect" @click="show(item.stamp)">
            <img class="img-responsive" :src="item.stamp[0]" loading="lazy" />
            <div class="overlay will-hide">
              <div class="p">
                <div class="a">查看相册</div>
              </div>
            </div>
          </div>
          <div class="item-info">
            <div class="sub-title bold">{{ item.name }}</div>
            <div class="tag row slgap1">
              <div
                class="tag-icon both-center"
                v-for="(item1, i) in item.tag"
                :key="i"
              >
                {{ item1 }}
              </div>
            </div>
            <div class="space-between view row hor-center">
              <div class="more row slgap will-flex" @click="show(item.stamp)">
                <div>查看相册</div>
              </div>
              <div class="">打开网站</div>
            </div>
          </div>
        </div>
        <div
          v-show="select == 2"
          class="grid-item"
          v-for="(item, index) in back"
          :key="index"
        >
          <div class="hovereffect" @click="show(item.stamp)">
            <img class="img-responsive" :src="item.stamp[0]" loading="lazy" />
            <div class="overlay will-hide">
              <div class="p">
                <div class="a">查看相册</div>
              </div>
            </div>
          </div>
          <div class="item-info">
            <div class="sub-title bold">{{ item.name }}</div>
            <div class="tag row slgap1">
              <div
                class="tag-icon both-center"
                v-for="(item1, i) in item.tag"
                :key="i"
              >
                {{ item1 }}
              </div>
            </div>
            <div class="space-between view row hor-center">
              <div class="more row slgap will-flex" @click="show(item.stamp)">
                <div>查看相册</div>
              </div>
              <div class="">打开网站</div>
            </div>
          </div>
        </div>
        <div v-show="select == 3" class="grid-item">
          <div class="hovereffect app">
            <img
              class="img-responsive"
              src="@/assets/uni1.png"
              loading="lazy"
            />
            <div class="overlay will-hide" @click="show1()">
              <div class="p">
                <div class="a bold">查看相册</div>
              </div>
            </div>
          </div>
          <div class="item-info2 space-between">
            <div class="sub-title bold">活动型APP</div>
            <div class="will-flex bold" @click="show1()">查看相册</div>
          </div>
        </div>
        <div v-show="select == 4" class="grid-item">
          <div class="hovereffect app">
            <img class="img-responsive" src="@/assets/wx1.png" loading="lazy" />
            <div class="overlay will-hide" @click="show1()">
              <div class="p">
                <div class="a">查看相册</div>
              </div>
            </div>
          </div>
          <div class="item-info2 space-between">
            <div class="sub-title bold">商城小程序</div>
            <div class="will-flex bold" @click="show1()">查看相册</div>
          </div>
        </div>
      </div>
    </div>
    <transition name="opacitytrans2">
      <PopupImage :portfolio="imgs" v-if="popupImg" @closePopup="hide()" />
    </transition>
    <transition name="allpftrans">
      <AllPortfolios v-if="popup" @closePopup="hide1()" :portfolios="wx" />
    </transition>
  </div>
</template>
<script>
import PopupImage from "@/components/PopupImage.vue";
import AllPortfolios from "@/components/AllPortfolios.vue";
export default {
  name: "Portfolio",
  components: {
    PopupImage,
    AllPortfolios,
  },
  data() {
    return {
      select: 1,
      popupImg: false,
      popup: false,
      tag: {},
      imgs: [],
      data: {
        stamp: [
          {
            src: "https://test.foshanlepin.com/pro/bg2.jpeg",
          },
          {
            src: "https://test.foshanlepin.com/pro/img1.jpeg",
          },
        ],
      },
      front: [
        {
          name: "Pro ssr",
          tag: ["nuxt", "axios", "i18n", "GRAPHQL"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/profile.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
        {
          name: "Inqu website",
          tag: ["js", "html", "axios"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/inqu.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
        {
          name: "Shopping website",
          tag: ["js", "html", "php"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/themes4.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
        {
          name: "Company official website",
          tag: ["vue", "graphql", "i18n"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/theme-default.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
        {
          name: "Company official website",
          tag: ["vue", "graphql", "i18n"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/themes1.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
        {
          name: "Company official website",
          tag: ["vue", "graphql", "i18n"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/themes2.png",
            "https://test.foshanlepin.com/pro/img2.jpeg",
          ],
        },
        {
          name: "Company official website",
          tag: ["vue", "graphql", "i18n"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/themes3.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
        {
          name: "Company official website",
          tag: ["vue", "graphql", "i18n"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/themes5.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
      ],
      back: [
        {
          name: "用户管理系统",
          link: "https://baidu.com",
          tag: ["vue", "axios", "vuex"],
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/admin.png",
            "https://pro.foshanlepin.com/stamp/admin/admin1-2.png",
            "https://pro.foshanlepin.com/stamp/admin/admin1-3.png",
            "https://pro.foshanlepin.com/stamp/admin/admin1-4.png",
            "https://pro.foshanlepin.com/stamp/admin/admin1-5.png",
            "https://pro.foshanlepin.com/stamp/admin/admin1-6.png",
          ],
        },
        {
          name: "Admin dashboard2",
          tag: ["vue", "axios", "vuex", "GRAPHQL"],
          link: "https://baidu.com",
          stamp: [
            "https://pro.foshanlepin.com/stamp/default/admin-pro.png",
            "https://test.foshanlepin.com/pro/img1.jpeg",
          ],
        },
      ],
      wx: [
        {
          title: "title",
          description: "description",
          stamp: "https://test.foshanlepin.com/pro/bg2.jpeg",
        },
        {
          stamp: "https://test.foshanlepin.com/pro/img1.jpeg",
        },
      ],
    };
  },
  methods: {
    change(e) {
      this.select = e;
    },
    show(e) {
      this.popupImg = true;
      this.imgs = e;
    },
    hide() {
      this.popupImg = false;
    },
    show1() {
      this.popup = true;
    },
    hide1() {
      this.popup = false;
    },
    getdata() {
      this.axios
        .get("/api.php")
        .then((res) => {
          console.log(res);
          this.tag = res.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>
<style scoped>
.opacitytrans2-enter-active,
.opacitytrans-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.opacitytrans2-enter,
.opacitytrans-leave-to {
  opacity: 0;
}
.portfolio {
  padding: 60px 60px 40px;
  background: #f5f5f5;
}
.portfolio-box {
  padding: 45px 40px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 15px 30px rgba(56, 66, 104, 0.06);
}
.menu {
  margin-top: 40px;
}
.label {
  height: 37px;
  position: relative;
  cursor: pointer;
  list-style: none;
  display: inline-block;
  padding: 8px 15px;
  color: #8a8a8a;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
}
.hover-line {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  margin: 0 !important;
  bottom: 0;
  left: 0;
  background-color: #00bcd4;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
.hoverline-active {
  visibility: visible;
  transform: scaleX(1);
}
.check {
  color: #00bcd4;
  font-weight: bold;
  /* border-bottom: 3px solid #1bbfb4; */
}
.line {
  width: 100%;
  height: 2px;
  background: #e8e8e8;
  margin-top: -2px;
}
.grid {
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 20px;
  margin: 40px 0;
  display: grid;
  height: auto;
}
.grid-item {
  width: 100%;
  height: auto;
  color: #fff;
  text-align: left;
  align-items: unset;
  justify-items: unset;
  border-radius: 24px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
}
.hovereffect:hover .item-info {
  background: #00c6e0;
}
.grid-item img {
  width: 100%;
  /* height: 300px;  */
  border-radius: 2px 2px 0 0;
  object-fit: cover;
}
/* hover */
.hovereffect {
  width: 100%;
  /* height: 100%;
  float: left; */
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  border-radius: 24px 24px 0 0;
  background: -webkit-linear-gradient(45deg, #00bcd4 0%, #05abe0 100%);
  background: linear-gradient(45deg, #00bcd4 0%, #05abe0 100%);
}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  top: 0;
  left: 0;
  padding: 3em;
  border-radius: 24px 24px 0 0;
  text-align: left;
}

.hovereffect img {
  display: block;
  position: relative;
  max-width: none;
  border-radius: 24px 24px 0 0;
  max-height: 180px;
  width: calc(100% + 10px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.45s;
  transition: opacity 0.35s, transform 0.45s;
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
}
.app img {
  max-height: 320px;
  object-fit: contain;
}

.hovereffect .overlay:before {
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  border: 1px solid #fff;
  content: "";
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.45s;
  transition: opacity 0.35s, transform 0.45s;
  -webkit-transform: translate3d(-20px, 0, 0);
  transform: translate3d(-20px, 0, 0);
}

.hovereffect .a,
.hovereffect .p {
  color: #fff;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.45s;
  transition: opacity 0.35s, transform 0.45s;
  -webkit-transform: translate3d(-10px, 0, 0);
  transform: translate3d(-10px, 0, 0);
}

.hovereffect:hover img {
  opacity: 0.6;
  filter: alpha(opacity=60);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.hovereffect:hover .overlay:before,
.hovereffect:hover .a,
.hovereffect:hover .p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.item-info {
  margin-top: -10px;
  padding: 24px;
  background: #00bcd4;
  border-radius: 0 0 24px 24px;
}
.item-info2 {
  /* margin-top: -10px; */
  padding: 15px;
  background: #007888;
  border-radius: 0 0 24px 24px;
}
.sub-title {
  font-size: 16px;
}
.view {
  margin-top: 10px;
  cursor: pointer;
}

.tag {
  margin: 10px 0 20px;
}
.tag-icon {
  padding: 2px 10px;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
  font-size: 10px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.8);
}
.allpftrans-enter-active,
.allpftrans-leave-active {
  transition: opacity 0.8s, transform 0.5s;
}
.allpftrans-enter,
.allpftrans-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
.tag-icon:hover {
  border: 1px solid #fff;
}
@media only screen and (max-width: 1180px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 850px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 780px) {
  .will-flex {
    display: flex;
  }
  .hovereffect {
    pointer-events: none;
  }
  .hovereffect img {
    transform: unset;
  }
  .grid-item {
    box-shadow: 0px 15px 30px rgba(56, 66, 104, 0.16);
  }
  .portfolio {
    padding: 0;
  }
  .portfolio-box {
    padding: 20px;
  }
  .icon {
    width: 19px;
    height: 19px;
  }
  .slgaph4 > *:not(:first-child) {
    margin-left: 0;
  }
  .menu {
    justify-content: space-between;
  }
}
</style>