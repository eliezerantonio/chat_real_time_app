<template>
<div class="container-fl pt-5">
<div class ="row">
<b-form @submit.prevent="onSubmit" class="col-12 form-sign pt-5">
<p>
<i class="fa fa-comment fa-5x text-warning"></i>
</p>

<h1 class="h3 mb-3 font-weight-normal">Entrar no chat </h1>


<!-- ALERT -->

<b-alert
class="text-left"
:show="message.show"
dismissible :variant="message.severit"
>{{message.message}}
</b-alert>



<!-- FORM eMAIL -->


<b-form-input
id="inputEmail"
v-model="form.email"
type="email"
required
placeholder="E-mail..."
>
</b-form-input>
<!-- FORM PASSWORD -->


<b-form-input id="inputPassword"
v-model="form.password"
type="password"
required
placeholder="Senha..."
>
</b-form-input>

<!-- BOTAO-->
<b-button type="submit" variant="primary"  class="btn-block mt-2">Enviar</b-button>

</b-form>
</div>

</div>
</template>

<!--FIM TEMPLATE -->




<!-- INICIO SCRIPT -->
<script>
import ResourceLoader from '../utils/ResourceLoader'
export default{
    name:"register",
    data(){
        return {
            message:{
                show:false,
                severity:'danger',
                message:''
            },
            form:{
              
                email:'',
                password:''
            }
        }
    },
    methods: {
      async  onSubmit(){
           try{

            let user= await ResourceLoader.getResource('/authenticate', 'POST', this.form);
            if(user.status==="success"){
                sessionStorage.user=JSON.stringify(user.data);
                this.message.show=true;
                this.message.severity="success";
             this.$router.push("/channels")
            }
           }catch(err){
                this.message.show=true;
                this.message.message=err.message;
           }
        }
    },
}
</script>

<!-- FIM SCRIPT -->


<!-- INICIO STYLE -->
<style>

.form-sign{
    margin:0 auto;
    width:100vw;
    max-width:330px;
    text-align:center;
}
.form-sign input[type ="email"]{
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;

}

.form-sign input[type ="password"]{
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
    
}


</style>

<!-- FIM STYLE -->