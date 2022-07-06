import cron from 'node-cron';

const getGithubData = () => {
  cron.schedule('* * * * *', () => {
    // get data from github

    // compute and save skills

    // compute and save projects

    console.log('running a task every minute');
  });
}

export {getGithubData}