<template>
    <div class="wrapper">
        <Grid/>
        <Header/>
        <Accomp/>
        <ClientsWrapper/>
        <PortfolioWrapper />
        <About/>
    </div>
</template>
<script>
    import Grid from "~/components/Grid/";
    import Header from "~/components/Header/";
    import Accomp from "~/components/Accomp/";
    import ClientsWrapper from "~/components/Clients/ClientsWrapper/";
    import PortfolioWrapper from "~/components/Portfolio/PortfolioWrapper";
    import About from "~/components/About/";


    export default {
        data() {
            return {}
        },
        components: {
            Grid, Header, Accomp, ClientsWrapper, PortfolioWrapper, About
        },
        mounted() {

        },
        methods: {

        },
    }
</script>

<style lang="sass" scoped="">
    @import "~assets/sass/vars"
    @import "~assets/sass/main"
    .wrapper
        overflow: hidden


</style>