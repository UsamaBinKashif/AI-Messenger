import admin from "firebase-admin";
import { getApps, initializeApp, refreshToken } from "firebase-admin/app";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
// const myRefreshToken = JSON.parse("./serviceAccountKey.json");



const adminDB = admin.firestore();
export { adminDB };
