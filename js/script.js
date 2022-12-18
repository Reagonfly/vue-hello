const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!!!' , 
        image: 'https://picsum.photos/seed/picsum/200/300'
      }
    }
  }).mount('#app')