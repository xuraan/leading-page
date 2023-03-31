import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { LOCALS_URL } from '@/helper/constants';

interface Local {
    id: string;
    name: string;
    flag: string;
}

const locals = ref<Local[]>([])
const local = ref<Local>()

export const useLocalStore = defineStore('local', () => {


    const init = () => {
        fetch(LOCALS_URL)
            .then(response => response.json())
            .then(data => {
                locals.value = data
                const cachedLocal = localStorage.getItem('local')
                if (cachedLocal !== null) {
                    const local_: Local = JSON.parse(cachedLocal)

                    if (local_.id !== undefined){
                        local.value = local_
                        console.log(1)
                        console.log(local.value.id)
                    } else {
                        local.value = locals.value.find(local => local.id === navigator.language.split('-')[0])
                        console.log(2)
                        console.log(local.value?.id)
                    }
                } else {
                    // Recherche l'élément de locals qui correspond à la langue préférée du navigateur
                    local.value = locals.value.find(local => local.id === navigator.language.split('-')[0])
                    console.log(3)
                        console.log(local.value)
                }
            })
    }


    const updateLocal = (newLocal: Local) => {
        local.value = newLocal
        localStorage.setItem('local', JSON.stringify(newLocal))
    }

    init()

    return { local, locals, updateLocal }
})
