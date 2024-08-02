import * as yup from 'yup'

export const LoginRegisterSchema = yup.object({
    userEmail: yup.string()
        .required('이메일을 입력하세요')
        .email('이메일 형식이 바르지 않습니다.'),
    userPassword: yup.string()
        .required('패스워드를 입력해주세요')
        .min(8, '패스워드를 8자리 이상 입력하세요'),
})
export type LoginRegisterSchemaType = yup.InferType<typeof LoginRegisterSchema>

