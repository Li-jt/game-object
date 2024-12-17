import {defineStore} from "pinia";
import {reactive} from "vue";

const useAppStore = defineStore('app', () => {
    const state = reactive({
        config: {},
    })

    const getConfig = () => {
        return state.config = {

        }
    }

    return {
        ...state,
        getConfig
    }
})

export default useAppStore
