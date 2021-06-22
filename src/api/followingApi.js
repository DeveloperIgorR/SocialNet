import * as axios from 'axios'
const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': 'b034670b-e3d4-4464-a5dc-9cfc4caad1a1' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const followingApi = {
    setFollow(id) {
        return instance.post(`follow/${id}`,{},)
        .then(respons => {
           if(respons.data.resultCode == 0)
           {follow(id)}
        })
    },
}