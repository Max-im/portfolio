import validator from 'validator';
import { ApiError } from '../../../exceptions/errors';
import { DTO } from '../../../types/dto.interface';

export class LoginDto implements DTO {
//   id: string;
//   displayName: string;
//   icon: string | undefined;

  constructor(body: any) {
  }

  get data() {
    const payload: {[key: string]: any} = {};

    for (const key in this) {
      if (this[key]) payload[key] = this[key];
    }

    return payload;
  }

  validate() {
    
  }
}
