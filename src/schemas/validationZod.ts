import { z } from "zod";

const bookSchema = z.object({
    titulo: z.string().min(1, "Título requerido").max(20, "Máximo 20 caracteres"),
    autor: z.string().min(1, "Autor requerido").max(15, "Máximo 15 caracteres"),
    genero: z.string().min(1, "Género requerido").max(10, "Máximo 10 caracteres"),
    foto: z.string().min(1, "Foto requerida").max(50, "Máximo 50 caracteres"),
    precio: z.string().min(1, "Precio requerido").max(99, "Precio máximo 99"),
})

type FormValues = z.infer<typeof bookSchema>;

// aquí podemos ir rellenando mas schemas para ir utilizándolos en cada formulario

export default bookSchema;
export type { FormValues };