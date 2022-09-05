import axios from 'axios';
import PDFDocument from 'pdfkit';
import { projectSkillsService } from '../project-skills/project-skills.service';
import { projectService } from '../project/project.service';
import { resumeService } from '../resume/resume.service';
import { skillService } from '../skill/skill.service';

const c = {
  indent: 220,
  width: 360,
  black: '#122738',
  gray: '#888',
};

class CvService {
  styleAside(doc: any) {
    doc.rect(0, 0, 200, 1000).fill('#EFEFEF');
  }

  addLanguages(doc: any) {
    doc.fontSize(16).fillColor(c.black).text('Languages', { paragraphGap: 5 });
    doc.fontSize(11).fillColor(c.gray).text(`English: `, { continued: true });
    doc.fillColor(c.black).text('Intermediate');
    doc.fontSize(11).fillColor(c.gray).text(`Ukrainian: `, { continued: true });
    doc.fillColor(c.black).text('Native');
    doc.fontSize(11).fillColor(c.gray).text(`Russian: `, { continued: true });
    doc.fillColor(c.black).text('Native');
    doc.fontSize(1).text(' ', { paragraphGap: 20 });
  }

  async addSkills(doc: any) {
    doc.fillColor(c.black).fontSize(16).text('Skills', 20, 150, { paragraphGap: 5 });
    const skills = await skillService.getData();
    const formattedSkills = skillService.formatResponse(skills);

    Object.keys(formattedSkills).forEach((category) => {
      doc.fontSize(12).fillColor(c.black).text(category);
      // @ts-ignore
      const skillsIds = formattedSkills[category].map((skill) => skill.displayName).join(', ');
      // @ts-ignore
      doc.fillColor(c.black).fontSize(11).fillColor(c.gray).text(skillsIds, { width: 160 });
      doc.fontSize(1).text(' ', { paragraphGap: 5 });
    });
    doc.fontSize(1).text(' ', { paragraphGap: 10 });
  }

  addContacts(doc: any) {
    doc.fontSize(16).fillColor(c.black).text('Contacts', { paragraphGap: 5 });

    doc
      .fontSize(12)
      .fillColor(c.gray)
      .text('Portfolio', { link: 'https://max-im.github.io', paragraphGap: 2 });
    doc.fontSize(10).fillColor(c.black).text('https://max-im.github.io');
  }

  async addBio(doc: any) {
    const resume = await resumeService.getData();
    doc
      .fontSize(18)
      .fillColor(c.black)
      // @ts-ignore
      .text(resume.name, 220, 30, { paragraphGap: 2 });

    // @ts-ignore
    doc.fontSize(14).fillColor(c.black).text(resume.bio, { paragraphGap: 10 });
  }
}

const cvService = new CvService();

export { cvService };
