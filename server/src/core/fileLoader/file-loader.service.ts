import multer from 'multer';
import { v4 as uuid } from 'uuid';

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

  deleteIcon() {}
  deleteImage() {}
}

const fileLoaderService = new FileLoaderService();

export { fileLoaderService };
