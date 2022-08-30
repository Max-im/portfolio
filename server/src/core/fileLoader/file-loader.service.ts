import multer from 'multer';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
class FileLoaderService {
  private getUploader(folder: string) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `public/${folder}`);
      },
      filename: function (req, file, cb) {
        const fileExtension = file.originalname.split('.').pop();
        cb(null, uuid() + '.' + fileExtension);
      },
    });
    return storage;
  }

  getIconUploader() {
    const storage = this.getUploader('icons');
    return multer({ storage });
  }

  getImageUploader() {}

  deleteIcon(iconPath: string) {
    const iconName = iconPath.replace(/^\/icons\//, ''); 
    fs.unlink(path.resolve(__dirname, '../../../public/icons/', iconName), () => {});
  }

  deleteImage() {}
}

const fileLoaderService = new FileLoaderService();

export { fileLoaderService };
