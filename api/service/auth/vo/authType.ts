import { LoginRegisterSchemaType } from '@schema/login'

export type LoginParamType = LoginRegisterSchemaType

export type TokenType = {
	grantType: string
	accessToken: string
	refreshToken: string
}

export type UserInfoType = {
	id: number;
	oAuth2Id: string;
	email: string;
	name: string;
	phone: string;
	nick: string;
	ip: string;
	block: string;
	walletDTO: walletType;
	authDTOSet: authType[];
}

export type walletType = {
	id: number;
	point: number;
	userId: number;
}

export type authType = {
	id: number;
	role: string;
	userId: number;
}