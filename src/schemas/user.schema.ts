import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { z } from "zod";

const required_error = "Campo obrigatório";

export const userSchemaValidation = z
  .object({
    id: z.string({ required_error }).uuid(),
    userName: z.string({ required_error }),
    userEmail: z.string({ required_error }),
    userRegister: z.string({ required_error }),
    passwd: z
      .string({ required_error })
      .min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPasswd: z.string({ required_error }),
  })
  .superRefine((args, ctx) => {
    if (args.confirmPasswd !== args.passwd) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "As senhas devem ser iguais",
        path: ["confirmPasswd"],
      });
    }
  });

export type IUserSchema = z.infer<typeof userSchemaValidation> & {
  createdAt:
    | FirebaseFirestoreTypes.Timestamp
    | FirebaseFirestoreTypes.FieldValue;
};
