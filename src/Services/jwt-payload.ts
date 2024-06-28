import * as jwt_decode from 'jwt-decode';


export interface JwtPayload extends jwt_decode.JwtPayload{
        Id:string;
        role:string;
        email: string;
        // Add other properties if needed
    
}
