
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
import List from "./List";
import Message from "./Message";
import Texts from "./Texts";
export default {
  name: "hello",
  props:["session"],
  data() {
    return {
      text:""
    };
  },
  components: {
    List,
    Message,
    Texts
  },
  methods:{
    input(){
     if(this.text.length>0){
       
     }
    }
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
  /* 该属性可设置的值包括阴影的X轴偏移量、Y轴偏移量、模糊半径、扩散半径和颜色 */
  box-shadow: 0 0 9px 1px #999;
}
.sidebar,
.main {
  height: 100%;
}
.sidebar {
  float: left;
  width: 270px;
  background-color: #E8E8E8;
}
.main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 480px;
}

/* .m-message {
            height: ~'calc(100% - 160px)';
        }
    } */
</style>