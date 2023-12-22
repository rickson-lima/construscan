import { FormsConstants } from "@/constants/forms.constants";
import { z } from "zod";

export const signUpValidation = z
  .object({
    id: z.string({ required_error: FormsConstants.REQUIRED_FIELD }).uuid(),
    name: z.string({ required_error: FormsConstants.REQUIRED_FIELD }),
    email: z.string({ required_error: FormsConstants.REQUIRED_FIELD }),
    password: z
      .string({ required_error: FormsConstants.REQUIRED_FIELD })
      .min(6, "A senha deve ter pelo menos 6 caracteres."),
    passwordConfirmation: z.string({
      required_error: FormsConstants.REQUIRED_FIELD,
    }),
  })
  .superRefine((args, ctx) => {
    if (args.passwordConfirmation !== args.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "As senhas devem ser iguais",
        path: ["passwordConfirmation"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpValidation>;
