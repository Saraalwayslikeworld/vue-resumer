<template>
  <div id="Editor">
    <nav>
      <ol>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-id"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-study"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-work"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-project"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-reward"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-contact"></use>
          </svg>
        </li>
      </ol>
    </nav> 
    <ol class="panels">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>  
  </div>
</template>


<script>

export default {
  name: 'Editor',
  data: function(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #Editor {
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    border-radius: 4px;
    display: flex;
    > nav {
      width: 80px;
      background: #ddd;
      overflow: auto;
    }
    >.panels {
      flex: 1;
    }
  }
  .icon {
    width: 32px; height: 32px;
    vertical-align: -0.15em; 
    fill: currentColor;
    overflow: hidden;
  }
</style>