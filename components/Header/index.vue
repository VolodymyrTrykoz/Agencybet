<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo">
                <a href="#"><img src="~assets/img/svg/logo.svg" alt="logo"></a>
            </div>
            <div class="header__nav">
                <router-link to="/portfolio">
                    <span class="header__link" v-for="item in language[defineLanguage].headerLinks"> {{ item }} </span>
                </router-link>
            </div>
            <div class="header__lang">
                <div v-for="item in language.list">
                    <span href="#" @click="changeLang(item.option)" :class="[item.option, {active: $store.getters.getLanguage === item.option}]"> {{ item.option.toUpperCase() }} </span>
                </div>
            </div>
        </div>
    </header>
</template>

<script src="./script.js"></script>

<style lang="sass" src="./style.sass" scoped></style>