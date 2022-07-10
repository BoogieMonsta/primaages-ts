export default {
	port: 8080,
	dbUri: 'mongodb://localhost:27017/primaages',
	saltWorkFactor: 10,
	accessTokenTtl: '15m',
	refreshTokenTtl: '1y',
	publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC18qtvzE9Rx10gYufGWoM5Dc8o
    6ABFNDMXIvSu3n+i/taOx4gdW59Y94qs2XHeKF+jwTy0FjT6kMvymIm5keC5Vw7I
    gT15en5D6CJV6NH9V1o6r3maIBtoKdFOMpPJpZRNELxvgUL3bsmcvpb9XfnnZYij
    +6HUh0dwYpPaAE/0hQIDAQAB
    -----END PUBLIC KEY-----`,
	privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQC18qtvzE9Rx10gYufGWoM5Dc8o6ABFNDMXIvSu3n+i/taOx4gd
    W59Y94qs2XHeKF+jwTy0FjT6kMvymIm5keC5Vw7IgT15en5D6CJV6NH9V1o6r3ma
    IBtoKdFOMpPJpZRNELxvgUL3bsmcvpb9XfnnZYij+6HUh0dwYpPaAE/0hQIDAQAB
    AoGAJgYQzcxkxzJiw+HnjgxcYBACuwnBBLVj9/HWMLVO90FKlYwdZgU/x9fzoyvO
    IB9P3WkExp3ddH/OH2TBY4aY78fUC10wAhKmsg/ODZZ1sB+LSGtysKCLzql5+R+q
    B3gntn1/DE4xlz8jB5ydDkiFHnZ8eoDq2wcLn7STFYlbYAECQQD06rL5Ha/o3v9y
    90kNhYM6px1gsYoi+YTo4bomxFRjFTurLcgcf5PZdJUyC1/9f4GczGwyR0lT7nOH
    Mvoy46Z1AkEAvi594e4oBhgAcsYDzOHi/HyJJQD1T723MTkZjFl+MN3losMbLviF
    XTb/Lo00mYk4aIfc61jTPWQ53NJUgSTz0QJBAKS+yyzvX0jR2BtJZAaIbMGjcAt+
    4WCtX04XqNQy9GDCA6Ud4qHo31dDKKjFJgirIFCM4argcN7YYzXqgIqCv5ECQQCz
    GieU2Os6aeoqLI8xqN1SOJoTjiZ39UuLgKGtyi4MKTz0nleAUa2PDpcdKQALQ+4q
    iyCjRyCQpU3UxwOsJ7exAkA/rWBb0vESdjWczuWzoD7xk95asPH6EO4blMJw70az
    fEqFEF+zRkhti/c/AL+qzTqTSNlMfI84BPhhqydWFVzw
    -----END RSA PRIVATE KEY-----`,
};
