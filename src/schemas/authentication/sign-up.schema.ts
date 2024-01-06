import { FORMS } from "@/constants/forms.constants";
import { z } from "zod";

export const signUpValidation = z
  .object({
    name: z.string({ required_error: FORMS.ERRORS.REQUIRED_FIELD }),
    email: z
      .string({ required_error: FORMS.ERRORS.REQUIRED_FIELD })
      .email({ message: "Digite um e-mail válido" }),
    password: z
      .string({ required_error: FORMS.ERRORS.REQUIRED_FIELD })
      .min(6, "A senha deve ter pelo menos 6 caracteres."),
    passwordConfirmation: z.string({
      required_error: FORMS.ERRORS.REQUIRED_FIELD,
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
