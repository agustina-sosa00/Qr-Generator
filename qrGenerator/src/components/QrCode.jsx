import { QRCodeCanvas } from "qrcode.react";
export const QrCode = ({ value, size }) => {
  return (
    <QRCodeCanvas
      value={value}
      size={size}
      //imageSettings={{ src: img, excavate: true }} sirve para poner una imagen en el centro del qr como por ejemplo un icono de whastapp
    ></QRCodeCanvas>
  );
};
