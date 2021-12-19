<template>
<div class="container">
  <NavBar />
  <router-view />
</div>
</template>
<script>
import { NavBar } from "@/components/molecules";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.container{
  height: 100vh;
  width: 100%;
  background:  url(https://image.freepik.com/fotos-gratis/fundo-de-papel-de-parede-colorido-desfocado-vivido_58702-3839.jpg) no-repeat;
  background-size: cover;
}

</style>
