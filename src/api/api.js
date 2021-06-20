import * as axios from 'axios'
const instance = axios.create()
export const getUsers = instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials:true})
            .then(respons => {
                respons.data
            })