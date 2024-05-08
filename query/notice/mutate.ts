import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {selNoticeList} from "@api/notice";

// export const useInsSiteVisit = () => {
//     let router = useRouter()
//     let dispatch = useDispatch()
//     const queryClient = useQueryClient()
//
//     return useMutation(
//         async () => {
//             // await selNoticeList()
//         },
//         {
//             onSuccess: () => {
//             },
//             onError: (e: any) => {
//             },
//         }
//     )
// }
