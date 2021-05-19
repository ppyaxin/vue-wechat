<script>
export default {};
</script>

<template>
  <div class="message">
    <p class="time">
      <span>time</span>
    </p>
    <div>
      <img class="avatar" src="../assets/face.jpg">
      <div class="msg">hjdiwerpwutrf</div>
    </div>
  </div>
</template>

<style>
.message {
  background-color: #f5f5f5;
  padding: 10px 15px;
  overflow-y: scroll;
  height: 410px;
  position: relative;
}
.time {
  margin: 7px 0;
  text-align: center;
}
.time > span {
  display: inline-block;
  padding: 0 18px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background-color: #dcdcdc;
}
.avatar {
  float: left;
  margin: 0 10px 0 0;
  border-radius: 3px;
  width: 32px;
  height: 32px;
}
.msg {
  box-shadow: 0 0 9px 0.1px #999;
  display: inline-block;
  position: relative;
  padding: 0 10px;
  /* max-width: ~'calc(100% - 40px)'; */
  min-height: 30px;
  line-height: 2.5;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  background-color: #fafafa;
  border-radius: 4px;
}
.msg:before {
  content: " ";
  position: absolute;
  top: 9px;
  right: 100%;
  border: 6px solid transparent;
  border-right-color: #fafafa;
}
</style>