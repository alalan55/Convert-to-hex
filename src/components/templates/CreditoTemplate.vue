<template>
  <div class="credito-template">
    <div class="content">
      <div class="title">
        <h1>Créditos</h1>
      </div>
      <div class="descricao">
        <p>
          O objetivo era ser capaz de criar folhas de estilo personalizadas e
          permitir a coloração de ícones para a criação de um tema do agente
          <a
            href="https://sosuke.com/creating-a-dovetail-agent-theme/"
            target="_blank"
            >Dovetail</a
          >. Para um correto funcionamento do código, a cor inicial precisa ser
          preta. e o seu conjunto de ícones não for preto, você pode acrescentar
          "brilho (0) saturado (100%)" à sua propriedade de filtro, o que
          primeiro tornará o conjunto de ícones preto.

          Creditos para o <a href="https://codepen.io/sosuke/pen/Pjoqqp?editors=1010" target="_blank">Pen</a> e ao <a target="_blank" href="https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991">Post</a> no stack overflow.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.credito-template {
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    border: 1px solid red;
    width: 90%;
    height: 90%;

    .descricao{
        p{
            text-align: justify;
        }
    }
  }
}
</style>