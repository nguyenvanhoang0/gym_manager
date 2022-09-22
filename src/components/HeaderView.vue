<template>
  <div class="Poppins">
    <header>
      <div>
        <ul class="flex">
          <li @click="home">home </li>
          <li>intro</li>
          <li>exercise</li>
          <li>service</li>
          <li>service</li>
          <li v-on:click="success = !success">login</li>
          <li><input type="text"></li>
        </ul>
      </div>
    </header>
    <div v-show="success" >
      <div class="background center">
        <div class="form-login">
          <div class="main">
            <div class="center">
              <div class="avata ">
                <img src="@/components/img/avata-user.png">
              </div>
            </div>
            <center>
              <h2>login</h2>
            </center>
          
            <div class="box">
              <div class="form-field">
                <input type="text" name="" class="form-input" placeholder=" ">
                <label class="from-label">Email</label>
              </div>
            </div>
            <div class="box">
              <div class="form-field">
                <input type="password" name="pass" id="pass1" class="form-input" placeholder=" ">
                <label class="from-label">Password</label>
              </div>
            </div>
            <div>
              <div class=" boder pw"><input id="checkBox" @click="pwd" type="checkbox" name="sport">show pass</div>
              <a href="">create Account</a>
            </div>
              <button class="bt"><a href="CreateAccount.vue">login</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  function 
export default {
  data() {
    return {
      success: false
    }

  },

  methods: {
    pwd() {
      if (document.getElementById("checkBox").checked) {
        document.getElementById('pass1').type = "text";
        // x = false;
      } else {
        document.getElementById('pass1').type = 'Password';
        // x = true;
      }
    },
    home (){
      this.$router.push('/')
    }
  }
}
</script>


<style>

</style>


<style scoped>
header {
  background: rgb(255, 255, 255);
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  
}


ul li {
  list-style-type: none;
  padding: 10px 30px;

}

ul li:hover {
  color: #fecc09;

}

li input {
  width: 300px;
}

.flex {
  display: flex;
}

.background{
  position: fixed;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background-color: rgba(255, 255, 255, 0.735);


}

.form-login {
  height: auto;
  border-radius: 5px;
  margin: 2% auto;
  box-shadow: 0 9px 50px hsl(20deg 67% 75% / 31%);
  padding: 0 7%;
  background-image: linear-gradient(-140deg, #fecc09 -42%, rgba(33, 33, 33, 0.696) 101%);
  transition: 2s;
}

.avata {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 65px 90px 30px 90px;
  background-color: white;
  border: solid 4px black;
}

.avata img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}



.boder {
  margin-top: 30px;
}

select {
  width: 188px;
  margin: 10px 50px;
}

.box{
  margin: 20px 0px;
}

.bt{
  padding: 10px 110px;
  border-radius: 6px;
  border: none;
}

.form-input{
	border: 1px solid #eee;
	border-radius: 4px;
  width: 87%;
	height: 40px;
	padding: 0 20px;
	transition: 0.25s ease;
  outline: none;

}

.form-input:focus{
	border-color: #ffd500;
}

.form-field{
	position: relative;
}

.from-label{
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
.form-input:focus + .from-label{
	top: 0;
	left: 11px;
	padding:0 10px;
	display: inline-block;
	background-color:white ;
	color: 6a5af9;
  border: 1px solid rgb(255, 225, 0);
}
</style>
