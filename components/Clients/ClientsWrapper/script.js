import Client from "~/components/Clients/Client/";
import bazabetGray from '~/assets/img/svg/logo-bazabet-min.svg';
import bazabetColor from '~/assets/img/svg/logo-bazabet.svg';
import leonGray from '~/assets/img/svg/logo-leon-min.svg';
import leonColor from '~/assets/img/svg/logo-leon.svg';
import pmGray from '~/assets/img/svg/logo-pm-min.svg';
import pmColor from '~/assets/img/svg/logo-pm.svg';
import TweenMax, {TimelineMax} from "gsap";
let animationShown = false;

export default {
    data() {
        return {
            itemsRef: [],
            clientItems: [
                {id: 0, src: {gray: bazabetGray, color: bazabetColor}},
                {id: 1, src: {gray: leonGray, color: leonColor}},
                {id: 2, src: {gray: pmGray, color: pmColor}}
            ],
            language: {
                ru: {
                    clients: 'КЛИЕНТЫ'
                },
                en: {
                    clients: 'CLIENTS'
                },
            },
        }
    },
    components: {
        Client
    },
    methods: {
        handleRef(ref) {
            this.itemsRef = this.itemsRef.concat([ref]);
        },
        trackTitleOffset(){
            const { clients } = this.$refs;
            const clientsTop = clients.getBoundingClientRect().top;
            if(window.innerHeight > clientsTop && !animationShown){
                this.runAnimation();
            }
        },
        runAnimation(){
            if(window){
                let logos = Array.prototype.slice.call(document.querySelectorAll('.clients__content'));
                console.log(logos);
                const { clients } = this.$refs;
                const tl = new TimelineMax;
                animationShown = true;
                tl
                    .to(clients, 1, {y: '0%'})
                    .staggerTo(logos, 0.5, {y: '0%'}, 0.2);
            }


        }
    },
    computed: {
        defineLanguage(){
            return this.$store.getters.getLanguage;
        },
    },
    mounted() {
      if(window){
        window.addEventListener('scroll', this.trackTitleOffset);
      }
        const itemsArr = this.$refs.clientcomp.map(item => item.$refs.item);

    },

    beforeDestroy(){
      if(window){
        window.removeEventListener('scroll', this.trackTitleOffset);
      }
    },
}