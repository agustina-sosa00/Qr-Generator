import { useState } from "react";
import { QrCode } from "./components/QrCode";
import { IoIosQrScanner } from "react-icons/io";
import { IoQrCode } from "react-icons/io5";
import "./index.css";

export const App = () => {
  const [value, setValue] = useState("");
  const [openQR, setOpenQR] = useState(false);

  const handleGenerateQr = () => {
    setOpenQR(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center p-10 gap-7 bg ">
      <div className="w-full lg:w-1/2 flex justify-center gap-3 lg:gap-7">
        <h1 className="text-xl lg:text-6xl font-title font-bold">
          QR Generator{" "}
        </h1>
        <div className="relative h-full">
          <div className="absolute top-0 w-full h-1 bg-red-600 box "></div>
          <IoIosQrScanner className="text-2xl lg:text-6xl" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <h2 className="text-sm lg:text-base text-center">
          Con esta herramienta, puedes generar un código QR para cualquier
          enlace web, como tu{" "}
          <span className="text-red-600 font-semibold">portfolio</span>.
          Simplemente ingresa la URL y obtén un código QR que permite a otros
          acceder fácilmente a tu contenido. ¡Es una forma rápida y práctica de
          compartir enlaces!
        </h2>
      </div>

      <div className="w-full lg:w-1/2 gap-6 flex flex-col justify-center items-center ">
        <div className="form__group field w-44 lg:w-72">
          <input
            type="url"
            name="url"
            className="form__field w-full text-neutral-800"
            placeholder="Ingresa la URL"
            required=""
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="url" className="form__label">
            Ingresa la URL
          </label>
        </div>
        <button
          onClick={handleGenerateQr}
          className="w-36 lg:w-48 h-10 lg:h-12 flex justify-center items-center bg-green-500 text-white rounded text-base lg:text-xl hover:bg-green-700 hover:scale-105 duration-500"
        >
          Generar QR
          <IoQrCode className="text-base lg:text-2xl text-white font-extrabold ml-2" />
        </button>
      </div>
      {/* )} */}
      {openQR && <QrCode value={value} />}
    </div>
  );
};
export default App;
