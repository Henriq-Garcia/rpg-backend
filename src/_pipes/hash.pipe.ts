import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { hashSync } from "bcrypt";

@Injectable()
export class HashPassword implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        return hashSync(value, 12);
    }
}