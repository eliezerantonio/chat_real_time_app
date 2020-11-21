<template>
<div class="vh-100 pt-5">
  <b-jumbotron  bg-variant="white" text-variant="dark" border-variant="white">
    <template slot="header">
    <div class="text-center">
<i class="fa fa-comment fa-3x text-warning"></i>
    </div>
    
    
    </template>

    <template #lead>
    <div class="text-center">
    Seja bem vindo ao
    <strong> Chat Real-Time</strong>
    </div>
    </template>

    <hr class="my-4">

  <div>
    <p>
    Chat em tempo real, feito com ExpressJs, VueJS e Socket.io
    </p>

    <b-button variant="primary" href="#/login">Entrar</b-button> &nbsp;
    <b-button variant="warning" href="#/register">Cadastrar-se</b-button>
  </div>
  </b-jumbotron>
</div>
</template>

