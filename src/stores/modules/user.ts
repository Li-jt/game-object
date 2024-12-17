import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {itemEnum, valueTypes} from "@/components/prefabs/types";
import LocalStorageService from "@/utils/localStorageService";

const useUserStore = defineStore('user', () => {
    const _state = ref({})

    const state = computed(()=>{
        const user = LocalStorageService.getItem('user')
        if(user){
            Object.assign(_state.value, user)
        }
        return _state.value
    })

    const getItem = (key:itemEnum) => {
        return _state.value.item?.[key] || {}
    }

    const setItem = (key:itemEnum, value:valueTypes) => {
        if(!_state.value.item) _state.value.item = {}
        _state.value.item[key] = value
        LocalStorageService.setItem('user', _state.value)
    }

    return {
        state,
        getItem,
        setItem
    }

})

export default useUserStore
