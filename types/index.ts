export interface IAuthUserParams {
	username?: string;
	email: string;
	password: string;
	confirmedPassword?: string;
}

export interface User {
	$id: string;
	userId: string;
	name: string;
	email: string;
}
