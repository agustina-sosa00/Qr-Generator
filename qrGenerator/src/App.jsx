import { QrCode } from "./components/QrCode";
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZr0CNMVAhar1Gqa6TBQgUBsvJLgX1gCw",
  authDomain: "qr-generator-bedce.firebaseapp.com",
  projectId: "qr-generator-bedce",
  storageBucket: "qr-generator-bedce.appspot.com",
  messagingSenderId: "814647355585",
  appId: "1:814647355585:web:b8436a4290fc7c1ac58c40",
  measurementId: "G-F7Y56VKW5P",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const App = () => {
  const [file, setFile] = useState(null);
  const [qrUrl, setQrUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `files/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setQrUrl(downloadURL); // Genera la URL de descarga
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-start p-5">
      QR Generator
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Subir y generar QR</button>

        {qrUrl && (
          <div>
            <QrCode value={qrUrl} size={256} />
            <p>
              Descargar archivo:{" "}
              <a href={qrUrl} target="_blank" rel="noreferrer">
                Aquí
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
