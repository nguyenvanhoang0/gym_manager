
<template>
  <div class="Poppins">
    <diV>
      <!--<h1>{{title}}</h1>
        <p>{{greeting()}}</p>-->
      <router-view />
      <app-header></app-header>
      <div class="slide">
        <div>
          <div class="background">
            <div class="membrane">
              <h1 class="center text">test 123</h1>
              <div class="center text">title text 123 WELCOME TO COSY</div>
            </div>
          </div>
        </div>
      </div>
      <app-ViewList></app-ViewList>
      <app-footer></app-footer>
      <Test />
    </diV>
  </div>
</template>
<script>
import Test from "@/TestComp.vue";
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import ViewList from "@/components/ViewList.vue";
export default {
  components: {
    Test,
    "app-header": HeaderView,
    "app-footer": FooterView,
    "app-ViewList": ViewList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

.Poppins {
  font-family: "Poppins";
  font-style: normal;
}

* {
  margin: 0px;
  padding: 0px;
}

.center {
  display: flex;
  justify-content: center;
}

.flex {
  display: flex;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}
</style>

<style scoped>
.text {
  color: #fecc09;
}

h1 {
  color: black;
}

img {
  width: 100%;
  height: auto;
}

.slide {
  height: 200px;
  width: 100%;
  background-image: url(@/components/img/main.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.background {
  background-color: #222528a7;
  height: 100%;
  width: 100%;
}

.membrane {
  padding: 72px;
}
</style>
