<template>
  <div class="home-template">
    <div class="content">
      <div class="input-box">
        <input
          type="text"
          v-model="entrada"
          class="entrada"
          placeholder="Ex: #ffff"
        />
        <div class="btn-converter" @click="convertColor">
          <span>converter</span>
        </div>
      </div>
      <div class="bloco-resultado">
        <span class="result">
          <div class="bloco-filter">
            <span>
              {{saida}}
            </span>
            <i class="far fa-clone"></i>
          </div>

          <div class="bloco-pixeis">
            <div class="real-pixel">
              <div class="pixel"></div>
              <div class="description">
                <span>
                  Real pixel, color applied through CSS background-color
                </span>
              </div>
            </div>
            <div class="filtered-pixel">
              <div class="pixel"></div>
              <div class="description">
                <span>
                  Filtered pixel, color applied through CSS filter:
                </span>
              </div>
            </div>
          </div>

          <div class="bloco-loss">
            <span>
              {{loss}}
            </span>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { executeConvert } from "@/service/service.js";
export default {
  setup() {
    let entrada = ref("");
    let saida = ref("");
    let loss = ref('');
     let lossMsg = ''

    function convertColor() {
      let response = executeConvert(entrada.value);
     
      saida.value = response.filter;

      if(response.loss < 1){
        lossMsg = 'Resultado Perfeito'
      }else if(response.loss < 5){
        lossMsg = 'Resultado Próximo o suficiente'
      }else if (response.loss < 15){
        lossMsg = 'A cor está um pouco errada. Considere executar novamente.'
      } else{
        lossMsg = 'A cor está extremamente apagada. Execute novamente'
      }

      loss.value = `Perda: ${response.loss.toFixed(1)}. ${lossMsg}`
    }

    return {
      entrada,
      convertColor,
      saida,
      loss
    };
  },
};
</script>

<style lang="scss" scoped>
.home-template {
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    padding: 0 5rem;
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease;

    .input-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      input {
        width: 100%;
        padding: 0.8rem;
        border: none;
        border-radius: 5px;

        &:focus {
          outline: none;
        }
      }
      .btn-converter {
        position: absolute;
        right: 10px;
        color: white;
        font-weight: 500;
        padding: 0.2rem 0.5rem;
        background: rgb(108, 188, 207);
        transition: 0.2s ease-in-out;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background: rgb(96, 166, 184);
        }
      }
    }

    .bloco-resultado {
      width: 100%;
      margin: 2rem 0;
      background: white;
      padding: 0.8rem;
      border-radius: 5px;

      .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > div {
          padding: 0.8rem;
          width: 100%;
          margin: 0.8rem 0;
          border-radius: 5px;
         
        }

        .bloco-filter {
          position: relative;
           -webkit-box-shadow: -2px 4px 14px 1px rgba(0, 0, 0, 0.18);
          box-shadow: -2px 4px 14px 1px rgba(0, 0, 0, 0.18);

          i{
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }
        }
        .bloco-pixeis {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: .5rem;

          &>div{
            border-radius: 5px;
            flex: 1 1 200px;
            padding: 2rem;
             -webkit-box-shadow: -2px 4px 14px 1px rgba(0, 0, 0, 0.18);
          box-shadow: -2px 4px 14px 1px rgba(0, 0, 0, 0.18);
          text-align: center;

            .pixel{
              border: 1px solid red;
              width: 50px;
              height: 50px;
              margin: 0 auto;
              margin-bottom: .5rem;
            }
          }
        }
        .bloco-loss {
          -webkit-box-shadow: -2px 4px 14px 1px rgba(0, 0, 0, 0.18);
          box-shadow: -2px 4px 14px 1px rgba(0, 0, 0, 0.18);
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .content {
    padding: 0 1.5rem !important;
  }
}
</style>