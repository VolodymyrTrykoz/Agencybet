export default {
    props: ['portfolio'],
    data() {
        return {
            language: {
                ru: {
                    details: 'Подробнее'
                },
                en: {
                    details: 'Details'
                },
            },
            dx: 0,
            dy: 0,
            x: 0,
            y: 0,
            name: '',
        }
    },
    methods: {
        handleMouseMove(e) {
            const { item } = this.$refs;
            const boundingClientRect = item.getBoundingClientRect();
            const x = e.clientX - boundingClientRect.left;
            const y = e.clientY - boundingClientRect.top;
            const xc = boundingClientRect.width/2;
            const yc = boundingClientRect.height/2;
            this.x = x;
            this.y = y;
            this.dx = (x - xc) / -200;
            this.dy = (y - yc) / 200;
        },
        handleMouseOut() {
            this.dx = 0;
            this.dy = 0;
            this.x = 0;
            this.y = 0;
        },
    },
    mounted() {
        if (window) {
            this.$refs.item.addEventListener('mouseleave', this.handleMouseOut);
            this.$refs.item.addEventListener('mousemove', this.handleMouseMove);
        }
    },
    computed: {
        defineLanguage(){
            return this.$store.getters.getLanguage;
        },
    },
    beforeDestroy() {
        if (window) {
            this.$refs.item.removeEventListener('mouseleave', this.handleMouseOut);
            this.$refs.item.removeEventListener('mousemove', this.handleMouseMove);
        }
    }


}