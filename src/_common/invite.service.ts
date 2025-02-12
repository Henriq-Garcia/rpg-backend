import { Injectable } from "@nestjs/common";
import { randomBytes } from "crypto";

@Injectable()
export class InviteService {
    generateInviteCode() {
        return randomBytes(22).toString('hex').slice(0, 22);
    }
}