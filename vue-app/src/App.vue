<template>
  
  <router-view />
</template>

<style>

  #nav {
    position: absolute;
    width: 100%;
    padding: 60px 200px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  #nav > div {
    color: white;
  }
  .nav-left {
    width: 880px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .router-link-active {
    color: var(--white);
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
  }
  .router-link-active:hover{
    text-decoration: 2px solid underline;
    margin-top: -5px;
  }
  .loginBtn{
    color: var(--white);
    font-size: 16px;
    border-radius: 10px;
    padding: 15px 52px;
    background: linear-gradient(270deg, var(--main_blue) -26.38%, var(--main_purple) 100%);
    border: none;
  }
  .loginBtn:hover{
    cursor: pointer;
    opacity: 0.9;
  }
  a{
    text-decoration: none;
    outline: none;
  }

</style>
