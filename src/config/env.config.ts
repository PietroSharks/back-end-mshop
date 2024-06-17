import { InternalServerErrorException } from '@nestjs/common';
import 'dotenv/config'
import * as joi from 'joi'

interface EnvJoi {
    PORT: number;
}
const joiSchema = joi.object({
    PORT: joi.number().default(3000).required()
}).unknown(true);

const { error, value } = joiSchema.validate( process.env );

if (error) {
    throw new InternalServerErrorException(`Config validation error: ${error.message}`);
}

const envJoi: EnvJoi = value;
export const env = {
    PORT: envJoi.PORT
}