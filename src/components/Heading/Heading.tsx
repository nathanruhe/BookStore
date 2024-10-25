
import { ReactNode } from "react";
// libreria para evitar la repetición y/o colapso del codigo css de Tailwind
import { twMerge } from "tailwind-merge";

// props para recibir los datos de los titulos según nos los pasen
type HeadingProps = {
    children?: ReactNode;
    title?: string;
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
}

function Heading(props: HeadingProps) {

    // desestructuramos las props para manejarlos
    const { level = "h1", children, title, className } = props;

    /* truco para poder poner la etiqueta level como etiqueta HTML
        - Tag = level, que tendrá el correspondiente "h?" que le pasen
    */
    const Tag = level;

    // objeto que funciona como un "if", se añadirá el css correspondiente a su etiqueta "h?" recibida de level
    const headingClasses = {
        h1: "text-3xl",
        h2: "text-2xl",
        h3: "text-xl",
        h4: "text-lg",
        h5: "text-lg underline",
        h6: "text-lg underline italic"
    }

    /* twMerge: se ponen en orden prioritario, "derecha ganará a la izquierda"
        1. los css que tendran todos los titulos por igual
        2. los css predefinidos arriba que tendran segun se les pase el "h?" del level
        3. los que se le pasen como className directamente en la etiqueta del titulo
    */
    const finalClasses = twMerge("font-bold text-red-400", headingClasses[level], className)

    return (
        <>
            {/* explicación:
                1. Tag = level, ej. si ponen <Heading level="h1">Login</Heading> entonces Tag = "h1"
                2. si level="h1" entonces ${headingClasses[level]} = objeto.h1 y pondra la correspondiente clase 
                3. font-bold text-red-400 son los css que tendrán todos por defecto si es que no los cambian directamente en el titulo
                4. ${className} para que le pasen otros css directamente en el titulo, estos podrían cambiar los predefinidos
                5. {title || children} es el nombre que recibe si le ponen title, sino lo que se escriba normal "que es el children"
            */}
            {/* <Tag className={`${headingClasses[level]} font-bold text-red-400 ${className}`}>{title || children}</Tag> */}

            {/* twMerge: forma mas abreviada y poniendo el css fuera usando tsMerge para evitar la repetición y/o colapso  */}
            <Tag className={finalClasses}>{title || children}</Tag>
        </>
    );
}

export default Heading;