import TweenMax from "gsap";

export default {
    props: ['client', 'handleRef'],
    data() {
        return {

        }
    },
    mounted(){
        if (this.handleRef) {
            this.handleRef(this.$refs.item);

        }
    }
}