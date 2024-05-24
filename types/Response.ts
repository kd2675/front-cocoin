export type Response<T> = {
	success: boolean,
	code: number,
	message: string,
	data?: T,
}