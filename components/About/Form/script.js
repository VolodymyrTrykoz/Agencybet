export default {
    props: [],
    data() {
        return {
            language: {
                ru: {
                    getInTouch: 'Оставаться на связи',
                    userName: 'Ваше имя',
                    userEmail: 'Ваш e-mail',
                    userMessage: 'Ваше сообщение',
                },
                en: {
                    getInTouch: 'Get in touch',
                    userName: 'Your name',
                    userEmail: 'Your e-mail',
                    userMessage: 'Your message',
                },
            },
            name: '',
            mail: '',
            message: '',
            isNameValid: true,
            isNameCorrect: false,
            isMailValid: true,
            isMailCorrect: false,
            isMessageValid: true,
            isMessageCorrect: false,
            reg: /\S+@\S+\.\S+/,
        }
    },
    methods: {
        handleChangeName({target}) {
            this.isNameValid = this.name.length > 0;
            this.isNameCorrect = this.name.length > 0;
        },
        handleChangeMail({target}) {
            this.isMailValid = this.reg.test(this.mail);
            this.isMailCorrect = this.mail.length > 0;
        },
        handleChangeMessage({target}) {
            this.isMessageValid = this.message.length > 0;
            this.isMessageCorrect = this.message.length > 0;
        },

        handleSubmit(event) {
          event.preventDefault();
            this.isNameValid = this.name.length > 0;
            this.isMailValid = this.reg.test(this.mail);
            this.isMessageValid = this.message.length > 0;
            if(this.isNameValid && this.isMailValid && this.isMailValid) {
               this.name = '';
               this.mail = '';
               this.message = '';
               console.log('SUBMIT');
            }
        },
    },
    mounted() {

    },
    computed: {
        defineLanguage(){
            return this.$store.getters.getLanguage;
        },
    },
    beforeDestroy() {

    }
}