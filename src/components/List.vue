<template>
  <div class="list-box">
    <img src="../assets/face.jpg">
    <div id="middle-box">
      <div id="name">就是玩</div>
      <div id="content">就是傻着</div>
    </div>
    <div id="right-box"></div>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {};
  }
};
</script>
<style>
.list-box {
  height: 50px;
  background-color:#CDC9C9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
img {
  width: 45px;
  height: 45px;
  display: block;
   border-radius: 5px;
}
#middle-box {
  height: 100%;
  width: 170px;
}
#right-box {
  width: 30px;
  height: 100%;
}
#name{
  font-size: 15px;
  font-weight: bold;
  padding: 3px;
}
#content{
  color: #999999;
  font-size: 10px;
  padding: 3px;
}
</style>
