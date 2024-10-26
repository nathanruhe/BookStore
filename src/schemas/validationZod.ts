import { z } from "zod";

const bookSchema = z.object({
    title: z.string().min(1, "Título requerido").max(20, "Máximo 20 caracteres"),
    author: z.string().min(1, "Autor requerido").max(15, "Máximo 15 caracteres"),
    type: z.string().min(1, "Género requerido").max(10, "Máximo 10 caracteres"),
    photo: z.string().min(1, "Foto requerida").max(50, "Máximo 50 caracteres"),
    price: z.string().min(1, "Precio requerido").max(99, "Precio máximo 99"),
})

type FormValues = z.infer<typeof bookSchema>;

// aquí podemos ir rellenando mas schemas para ir utilizándolos en cada formulario

export default bookSchema;
export type { FormValues };