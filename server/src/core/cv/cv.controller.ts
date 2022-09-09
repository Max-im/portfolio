import PDFDocument from 'pdfkit';
import * as fs from 'fs';
import { cvService } from './cv.service';
import { resumeService } from '../resume/resume.service';

const c = {
  indent: 220,
  width: 360,
  black: '#122738',
  gray: '#888',
};

class CvController {
  async execute() {
    const filePath = 'public/assets/cv.pdf';
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    cvService.styleAside(doc);
    await cvService.addSkills(doc);
    cvService.addLanguages(doc);
    cvService.addContacts(doc);


    await cvService.addBio(doc);
    await cvService.addExperience(doc);
    await cvService.addEducation(doc);

    doc.end();
  }
}

const cvController = new CvController();

export { cvController };
