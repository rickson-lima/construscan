import { FORMS } from "@/constants/forms.constants";
import { z } from "zod";

const { ERRORS, FIELDS } = FORMS;

export const signUpValidation = z
  .object({
    [FIELDS.NAME]: z
      .string({ required_error: ERRORS.REQUIRED_FIELD })
      .min(1, FORMS.ERRORS.REQUIRED_FIELD),
    [FIELDS.EMAIL]: z
      .string({ required_error: ERRORS.REQUIRED_FIELD })
      .min(1, FORMS.ERRORS.REQUIRED_FIELD)
      .email({ message: ERRORS.INVALID_EMAIL }),
    [FIELDS.PASSWORD]: z
      .string({ required_error: ERRORS.REQUIRED_FIELD })
      .min(6, ERRORS.MIN_PASSWORD_LEN),
    [FIELDS.PASSWORD_CONFIRMATION]: z
      .string({
        required_error: ERRORS.REQUIRED_FIELD,
      })
      .min(1, FORMS.ERRORS.REQUIRED_FIELD),
  })
  .superRefine((args, ctx) => {
    if (args.passwordConfirmation !== args.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERRORS.DIFFERENT_PASSWORDS,
        path: [FIELDS.PASSWORD_CONFIRMATION],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpValidation>;
