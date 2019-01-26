
export default {
    props: ['title', 'handleTitleRef'],
    data() {
        return {
            elOffsetTop: 0
        }
    },
    components: {

    },
    mounted() {
        if (window) {
            window.addEventListener('scroll', this.handleScroll);
        }
        if (this.handleTitleRef) {
            this.handleTitleRef(this.$refs.title);
        }
    },
    methods: {

        handleScroll() {
            this.elOffsetTop = window.innerHeight - window.scrollY;
        }
    },
    beforeDestroy() {
        if (window) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}