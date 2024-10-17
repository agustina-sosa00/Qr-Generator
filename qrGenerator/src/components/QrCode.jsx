/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Loader } from "./Loader";

export const QrCode = ({ value }) => {
  const [loading, setLoading] = useState(true); //estado para el Loader
  const qrRef = useRef(null); // Referencia para el QR
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    // Configuramos el tiempo que el Loader estará activo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Mostramos el loader durante 2 segundos

    // Limpiamos el temporizador si el componente es desmontado
    return () => clearTimeout(timer);
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const imageUrl = canvas.toDataURL("image/png"); // Convertimos el canvas a una imagen PNG
      setDownloadUrl(imageUrl);
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "qr-code.png"; // Nombre del archivo a descargar
      link.click(); // Simulamos el click en el enlace
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div ref={qrRef} className="flex flex-col justify-center items-center">
          <QRCodeCanvas
            value={value}
            size={280} // Tamaño del QR
            // bgColor={"#e4e3e3"}
            level={"L"}
            marginSize={2}
            // imageSettings={{ src: logo, excavate: true, width: 60, height: 60 }} // Para agregar una imagen en el centro del QR
          />
          <button
            onClick={handleDownload}
            className="mt-4 px-3 py-1 lg:px-5 lg:py-3 text-base lg:text-lg bg-blue-500 hover:bg-blue-700 hover:scale-105 duration-500 text-white rounded"
          >
            Descargar QR
          </button>
        </div>
      )}
    </>
  );
};
