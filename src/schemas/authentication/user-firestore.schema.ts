import { FieldValue } from "firebase/firestore";

export type UserFirestoreSchema = {
  uid: string;
  name: string;
  email: string;
  createdAt: FieldValue;
};
