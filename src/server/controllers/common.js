import multer from "multer";
import Jimp from "jimp";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

export const upload = multer({ storage });

export const resize50 = (req, res, next) => {
  Jimp.read(req.file.path)
    .then(img => {
      img
        .resize(50, 50)
        .quality(60)
        .write(`uploads/${req.file.filename}`);
      req.body.filename = req.file.filename;
      return next();
    })
    .catch(err => res.status(400).json(err));
};

export const resize32 = (req, res, next) => {
  Jimp.read(req.file.path)
    .then(img => {
      img
        .resize(32, 32)
        .quality(60)
        .write(`uploads/${req.file.filename}`);
      req.body.filename = req.file.filename;
      return next();
    })
    .catch(err => res.status(400).json(err));
};

export const resizeProj = (req, res, next) => {
  Jimp.read(req.file.path)
    .then(img => {
      img
        .resize(600, 400)
        .quality(60)
        .write(`uploads/${req.file.filename}`);
      req.body.filename = req.file.filename;
      return next();
    })
    .catch(err => res.status(400).json(err));
};
