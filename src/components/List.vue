<template>
  <div class="m-list">
    <ul>
      <li>
        <img class="avatar" width="30" height="30" src="../assets/logo.png">
        <p class="name">tysry</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {
    }
  }
}
</script>
<style>
li {
  width: 100%;
  height: 20px;
  padding: 12px 15px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
  transition: background-color 0.1s;
}
li:hover {
  background-color: rgba(221, 217, 217, 0.096);
}
li:active {
  background-color: rgba(255, 255, 255, 0.1);
}
.avatar,
.name {
  vertical-align: middle;
}
.avatar {
  border-radius: 2px;
}
.name {
  display: inline-block;
  margin: 0 0 0 15px;
}
</style>
