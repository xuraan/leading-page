<template>
    <div class="item d-flex">
      <i class="bi bi-circle-fill d-flex position-absolute"></i>
      <div class="details">
        <h4><slot name="heading"></slot></h4>
        <p><slot name="body"></slot></p>
      </div>
    </div>
  </template>
  
  <style scoped>

  i {
    left: 0;
    color: #2a322a;
    font-size: 30px
  }
  
  .item {
      margin-top: 0;
      padding: 0 0 1rem calc(var(--section-gap) / 3);
    }

  .item:after {
      content: ' ';
      border-left: 2px solid #2a322a;
      position: absolute;
      left: 14.5px;
      top: 30px;
      height: calc( 100% - 30px );
    }
  
    .item:first-of-type:before {
      display: none;
    }
  
    .item:last-of-type:after {
      display: none;
    }
  
    h4 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        font-size: 15px;
        color: #2c603079;
    }
 
  </style>
  