import { config } from 'dotenv';
config();

import { connectDb } from './config/db';
import { startServer } from './start';

(async () => {
    try {
        await connectDb()
        await startServer()
    } catch (error) {
        process.exit(1)
    }
})();
