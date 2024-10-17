import { Toaster, toast } from "sonner";
export const Footer = () => {
  //funcion para copiar el email al portapapeles
  const handleCopyEmail = () => {
    const email = "agustinaayelensosa2@gmail.com"; // Reemplaza con tu dirección de correo
    navigator.clipboard.writeText(email).then(
      //writeText es una funcion del navegador, que recibe por parametros el texto a copiar. Devuelve una promesa
      () => {
        toast.success("¡Correo copiado al portapapeles!"); // Muestra un mensaje de éxito
      },
      (err) => {
        console.error("Error al copiar el correo: ", err); // Muestra un mensaje de error
      }
    );
  };
  return (
    <>
      <Toaster position="bottom-center" />;
      <footer className="bg-[#ffffff6e] rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Realizado por
            <a
              href="https://www.linkedin.com/in/agustina-ayelen-sosa/"
              className="hover:underline ml-1"
            >
              Agustina Sosa
            </a>
            . Desarrolladora Frontend.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/agustina-ayelen-sosa/"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <button
              onClick={handleCopyEmail}
              className="hover:underline me-4 md:me-6 text-gray-500 dark:text-gray-400"
            >
              Email
            </button>
            <li>
              <a
                href="https://github.com/agustina-sosa00"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://myportfolio-mu-ten.vercel.app/"
                className="hover:underline"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
