import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '../config/config';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy, 'jwt' ) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET,
        });
    }

    async validate(payload, done: Function) {
        try {
             // You could add a function to the authService to verify the claims of the token:
            // i.e. does the user still have the roles that are claimed by the token
            // const validClaims = await this.authService.verifyTokenClaims(payload);

            // if (!validClaims)
            //    return done(new UnauthorizedException('invalid token claims'), false)

            done(null, payload);
        } catch (error) {
            throw new UnauthorizedException('unathorized', error.message);
        }
    }
}