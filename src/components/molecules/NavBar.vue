<template>
    <nav>
        <div class="logo">
            <span>Converter.</span>
        </div>
        <div class="itens">
           <router-link to="/">Home</router-link>
           <router-link to="/creditos">Creditos</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss"  scoped>
nav{
    width: 100%;
    height: 70px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    .logo{
        span{
            font-weight: 800;
        }
    }

    .itens{
        a{
            margin: 0 .5rem;
            text-decoration: none;
            font-weight: 600;
            padding: .4rem;
        }
        a.router-link-active{
            background: white;
            color: black;
            border-radius: 5px;
        }
    }

}

</style>