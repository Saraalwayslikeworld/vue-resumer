<template>
  <div id="Topbar">
    <div class="wrapper">
      <span class="logo">ResumeEditor</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Topbar {
    background: #eee;   
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    height: 64px;
  }
  #Topbar>.wrapper {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
  }
  #Topbar>.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #Topbar .logo{
    font-size: 24px;
    /* line-height: 64px; */
    color: rgb(79, 148, 108);
  }
</style>
