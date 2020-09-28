<template>
  <div id="app">
    <img src="./assets/js.png" />
    <h1>{{ msg }}</h1>
    <h2>Member's Githubs</h2>
    <ul>
      <li>
        <a
          href="https://github.com/stylejy/js-study/tree/mincheol"
          target="_blank"
        >
          김민철님 Github(Alarm project)
        </a>
      </li>
      <li>
        <a
          href="https://github.com/stylejy/js-study/tree/jaehyun-lim"
          target="_blank"
        >
          임재현님 Github(Alarm project)
        </a>
      </li>
    </ul>
    <router-link to="/new-project">
      <h2>NEW Project!!!</h2>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to JS Study Group :D - 2020.09.28",
    };
  },
};
</script>

<style>
body {
  background-color: #fbd601;
}
a {
  color: #e47113;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
  padding: 30px 0 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
