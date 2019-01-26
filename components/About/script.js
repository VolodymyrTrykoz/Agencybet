import GiantTitle from "~/components/GiantTitle/";
import RevercedTitle from "~/components/RevercedTitle";
import Form from "~/components/About/Form/";

export default {
    data() {
        return {
            language: {
                ru: {
                    aboutUs: 'о нас.',
                    aboutUsSm: 'о нас',
                    description: 'Agency Bet специализируется на создании уникального контента для букмекерских контор. С вас - задача, с нас - её профессиональное выполнение.',
                    contacts: 'Контакты',
                    addressUa: 'Украина, Киев',
                    addressUaStreet: 'улица Ильинская, 8',
                    addressEst: 'Эстония, Таллин',
                    addressEstStreet: 'улица Сепапая, 6',
                    addressBlr: 'Белоруссия, Минск',
                    addressBlrStreet: 'ожидается открытие'
                },
                en: {
                    aboutUs: 'about us.',
                    aboutUsSm: 'about us',
                    description: 'Agency Bet specializes in creating unique content for bookmakers. Give us a task and we will bring it to real life.',
                    contacts: 'Contacts',
                    addressUa: 'Ukraine, Kyiv',
                    addressUaStreet: ' Illinska street, 8',
                    addressEst: 'Estonia, Tallinn',
                    addressEstStreet: 'Sepapaja street, 6',
                    addressBlr: 'Belarus, Minsk',
                    addressBlrStreet: 'is due to open'
                },
            }
        }
    },
    components: {
        GiantTitle, RevercedTitle, Form
    },
    methods: {
        handleRef(ref) {

        }
    },
    computed: {
        defineLanguage(){
            return this.$store.getters.getLanguage;
        },
    }
}