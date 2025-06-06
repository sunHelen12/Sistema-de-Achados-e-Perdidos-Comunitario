import Joi from "joi";

export const itemSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  category: Joi.string()
    .valid("Chaves", "Eletrônicos", "Documentos", "Roupas", "Outros")
    .required(),
  date: Joi.date().iso().required(),
  location: Joi.string().min(3).max(255).required(),
  contact: contact: Joi.array()
  .items(Joi.string().min(10).max(50)) // Aceita telefones ou e-mails
  .min(1) // Pelo menos um contato obrigatório
  .required(),
  color: Joi.string().min(3).max(50).required(),
  status: Joi.string().valid("Perdido", "Encontrado").required(),
});
