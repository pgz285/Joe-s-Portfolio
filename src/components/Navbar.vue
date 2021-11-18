<template>
  <div class="navbar both-center" :class="{'fix': fix}">
    <div class="row slgaph6">
      <!-- <div class="navbar-link">Experiences</div>
      <div class="navbar-link">Education</div>
      <div class="navbar-link">Skills</div> -->
      <div class="navbar-link row slgaph1 hor-center"> <svg t="1637121016653" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11678" width="200" height="200"><path d="M1009.158986 66.316476L889.662378 943.696842c-0.019961 0-0.039922 0.009981-0.059883 0.009981a28.937481 28.937481 0 0 1-40.640624 25.41037l-0.029941 0.029942-325.594074-137.960546-64.474074 132.750721a28.904546 28.904546 0 0 1-54.475603-0.179649L324.865497 787.461988l39.810246-45.70074L796.913528 242.219914 225.66924 705.052943 21.37625 618.482027c0.03094-0.089825 0.058885-0.179649 0.088826-0.269473a29.867665 29.867665 0 0 1 0.424172-54.952671L966.681949 33.494581c0.059883 0.077848 0.109786 0.152702 0.169669 0.23055a28.904546 28.904546 0 0 1 42.307368 32.591345z" fill="#e6e6e6" p-id="11679"></path></svg>
      <div class="will-hide">Welcome to my personal Portfolio website ！</div>
      <div class="will-flex">Welcome !</div></div>
      <!-- <div class="navbar-link">Contact</div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props:{
      fix:Boolean
  }
};
</script>
<style scoped>
.navbar {
  background: #007888;
  padding: 20px 0;
  color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
    transition: all 0.1s ease-in-out;
}
.navbar-link {
  font-size: 15px;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
}
.navbar-link:hover {
  color: #fff;
  cursor: pointer;
}
.fix{
    position: sticky;
    top: 0;
    z-index: 1;
    background:#00BCD4;
}.icon{
  width: 19px;
  height: auto;
}
@media only screen and (max-width: 780px) {
  .will-flex {
    display: flex;
  }
}
</style>