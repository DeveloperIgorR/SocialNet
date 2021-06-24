import * as axios from 'axios'
const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': 'b034670b-e3d4-4464-a5dc-9cfc4caad1a1' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(respons => {
                return respons.data
            })
    },
    userAuth() {
        return instance.get(`auth/me`)
            .then(respons => {
                if(respons.data.resultCode===0){
                    let{id,email,login}=respons.data.data
                    this.props.setAuthData(id,email,login)
                }
            })
    }

}

