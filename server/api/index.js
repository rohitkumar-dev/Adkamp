// api/index.js

import serverless from 'serverless-http';
import app from '../src/server.js';  
import connectToDatabase from '../src/db/dbConfig.js';

async function prepare() {
  await connectToDatabase();
  // any warm-up tasks here
}

await prepare(); // top-level await is allowed in Node 18+ used by Vercel

export default serverless(app);
