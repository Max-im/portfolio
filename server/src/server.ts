import { app } from './app';

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`🚀 Server ready at: http://localhost:5000 ⭐️`));

export {server}