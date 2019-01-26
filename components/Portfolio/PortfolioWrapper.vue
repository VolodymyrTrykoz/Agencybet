<template>
    <section class="portfolio">
        <div class="container">
            <div class="portfolio__wrapper">
                <RevercedTitle :title="language[defineLanguage].portfolioSign"/>
                <GiantTitle :title="language[defineLanguage].ourProjects" :handleTitleRef="handleRef"/>
                <div class="portfolio__container" ref="container">
                    <div class="portfolio__itemWrapper"
                        ref="wrapper"
                        v-bind:style="{
                            position: 'absolute',
                            top: 0,
                            transform: `translateX(${value}px) translateZ(0)`
                        }"
                    >
                        <div class="portfolio__skewBox" ref="portfolio__skewBox">
                            <Portfolio
                                v-for="porfolio in language[defineLanguage].portfoliosItems"
                                v-bind:portfolio="porfolio"
                                v-bind:key="porfolio.id"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider__wrapper">
                <VueSlideBar
                    v-model="sliderCustomzie.value"
                    :max="100"
                    :lineHeight="sliderCustomzie.lineHeight"
                    :slideBarStyle="sliderCustomzie.slideBarStyle"
                    :processStyle="sliderCustomzie.processStyle"
                    :tooltipStyles="sliderCustomzie.tooltipStyles"
                    :speed=".2"
                    v-on:input="callbackRange"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import TweenMax from 'gsap';
    import VueSlideBar from 'vue-slide-bar';
    import Portfolio from '~/components/Portfolio/Item/';
    import scroll from '~/assets/img/svg/scroll.svg';
    import draft from '~/assets/img/draft.jpg';
    import RevercedTitle from '~/components/RevercedTitle/';
    import GiantTitle from '~/components/GiantTitle/';
    let scaleFlag = false;
    export default {
        data() {
            return {
                titleRef: null,
                var: scroll,
                value: 0,
                active: true,
                animationPlayed: false,
                language: {
                    ru: {
                        portfoliosItems: [
                        {
                          id: 0,
                          img: draft,
                          counter: {first: '01', second: '/05'},
                          title: {first: 'Game', second: 'of sports'},
                          descr: 'Выбери вид спорта, загрузи свое фото, придумай слоган — и выиграй iPhone. Проект к запуску нового приложения Пари-Матч'
                        },
                        {
                          id: 1,
                          img: draft,
                          counter: {first: '02', second: '/05'},
                          title: {first: 'Супер', second: 'нокаут'},
                          descr: 'Для Пари-Матч и казахской аудитории мы доказали с помощью инфографик и статистики, что Головкин непобедим'
                        },
                        {
                          id: 2,
                          img: draft,
                          counter: {first: '03', second: '/05'},
                          title: {first: 'Мэйвезер', second: 'vs. Макгрегор'},
                          descr: 'Для Пари-Матч мы сделали так, чтобы атмосферу вокруг самого распиаренного боя века почувствовал каждый'
                        },
                        {
                          id: 3,
                          img: draft,
                          counter: {first: '04', second: '/05'},
                          title: {first: 'Прицел', second: 'на победу'},
                          descr: 'Узнай, кто выступит от Украины на Зимней Олимпиаде, сыграй в интерактивный биатлон — и выиграй призы от BAZABET'
                        },
                        {
                          id: 4,
                          img: draft,
                          counter: {first: '05', second: '/05'},
                          title: {first: 'Панорамы', second: 'в facebook'},
                          descr: 'Еще большее удовольствие от взаимодействия с вашим Брендом — с 360-градусными панорамами для шеров'
                        },
                      ],
                        portfolioSign: 'портфолио',
                        ourProjects: 'наши работы.'
                    },
                    en: {
                        portfoliosItems: [
                        {
                          id: 0,
                          img: draft,
                          counter: {first: '01', second: '/05'},
                          title: {first: 'Game', second: 'of sports'},
                          descr: 'Choose a sport, upload your photo, think up a slogan - and win an iPhone. Project was devoted for the launch of the new application Pari Match'
                        },
                        {
                          id: 1,
                          img: draft,
                          counter: {first: '02', second: '/05'},
                          title: {first: 'Super', second: 'knockout'},
                          descr: 'Using infographics and statistic data we proved for the Pari Match and the Kazakh audience, that Golovkin is invincible'
                        },
                        {
                          id: 2,
                          img: draft,
                          counter: {first: '03', second: '/05'},
                          title: {first: 'Mayweather', second: 'vs. MacGregor'},
                          descr: 'Developing this project for the Pari-Match, we have made sure that everybody experienced the atmosphere around the most fervent battle of the century.'
                        },
                        {
                          id: 3,
                          img: draft,
                          counter: {first: '04', second: '/05'},
                          title: {first: 'Aim', second: 'to win'},
                          descr: 'Find out who will perform Ukraine at the Winter Olympics, play an interactive biathlon - and win prizes from BAZABET'
                        },
                        {
                          id: 4,
                          img: draft,
                          counter: {first: '05', second: '/05'},
                          title: {first: 'Panorams', second: ' in Facebook'},
                          descr: 'Even more pleasure from interacting with your Brand - with 360-degree panoramas for sharing'
                        },
                      ],
                        portfolioSign: 'portfolio',
                        ourProjects: 'our projects.'
                    },
                },
                loader: null,
                loading: 0,
                sliderCustomzie: {
                    lineHeight: 2,
                    slideBarStyle: {
                        backgroundColor: '#8ACC95'
                    },
                    processStyle: {
                        backgroundColor: '#8ACC95'
                    },
                    tooltipStyles: {
                        background: `url(${scroll})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        border: 'none',
                        height: '35px',
                        width: '35px',
                        position: 'inherit',
                        top: '9.5px',
                        fontSize: 0
                    },
                },
            }
        },
        components: {
            RevercedTitle, GiantTitle, Portfolio, VueSlideBar,
        },
        methods: {
            portfolioScale() {
                const {portfolio__skewBox} = this.$refs;
                TweenMax.to(portfolio__skewBox, .5, {scaleX:.95, scaleY:.95});
                scaleFlag = true;
            },
            portfolioUnscale() {
                const {portfolio__skewBox} = this.$refs;
                TweenMax.to(portfolio__skewBox, .1, {scaleX:1, scaleY:1});
                scaleFlag = false;
            },
            callbackRange(value) {
                const {container, wrapper} = this.$refs;
                requestAnimationFrame(() => {
                    const offset = (wrapper.clientWidth - container.clientWidth) * value / 100;
                    this.value = offset * -1;
                });
            },
            handleRef(ref) {
                if (ref) {
                   this.titleRef = ref;
                }
            },
            trackTitleOffset(){
                const {container} = this.$refs;
                if (window && !this.animationPlayed && ((window.innerHeight / 2) > this.titleRef.getBoundingClientRect().top)) {
                    TweenMax.fromTo(container, 2, {yPercent: 50}, {yPercent: 0});
                    this.animationPlayed = true;
                }
            }
        },
        mounted() {
            const {container} = this.$refs;
            if (window) {
                const scrollTrigger = document.querySelector('.vue-slide-bar-tooltip');
                scrollTrigger.addEventListener('mousedown', this.portfolioScale);
                window.addEventListener('mouseup', this.portfolioUnscale);
                window.addEventListener('scroll', this.trackTitleOffset);
                TweenMax.set(container, {yPercent: 50});
            }
        },
        computed: {
            defineLanguage(){
                return this.$store.getters.getLanguage;
            }
        }

    }
</script>

<style lang="sass" src="./style.sass" scoped></style>