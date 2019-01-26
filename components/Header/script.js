export default {
  data() {
      return {
         language: {
            ru: {
                headerLinks: ['Главная', 'Портфолио', 'О нас', 'Контакты']
            },
            en: {
                headerLinks: ['Main', 'Portfolio', 'About us', 'Contacts']
            },
            list: [
                {option: 'ru'},
                {option: 'en'}
           ]
        }
      }
  },
  components: {

  },
  mounted() {

  },
  methods: {
      changeLang(lang){
          this.$store.commit('changeLanguage', lang);
      },
  },
  computed: {
      defineLanguage(){
          return this.$store.getters.getLanguage;
      },
  }



}