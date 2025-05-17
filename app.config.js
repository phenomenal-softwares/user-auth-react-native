import 'dotenv/config';

export default {
  expo: {
    name: "User Auth",
    slug: "user-auth",
    version: "1.0.0",
    extra: {
        "eas": {
        "projectId": "a8f7d1c8-4e0a-4f94-b291-f94704d13099"
      },
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
};
