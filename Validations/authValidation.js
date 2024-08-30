import vine from "@vinejs/vine";
export const registerationSchema = vine.object({
  name: vine.string().minLength(2).maxLength(18),
  email: vine.string().email(),
  password: vine.string().minLength(8).maxLength(18),
});
