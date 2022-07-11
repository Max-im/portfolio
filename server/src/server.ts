import { app } from './app';

const port = process.env.PORT || 5001;
const server = app.listen(port, () => console.log(`🚀 Server ready at: http://localhost:${port} ⭐️`));

export { server }