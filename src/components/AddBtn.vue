<template>
  <div id="add-btn">
    <b-icon-plus class="plus text-center"></b-icon-plus>
  </div>
</template>

<script>
export default {
 name: 'AddBtn'
}
</script>

<style>
  #add-btn {
    background-color: #b41813;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 30px;
    right: 30px;
  }
  #add-btn:hover {
    background-color: #700d09;
    cursor: pointer;
  }
  .plus {
    color: #fff;
    font-size: 3rem;
    /* margin: 0 auto; */
  }
  a:hover {
    color: var(--blue);
    text-decoration: none;
  }
</style>