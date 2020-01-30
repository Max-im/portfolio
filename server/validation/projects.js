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


