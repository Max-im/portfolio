import Validator from 'validator';
import isEmpty from './isEmpty';

const validateQuality = async (quality) => {
  const qualityArr = quality.split(",");
  for (let i = 0; i < qualityArr.length; i++) {
    if ( !(
        Validator.equals(qualityArr[i], 'best') || Validator.equals(qualityArr[i], 'medium') || Validator.equals(qualityArr[i], 'simple')
    )) {
        return false;
    }
  }
  return true;
}

export const validateGetProjectsNumber = async (req, res, next) => {
  const quality = !isEmpty(req.query.quality) ? req.query.quality : '';
  
  if(quality.length && !validateQuality(quality)) {
    return res.status(400).json('The projects number request has invalid amount query');
  }

  return next();
};

export const validateGetProjects = (req, res, next) => {
  const defaultAmount = '12';
  const defaultPage = '1';
  const defaultSort = 'quality';
  const page = !isEmpty(req.params.page) ? req.params.page : defaultPage;
  const tileAmount = !isEmpty(req.query.amount) ? req.query.amount : defaultAmount;
  const sort = !isEmpty(req.query.sort) ? req.query.sort : defaultSort
  const quality = !isEmpty(req.query.quality) ? req.query.quality : '';

  // page
  if (!Validator.isNumeric(page)) {
    return res.status(400).json('The projects request has invalid page param');
  }

  // tileAmount
  if (!Validator.isNumeric(tileAmount)) {
    return res.status(400).json('The projects request has invalid amount query');
  }

  // sort
  if (
    !( Validator.equals(sort, 'quality') 
      || Validator.equals(sort, 'date') 
      || Validator.equals(sort, 'title')
    )
  ) {
    return res.status(400).json('The projects request has invalid sort query');
  }

  // quality
  if(quality.length && !validateQuality(quality)) {
    return res.status(400).json('The projects request has invalid amount query');
  }

  return next();
};


export const validateGetSingleProject = async (req, res, next) => {
  const id = !isEmpty(req.params.id) ? req.params.id : null;
  if (!id) {
    return res.status(400).json('The project request has invalid id param');
  }

  // id
  if (!Validator.isInt(id, { min: 1 })) {
    return res.status(400).json('The projects request has invalid id param');
  }

  return next();
};


export const validateAddComment = async (req, res, next) => {
  const projectId = !isEmpty(req.body.projectId) ? req.body.projectId : null;
  const userId = !isEmpty(req.body.userId) ? req.body.userId : null;
  const text = !isEmpty(req.body.text) ? req.body.text : null;

  if (!(userId && projectId && text)) return res.status(420).json("error, try again later");

  if (!Validator.isLength(text, { min: 1, max: 1000 })) {
    return res.status(420).json("filename field must be from 1 to 1000 characters");
  }

  if (!Validator.isNumeric(projectId)) {
    return res.status(420).json("error, try again later");
  }

  if (!Validator.isNumeric(userId)) {
    return res.status(420).json("error, try again later");
  }

  req.body.text = Validator.escape(text);
  return next();
};


