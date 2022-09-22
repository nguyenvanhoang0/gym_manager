<template>
  <form class="Poppins">
    <div class="main flex">
      <div class="img">
        <div class="background">
          <div class="text">
            <h3 class="center">REGISTER NOW</h3>
            <h4 class="center">to have the body as you want</h4>
          </div>
        </div>
      </div>
      <div class="rigth">
        <div class="background flex">
          <div class="block-input">
            <div>
              <div class="form-field">
                <input type="text" name="" class="form-input" placeholder=" " />
                <label class="from-label">first name :</label>
              </div>
              <div class="form-field">
                <input type="text" name="" class="form-input" placeholder=" " />
                <label class="from-label">last name :</label>
              </div>
              <div class="form-field">
                <input type="text" name="" class="form-input" placeholder=" " />
                <label class="from-label">email :</label>
              </div>
              <div class="gender">
                <label class="">gender</label>
                <div class="content">
                  <div class="dpx">
                    <div class="py">
                      <label>
                        <input
                          type="radio"
                          class="option-input radio"
                          name="example"
                          checked
                        />
                        man
                      </label>
                      <label>
                        <input
                          type="radio"
                          class="option-input radio"
                          name="example"
                        />
                        women
                      </label>
                      <label>
                        <input
                          type="radio"
                          class="option-input radio"
                          name="example"
                        />
                        other
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex bmi">
                <div class="form-input-bmi">
                  <div class="form-field">
                    <input
                      type="int"
                      name=""
                      class="form-input"
                      placeholder=" "
                      v-on:keyup="height"
                      v-model="hh"
                    />
                    <label class="from-label">height :</label>
                  </div>
                </div>
                <div class="form-input-bmi">
                  <div class="form-field">
                    <input
                      type="int"
                      name=""
                      class="form-input"
                      placeholder=" "
                      v-on:keyup="weight"
                      v-model="wh"
                    />
                    <label class="from-label">weight :</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="color">BMI index :</h3>
              </div>
            </div>
          </div>
          <div class="block-input">
            <div>
              <div class="form-field">
                <input type="text" name="" class="form-input" placeholder=" " />
                <label class="from-label">age :</label>
              </div>
              <div class="flex color title-level">
                <h3>your level</h3>
                <div class="note">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-question-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"
                    />
                  </svg>
                </div>
              </div>
              <!--<div class='content'>
                <div class="dpx">
                <div class='py-lv'>
                <label>
                <input type="checkBox" class="option-input radio" name="example" checked />
                lv 1
                </label>
                <label>
                <input type="checkBox" class="option-input radio" name="example" />
                lv 2
                </label>
                <label>
                <input type="checkBox" class="option-input radio" name="example" />
                lv 3
                </label>
                </div>
                </div>
                </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");

.Poppins {
  font-family: "Poppins";
  font-style: normal;
}

.color {
  color: #fecc09;
}

form {
  margin: 0px;
  padding: 0px;
  width: 100%;
  border-radius: 24px;
  border-radius: 50%;
}

.text {
  padding-top: 80%;
}

.center {
  justify-content: center;
  display: flex;
  margin: 10px;
  color: #fecc09;
}

.flex {
  display: flex;
}

.main {
  margin: 40px 60px;
  background-color: gray;
}

.img {
  height: auto;
  width: 450px;
  background-image: url(img/create.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.background {
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #211e1ec7;
}

.rigth {
  width: -webkit-fill-available;
  background-image: url(img/DSCF3385.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.block-input {
  width: 45%;
  padding: 5%;
}

.form-input {
  border: 1px solid #eee;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  transition: 0.25s ease;
  outline: none;
}

.bmi {
  margin-top: 35px;
}

.form-input-bmi:first-child {
  margin-left: 0%;
  margin-right: 2.5%;
}

.form-input-bmi {
  width: 47.5%;
  margin-left: 2.5%;
}

.form-input:focus {
  border-color: #6a5af9;
}

.form-field {
  display: block;
  position: relative;
  margin-top: 40px;
}

.form-field:first-child {
  margin-top: 0px;
}

.from-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  user-select: none;
  color: #999;
  pointer-events: none;
  transition: 0.25s ease;
  border-radius: 4px;
}

.form-input:not(:placeholder-shown) + .from-label,
.form-input:focus + .from-label {
  top: -15px;
  left: 11px;
  padding: 0 10px;
  display: inline-block;
  background-color: #fff0;
  color: black;
  color: #ffd500;
  left: -10px;
}

.title-level {
  justify-content: space-between;
}

.note {
  display: flex;
  align-items: center;
}

.gender {
  color: #fecc09;
  margin-top: 20px;
}

.dpx {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.py-lv label {
  line-height: 40px;
  color: #999;
}

.py label {
  display: block;
  line-height: 40px;
  color: #999;
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 6.5px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  width: 25px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
}

.option-input:hover {
  background: #9faab7;
}

.option-input:checked {
  background: #fecc09;
}

/*.option-input:checked::before {
width: 25px;
height: 25px;
display:flex;
content: '\f00c';
font-weight:bold;
position: absolute;
align-items:center;
justify-content:center;
font-family:'Font Awesome 5 Free';
}*/
.option-input:checked::after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #fecc09;
  content: "";
  display: block;
  position: relative;
  z-index: 100;
}

.option-input.radio {
  border-radius: 50%;
}

.option-input.radio::after {
  border-radius: 50%;
}

@keyframes click-wave {
  0% {
    height: 40px;
    width: 40px;
    opacity: 0.35;
    position: relative;
  }

  100% {
    height: 200px;
    width: 200px;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
  }
}
</style>
