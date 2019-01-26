<template>
    <div class="portfolio__item">
        <div
             class="portfolio__img"
             ref="item"
             v-bind:style="{
                 transform: `rotateX(${dy}deg) rotateY(${dx}deg) translateZ(0)`,
                 boxShadow: `${x/50}px ${y/50}px ${x/10}px ${x/50}px rgba(138, 204, 149, 0.1)`,
            }">
            <img :src="portfolio.img">
            <div class="portfolio__counter">
                <span class="portfolio__counter--first">{{portfolio.counter.first}}</span>
                <span class="portfolio__counter--second">{{portfolio.counter.second}}</span>
            </div>
            <h2 class="heading"
                v-bind:style="{
                     transform: `translateX(-${x/30}px) translateY(-${y/30}px) translateZ(0)`,
                }"
            >
                <span class="portfolio__headingFirst" >{{portfolio.title.first}}</span>
                <br>
                <span class="portfolio__headingSecond">{{portfolio.title.second}}</span>
                <span class="green">.</span>
            </h2>
        </div>
        <div class="portfolio__descr">{{portfolio.descr}}</div>
        <a class="portfolio__link" href="#">{{ language[defineLanguage].details }}</a>
    </div>
</template>

<script src="./script.js"></script>

<style lang="sass" src="./style.sass" scoped></style>