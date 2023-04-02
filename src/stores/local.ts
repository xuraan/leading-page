import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { LOCALS } from '@/helper/constants';

interface Local {
    id: string;
    name: string;
    flag: string;
    strings: LocalizedString
}

interface LocalizedString {
    app_name: string;
    features: string;
    versions: string;
    faqs: string;
    contacts: string;
}
function getInitialLocal(): Local {
    const cachedLocalString = localStorage.getItem('local')
    console.log(cachedLocalString)
    if (cachedLocalString !== null) {
        const cachedLocal: Local = JSON.parse(cachedLocalString)
        if (cachedLocal.id !== undefined) {
            return cachedLocal
        }
    }
    // Recherche l'élément de locals qui correspond à la langue préférée du navigateur
    const browserLanguage = navigator.language.split('-')[0]
    const newLocal = LOCALS.find(local => local.id === browserLanguage)
    return newLocal ?? LOCALS[0] // Return the first element of LOCALS as a fallback
}

export const local = ref<Local>(getInitialLocal())

watch(local, (newVal: Local) => {
    localStorage.setItem('local', JSON.stringify(newVal))
})

export const useLocalStore = defineStore('local', () => {
    return { local }
})
