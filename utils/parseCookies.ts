import {NextApiRequest} from "next";
import { cookies } from 'next/headers'

export const parseCookies = (req : any) => {
    return cookies().get(req ? req.headers.cookie || "" : document.cookie)
}