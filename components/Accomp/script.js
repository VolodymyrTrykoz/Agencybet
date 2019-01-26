import Scroll from "~/components/Accomp/Scroll/";
import { TweenMax, TimelineMax } from 'gsap';

export default {
    data() {
        return {
            language: {
                ru: {
                    titleTop: 'Ваш проводник',
                    titleBottom: 'в мире диджитал',
                    description: 'Занимаемся креативными проектами для букмекеров уже более пяти лет'
                },
                en: {
                    titleTop: 'Your guide',
                    titleBottom: 'in the digital world',
                    description: 'We are engaged in creative projects for bookmakers for more than five years.'
                },
            }
        }
    },
    components: {
        Scroll
    },
    methods: {
        textAnimation() {
            const { subtitle__content, plus, accomp__mail, btn__content } = this.$refs;
            const tl = new TimelineMax;
            tl
                .to(plus, 1, {scaleX: 1, scaleY: 1, ease: Elastic.easeOut.config(1, 0.3)})
                .to(subtitle__content, .5, {y: '0%'})
                .to(accomp__mail, .5, {y: '0%'})
                .to(btn__content, 1, {y: '0%', ease: Power3.easeOut}, '-=1')
        },
    },
    mounted() {
        const { string1, string2} = this.$refs;
        if (window) {
            TweenMax.fromTo( string1 , 2, {width: 0,}, {width: "7em", ease:  SteppedEase.config(100)});
            TweenMax.fromTo( string2 , 2, {width: 0,}, {width: "7em", ease:  SteppedEase.config(170), delay: 2, onComplete: this.textAnimation});
        }

    },
    computed: {
        defineLanguage(){
            return this.$store.getters.getLanguage;
        }
    }
}