import * as z from "zod";

export const ContactUsSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("O e-mail deve ser válido"),
  message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres"),
  contact_reason: z.string().min(1, "Selecione pelo menos uma opção"),
});

export type ContactUsZodType = z.infer<typeof ContactUsSchema>;
