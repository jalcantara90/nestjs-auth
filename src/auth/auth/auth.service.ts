import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider {
    GOOGLE = 'google',
}

@Injectable()
export class AuthService {

    private readonly JWT_SECRET_KEY: string = '0EA23C70EB5644DF68666110680AF4BCA9DB5A7C5BF3A58AFEA4EF62B83E4158';

    async validateOauthLogin( thirdPartyID: string, provider: Provider ): Promise<string> {
        try {
            const payload = {
                thirdPartyID,
                provider,
            };

            const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
            return jwt;

        } catch (error) {
            throw new InternalServerErrorException('validateOauthLogin', error.message);
        }
    }
}
