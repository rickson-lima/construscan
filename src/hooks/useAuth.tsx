import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FIRESTORE_COLLECTIONS } from "@/constants/firestore-collections.constants";
import { SignUpSchema } from "@/schemas/authentication/sign-up.schema";
import { auth, db } from "@/config/firebase.config";
import { SigInSchema } from "@/schemas/authentication/sign-in.schema";
import { UserFirestoreSchema } from "@/schemas/authentication/user-firestore.schema";
import { useToast } from "./useToast";
import { FORMS } from "@/constants/forms.constants";

export function useAuthentication() {
  const collectionRef = collection(db, FIRESTORE_COLLECTIONS.USERS);
  const { showToast } = useToast();

  async function signUp(newUser: SignUpSchema): Promise<FormError | void> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );

      await auth.updateCurrentUser(
        Object.assign(user, { displayName: newUser.name })
      );

      const data: UserFirestoreSchema = {
        uid: user.uid,
        name: newUser.name,
        email: newUser.email,
        createdAt: serverTimestamp(),
      };

      addDoc(collectionRef, data).catch((e) => console.error(e));

      showToast({
        message: FORMS.SUCCESS.USER_CREATED,
      });
    } catch (error: any) {
      showToast({
        action: "error",
        message: FORMS.ERRORS.UNABLE_TO_CREATE_USER,
      });

      if (error?.code === "auth/email-already-in-use")
        return {
          field: FORMS.FIELDS.EMAIL,
          message: FORMS.ERRORS.EMAIL_ALREADY_IN_USE,
        };
    }
  }

  async function signIn(data: SigInSchema): Promise<FormError[] | void> {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      showToast({
        message: FORMS.ERRORS.UNABLE_TO_SIGN_IN,
        action: "error",
      });

      console.error(error);

      return [
        {
          field: FORMS.FIELDS.EMAIL,
          message: FORMS.ERRORS.INVALID_CREDENTIALS,
        },
        {
          field: FORMS.FIELDS.PASSWORD,
          message: FORMS.ERRORS.INVALID_CREDENTIALS,
        },
      ];
    }
  }

  async function logout() {
    return await signOut(auth);
  }

  return {
    signUp,
    logout,
    signIn,
  };
}
