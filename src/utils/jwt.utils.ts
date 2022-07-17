import jwt from 'jsonwebtoken';
import config from 'config';

const privateKey = config.get<string>('privateKey');
const publicKey = config.get<string>('publicKey');

// sign with private key
export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
	
    console.log('public key: ', publicKey);
	console.log('private key: ', privateKey);

	return jwt.sign(object, privateKey, {
		...(options && options), // make sure 'options' is not undefined
		algorithm: 'RS256',
	});
}

// verify with public key
export function verifyJwt(token: string) {
	try {
		const decoded = jwt.verify(token, publicKey);
		return {
			valid: true,
			expired: false,
			decoded,
		};
	} catch (e: any) {
		return {
			valid: false,
			expired: e.message === 'the jwt is expired!',
		};
	}
}
