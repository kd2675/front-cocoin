import * as yup from 'yup'

export const OrderRegisterSchema = yup.object({
	orderSlct: yup
		.string()
		.required('주문유형을 다시 확인해주세요.')
		.oneOf(['b', 's'], '주문유형이 유효하지 않습니다.'),
	coinSlct: yup
		.string()
		.required('코인유형을 다시 확인해주세요.')
		.oneOf(['BTC'], '코인유형이 유효하지 않습니다.'),
	marginSlct: yup
		.string()
		.required('마진유형을 다시 확인해주세요.')
		.oneOf(['l', 's'], '마진유형이 유효하지 않습니다.'),
	margin: yup
		.number()
		.required("마진배율을 확인해주세요")
		.max(300, '마진배율은 최대 300배 입니다.')
		.min(1, '마진배율은 최소 1배 입니다.'),
	cnt: yup
		.number()
		.required("개수를 확인해주세요")
		.min(1, '개수는 최소 1개 입니다.'),
	price: yup
		.number()
		.required("가격을 확인해주세요")
		.min(1, '가격은 최소 1원 입니다.'),
})
export type OrderRegisterSchemaType = yup.InferType<typeof OrderRegisterSchema>