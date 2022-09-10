import { educationService } from '../education/education.service';
import { experienceService } from '../experience/experience.service';
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
    doc.fontSize(15).fillColor(c.black).text('Languages', { paragraphGap: 5 });
    doc.fontSize(11).fillColor(c.gray).text(`English: `, { continued: true });
    doc.fillColor(c.black).text('Intermediate');
    doc.fontSize(11).fillColor(c.gray).text(`Ukrainian: `, { continued: true });
    doc.fillColor(c.black).text('Native');
    doc.fontSize(11).fillColor(c.gray).text(`Russian: `, { continued: true });
    doc.fillColor(c.black).text('Native');
    doc.fontSize(1).text(' ', { paragraphGap: 20 });
  }

  async addSkills(doc: any) {
    doc.fillColor(c.black).fontSize(15).text('Skills', 20, 150, { paragraphGap: 5 });
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
    doc.fontSize(15).fillColor(c.black).text('Contacts', { paragraphGap: 5 });

    doc
      .fontSize(12)
      .fillColor(c.gray)
      .text('Portfolio', { link: 'https://max-im.github.io', paragraphGap: 2 });
    doc.fontSize(10).fillColor(c.black).text('https://max-im.github.io');
  }

  async addBio(doc: any) {
    const resume = await resumeService.getData();
    // @ts-ignore
    doc.fontSize(18).fillColor(c.black).text(resume.name, 220, 30, { paragraphGap: 2 });

    // @ts-ignore
    doc.fontSize(14).fillColor(c.black).text(resume.bio, { paragraphGap: 10 });
  }

  async addExperience(doc: any) {
    doc.fontSize(15).fillColor(c.black).text(`Experience`, { paragraphGap: 5 });
    const experience = await experienceService.getData();

    experience.forEach((exp) => {
      // @ts-ignore
      doc.image(`public${exp.icon}`, { fit: [18, 24], align: 'center', valign: 'bottom' });
      // @ts-ignore
      doc.fontSize(10).fillColor(c.black).text(`${exp.position} | ${exp.organisation}`, { indent: 25, paragraphGap: 2 });
      // @ts-ignore
      doc.fillColor(c.gray).fontSize(8).text(`${this.formateDate(exp.from)} | ${this.getTimePeriod(exp.from, exp.to)}`, { indent: 25, paragraphGap: 5 });
      // @ts-ignore
      doc.fontSize(10).fillColor(c.gray).text(exp.description, { width: c.width, align: 'justify', paragraphGap: 12 });
    });
  }

  async addEducation(doc: any) {
    doc.fontSize(15).fillColor(c.black).text(`Education`, { paragraphGap: 5 });
    const educations = await educationService.getData();

    educations.forEach(edu => {
      // @ts-ignore
      doc.image(`public${edu.icon}`, { fit: [18, 24], align: 'center', valign: 'bottom' });
      // @ts-ignore
      doc.fontSize(12).fillColor(c.black).text(edu.organisation, { indent: 25, paragraphGap: 2 });
      // @ts-ignore
      doc.fillColor(c.gray).fontSize(10).text(`${edu.description} | ${this.formateDate(edu.from)}`, { indent: 25, paragraphGap: 5 });
    });
  }

  private formateDate(from: string) {
    const monthArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    
    const fromDate = new Date(from);
    const month = fromDate.getMonth();
    const year = fromDate.getFullYear();
    return `${monthArr[month]} ${year}`;
  }

  private getTimePeriod(from: string, to: string): string {
    let result = '';
    const fromDate = new Date(from);
    const toDate = to ? new Date(to) : new Date();
    // @ts-ignore
    const diffTime = Math.abs(toDate - fromDate);
    const dayLength = 1000 * 60 * 60 * 24;
    const diffDays = Math.ceil(diffTime / dayLength);
    const dayInMonth = 30;
    const monthInYear = 12;
    const totalMonth = Math.floor(diffDays / dayInMonth);
    
    const years = Math.floor(totalMonth / monthInYear);
    const month = totalMonth % monthInYear;
    const yearsMsg = years > 0 ? `${years}y.` : '';
    const monthMsg = month > 0 ? `${month}mon.` : '';

    result = `${yearsMsg} ${monthMsg}`;
    result = result.trim();
    return result;
  }
}

const cvService = new CvService();

export { cvService };
