import { db } from '@/config/firebase.config';
import { FIRESTORE_COLLECTIONS } from '@/constants/firestore-collections.constants';
import { serverTimestamp } from "firebase/firestore";



export function useAuthentication() {

  const collection = firestore.collection(FIRESTORE_COLLECTIONS.USERS)

  function createUser(user: IUserSchema) {
    user.createdAt = serverTimestamp();

    auth().createUserWithEmailAndPassword(user.userEmail, user.passwd)
      .then((userCredential) => {
        userCredential.user.updateProfile({ displayName: user.userName })
          .then(() => console.log("User display name was set"))
          .catch(e => console.error(e));
        console.log("User has been created. -- UID: " + userCredential.user.uid);

        const userData: IUserFirebaseCollectionSchema = {
          createdAt: user.createdAt,
          id: user.id,
          userEmail: user.userEmail,
          userName: user.userName,
          userRegister: user.userRegister
        };

        collection
          .doc(userCredential.user.uid)
          .set(userData)
          .then(() => "User has been created at firestore.")
      })
      .catch((error) => {
        console.log(`Error code: ${error.code}`);
        console.log(`Error message: ${error.message}`);
        console.log("<============================================>");
      });
  }

  function authenticateUser(
    userAuth: ILoginSchema,
  ): Promise<FirebaseAuthTypes.UserCredential> {
    return auth().signInWithEmailAndPassword(
      userAuth.userEmail,
      userAuth.passwd,
    );
  }

  function signOut() {
    auth().signOut()
      .then(() => console.log("User has been logged off the app"))
      .catch(e => console.error(e));
  }

  async function updateUser(data: IEditUserSchema) {
    const currentUser = auth().currentUser!
    const docReference = collection.doc(currentUser.uid);

    await currentUser.updateEmail(data.userEmail);
    await currentUser.updateProfile({ displayName: data.userName });
    await docReference.update({ userName: data.userName, userEmail: data.userEmail });
  }

  async function updateUserPasswd(data: IResetPasswordSchema) {
    const user = auth().currentUser!;
    await user.updatePassword(data.passwd);
  }

  async function validateCurrentPassword(passwd: string) {
    const user = auth().currentUser!;
    const credential = auth.EmailAuthProvider.credential(
      user.email!, passwd
    );
    await user.reauthenticateWithCredential(credential);
  }

  return {
    createUser,
    authenticateUser,
    signOut,
    updateUser,
    updateUserPasswd,
    validateCurrentPassword
  }
}
