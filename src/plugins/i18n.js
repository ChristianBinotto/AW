import { createI18n } from 'vue-i18n'

const messages = {
    'es': {
        Clear: "Despejado",
        Clouds: "Nublado",
        Rain: "Lluvioso"
    }
};

const i18n = createI18n({
    locale: 'es', // set locale
    //fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export{
    i18n
}