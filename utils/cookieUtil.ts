import { cookies } from 'next/headers'

export const setCookie = (name:string, value:string, option:any='') => {
    return cookies().set(name, value, { ...option });
}

export const getCookie = (name:string) => {
    return cookies().get(name);
}

export const getAllCookie = () => {
    return cookies()
}