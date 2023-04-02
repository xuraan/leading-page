export const HOST: string = "http://127.0.0.1:8000"

export const LOCALS_URL: string = HOST + "/locals"
export const LOCALIZED_STRINGS_URL = (local: string) => HOST + "/locals/localized?language=" + local







export const LOCALS = [
    {
        "flag": "🇫🇷",
        "id": "fr",
        "name": "Français",
        "strings": {
            "app_name": "Coran",
            "features": "Fonctionnalités",
            "versions": "Versions",
            "faqs": "Foire Aux Questions",
            "contacts": "Contacts",
        }
    },
    {
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "id": "en",
        "name": "English",
        "strings": {
            "app_name": "Quran",
            "features": "Features",
            "versions": "Versions",
            "faqs": "Frequently Asked Questions",
            "contacts": "Contacts",
        }
    },
    {
        "flag": "🇵🇸",
        "id": "ar",
        "name": "العربي",
        "strings": {
            "app_name": "Coran",
            "features": "الميزات",
            "versions": "الإصدارات",
            "faqs": "الأسئلة الشائعة",
            "contacts": "جهات الاتصال",
        }
    },
    {
        "flag": "🇲🇱",
        "id": "bm",
        "name": "Bamanan",
        "strings": {
            "app_name": "kurana",
            "features": "Kunafoniw",
            "versions": "Kunafoniw",
            "faqs": "Ntolosowkelen",
            "contacts": "Kontakto",
        }
    }
];
