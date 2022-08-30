import validator from 'validator';
import { ApiError } from '../../../exceptions/errors';
import { DTO } from '../../../types/dto.interface';

enum SkillCategories {
  backend = 'backend',
  frontend = 'frontend',
  cicd = 'cicd',
  database = 'database',
  other = 'other',
}

export class CreateSkillDto implements DTO {
  id: string;
  displayName: string;
  icon: string | undefined;
  category: SkillCategories;

  constructor(body: any, file: any) {
    this.id = body.id;
    this.displayName = body.displayName;
    this.icon = this.getFileName(file);
    this.category = body.category;
  }

  getFileName(file: any) {
    if (!file) return;
    return `/icons/${file.filename}`;
  }

  get data() {
    const payload: {[key: string]: any} = {};

    for (const key in this) {
      if (this[key]) payload[key] = this[key];
    }

    return payload;
  }

  validate() {
    const id = this.id || '';
    const displayName = this.displayName || '';
    const category = this.category || '';

    if (validator.isEmpty(id)) {
      throw ApiError.badInput('ID field is required');
    }
    if (validator.isEmpty(displayName)) {
      throw ApiError.badInput('DisplayName field is required');
    }
    if (
      !validator.isEmpty(category) &&
      !validator.isIn(category, ['backend', 'frontend', 'cicd', 'database', 'other'])
    ) {
      throw ApiError.badInput(`Invalid category '${category}'`);
    }
  }
}
