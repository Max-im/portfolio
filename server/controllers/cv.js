import PDFDocument from 'pdfkit';
import fs from 'fs';
import db from '../db';

const computeCV = async (req, res, next) => {
  const doc = new PDFDocument();
  const filePath = 'assets/cv.pdf';
  const stream = fs.createWriteStream(filePath);
  console.log('stream', stream);
  doc.pipe(stream);
  console.log('create file', doc);
  const [
    { rows: skills },
    { rows: categories },
    { rows: about },
    { rows: exp },
    { rows: edu },
  ] = await Promise.all([
    db.query('SELECT name, icon, category FROM skills'),
    db.query('SELECT * FROM skills_categories'),
    db.query('SELECT name, last_name, title, contacts, summary, social FROM about'),
    db.query(
      'SELECT company, title, description, icon, from_date, to_date, is_current FROM experience ORDER BY to_date DESC'
    ),
    db.query('SELECT title, icon, description FROM education'),
  ]).catch(next);

  console.log('get db data');
  const c = {
    indent: 220,
    width: 360,
    black: '#122738',
    gray: '#888',
  };

  // aside
  doc.rect(0, 0, 200, 1000).fill('#EFEFEF');

  // photo
  doc.image('uploads/avatar.jpg', 20, 30, { width: 100 });

  // skills
  doc.fillColor(c.black).fontSize(16).text('Skills', 20, 150, { paragraphGap: 5 });
  categories.forEach((cat) => {
    doc.fontSize(12).fillColor(c.black).text(cat.name);
    const skillsArr = skills
      .filter((s) => cat.id === s.category)
      .map((skill) => skill.name)
      .join(', ');
    doc.fillColor(c.black).fontSize(11).fillColor(c.gray).text(skillsArr, { width: 160 });
    doc.fontSize(1).text(' ', { paragraphGap: 5 });
  });
  doc.fontSize(1).text(' ', { paragraphGap: 10 });

  // languages
  doc.fontSize(16).fillColor(c.black).text('Languages', { paragraphGap: 5 });
  doc.fontSize(11).fillColor(c.gray).text(`Russian: `, { continued: true });
  doc.fillColor(c.black).text('Native');
  doc.fontSize(11).fillColor(c.gray).text(`Ukrainian: `, { continued: true });
  doc.fillColor(c.black).text('Native');
  doc.fontSize(11).fillColor(c.gray).text(`English: `, { continued: true });
  doc.fillColor(c.black).text('Intermediate');
  doc.fontSize(1).text(' ', { paragraphGap: 20 });

  // contacts
  doc.fontSize(16).fillColor(c.black).text('Contacts', { paragraphGap: 5 });

  about[0].contacts.forEach((contact) => {
    doc.fontSize(11).fillColor(c.gray).text(`${contact.meta}: `, { continued: true });
    doc.fillColor(c.black).text(contact.value);
  });
  doc.fontSize(1).text(' ', { paragraphGap: 10 });

  about[0].social.forEach((soc) => {
    doc.fontSize(12).fillColor(c.gray).text(soc.name, { link: soc.url, paragraphGap: 2 });
    doc.fontSize(10).fillColor(c.black).text(soc.url, { paragraphGap: 4 });
  });
  doc
    .fontSize(12)
    .fillColor(c.gray)
    .text('Portfolio', { link: 'https://max-im.github.io', paragraphGap: 2 });
  doc.fontSize(10).fillColor(c.black).text('https://max-im.github.io');

  // header
  doc
    .fontSize(18)
    .fillColor(c.black)
    .text(`${about[0].name} ${about[0].last_name}`, 220, 30, { paragraphGap: 2 });
  doc.fontSize(14).fillColor(c.black).text(`${about[0].title}`, { paragraphGap: 10 });

  // summary
  doc.fontSize(16).fillColor(c.black).text(`Summary`, { paragraphGap: 5 });
  doc.fontSize(12).fillColor(c.gray).text(`${about[0].summary}`, {
    paragraphGap: 15,
    indent: 15,
    width: c.width,
    align: 'justify',
  });

  // experience
  const mapMon = [
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
  doc.fontSize(16).fillColor(c.black).text(`Experience`, { paragraphGap: 5 });
  exp.forEach((item) => {
    const from = new Date(item.from_date);
    const fromY = from.getFullYear();
    const fromM = from.getMonth();
    const to = item.is_current ? new Date() : new Date(item.to_date);
    const toY = to.getFullYear();
    const toM = to.getMonth();
    const date = item.is_current
      ? `${mapMon[fromM]} ${fromY} - now`
      : `${mapMon[fromM]} ${fromY} - ${mapMon[toM]} ${toY}`;
    let period = '';
    const diff = Math.abs(to - from);
    let diffDays = diff / 1000 / 60 / 60 / 24;
    if (diffDays >= 365) {
      const diffY = Math.floor(diffDays / 365);
      period += `${diffY} year${diffY > 1 ? 's' : ''}`;
      diffDays -= diffY * 365;
    }
    if (diffDays >= 30) {
      if (period.length) period += ', ';
      const diffMon = Math.floor(diffDays / 30);
      period += `${diffMon} month${diffMon > 1 ? 's' : ''}`;
    }

    doc.image(`uploads/${item.icon}`, { fit: [18, 24], align: 'center', valign: 'bottom' });
    doc.fontSize(12).fillColor(c.black).text(item.company, { indent: 25, paragraphGap: 2 });
    doc
      .fillColor(c.black)
      .fontSize(14)
      .text(item.title, { indent: 25, width: c.width - 25 });
    doc
      .fillColor(c.gray)
      .fontSize(8)
      .text(`${date} ( ${period} )`, { indent: 25, paragraphGap: 5 });
    doc
      .fontSize(11)
      .fillColor(c.gray)
      .text(item.description, { width: c.width, align: 'justify', paragraphGap: 12 });
  });

  //  education
  doc.text('', { paragraphGap: 15 });
  doc.fontSize(16).fillColor(c.black).text('Education', { paragraphGap: 5 });
  edu.forEach((item) => {
    const { icon, title, description } = item;
    doc.image(`uploads/${icon}`, { fit: [18, 20], align: 'center', valign: 'bottom' });
    doc.fontSize(12).fillColor(c.black).text(title, { indent: 25 });
    doc
      .fillColor(c.gray)
      .fontSize(11)
      .text(description, { paragraphGap: 5, indent: 25, width: c.width - 25 });
  });

  console.log('add text to pdf');
  // return file
  doc.end();
  console.log('end');
  const file = fs.createReadStream(filePath);
  console.log('read file');
  file.pipe(res);
  console.log('return file');

  // remove pdf file
  fs.unlink(filePath, () => console.log('remove file'));
};
module.exports = computeCV;
