
<template>
  <div id="chat">
        <div class="sidebar">
          <list></list>
        </div>
        <div class="main">
          <message></message>
          <texts></texts>
        </div>
  </div>
</template>
 
<script>
import List from './List'
import Message from './Message'
import Texts from './Texts'
export default {
  name: "hello",
  data() {
    return {
    };
  },
  components:{
    List,Message,Texts
  }
};
</script>
<style >
#chat {
  position: absolute;
  width: 750px;
  height: 580px;
  left: 50%;
  top: 50%;
  margin-left: -375px;
  margin-top: -290px;
  background-color: white;
  /* 不起效果？ */
  border-radius: 5px;
}
.sidebar,
.main {
  height: 100%;
}
.sidebar {
  float: left;
  width: 200px;
  color: #f4f4f4;
  background-color: #2e3238;
}
.main {
  position: relative;
  overflow: hidden;
  background-color: #eee;
}

/* .m-message {
            height: ~'calc(100% - 160px)';
        }
    } */
</style>