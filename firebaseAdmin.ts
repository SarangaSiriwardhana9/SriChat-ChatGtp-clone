import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const serciceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serciceAccount),

  });
}

const adminDb = admin.firestore();
export {adminDb};