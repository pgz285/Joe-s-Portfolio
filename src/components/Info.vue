<template>
  <div class="profile main both-center">
    <img
      class="profile-img"
      src="https://img0.baidu.com/it/u=1389726803,1479461914&fm=26&fmt=auto"
      alt=""
    />
    <div class="profile-info stgap2">
      <div class="profile-name">Joe Doe</div>
      <div class="profile-label">Front end Engineer</div>
      <div class="profile-dec">Profile info goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
};
</script>
<style scoped>
.profile {
  background: #00a5bb;
  padding-top: 90px;
  padding-bottom: 60px;
  position: relative;
  font-size: 16px;
  position: relative;
  color: #fff;
}
.profile-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  top: -80px;
  z-index: 1;
  border: solid 4px rgb(241, 239, 239);
}
.profile-info {
  max-width: 850px;
}
.profile-name {
  font-weight: 500;
  font-size: 48px;
  margin: 15px 0;
  letter-spacing: 0.5px;
}
.profile-label {
  font-size: 28px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
}
.profile-dec{
    margin-top: 30px !important;
    font-size: 16px;
    word-break: break-word;
    line-height: 1.5;
}
</style>