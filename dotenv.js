import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export environment variables if needed
const apiKey = process.env.VUE_APP_API_KEY;