import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

// Import semua gambar dari assets
import img1 from "./assets/Photo1.jpg";
import img2 from "./assets/Photo2.jpg";
import img3 from "./assets/Photo3.jpg";
import img4 from "./assets/Photo4.jpg";
import img5 from "./assets/Photo5.jpg";
import img6 from "./assets/Photo6.jpg";
import img7 from "./assets/Photo7.jpg";

export default function App() {
  const [page, setPage] = useState("intro");
  const [btnPosition, setBtnPosition] = useState(null);

  const moveButton = () => {
    const randTop = Math.floor(Math.random() * 70) + 10;
    const randLeft = Math.floor(Math.random() * 70) + 10;
    setBtnPosition({ top: `${randTop}%`, left: `${randLeft}%` });

    setTimeout(() => {
      setBtnPosition(null);
    }, 3000);
  };

  const images = [img1, img2, img3, img4, img5, img6, img7];

  if (page === "intro") {
    return (
      <div className="intro-screen">
        <h1 className="intro-title">💕 I Love U 💕</h1>
        <p className="intro-sub">Kamu Juga Cinta Aku kan kan kan?</p>

        <div className="btn-container">
          {/* Tombol 1 */}
          <button onClick={() => setPage("ucapan")} className="btn">
            Iya
          </button>

          {/* Tombol 2 */}
          {btnPosition === null ? (
            <motion.button
              className="btn btn-nakal"
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.4 }}
            >
              Tidak
            </motion.button>
          ) : (
            <motion.button
              className="btn btn-nakal absolute"
              style={{ top: btnPosition.top, left: btnPosition.left }}
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.4 }}
            >
              🤭
            </motion.button>
          )}
        </div>
      </div>
    );
  }

  if (page === "ucapan") {
    return (
      <div className="ucapan">
        {/* Background foto geser */}
        <motion.div
          className="background-scroll"
          animate={{ x: ["0%", "-50%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <img key={i} src={img} alt={`bg-${i}`} className="bg-img" />
          ))}
        </motion.div>

        {/* Kartu ucapan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="card"
        >
          <h1 className="title">💕 Happy 1st Anniversary 💕</h1>
          <p className="message">
            Woyy, udah 1 tahun aja nih kita! 😆 Makasih udah tahan sama aku selama ini. 
            Semoga makin sayang, makin lengket, dan nggak pernah bosen yaa~ 🫶 I LOVE YOU 💕
          </p>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="heart"
          >
            💖
          </motion.div>
          <p className="footer">Dari aku, untukmu 🌹</p>

          <button onClick={() => setPage("intro")} className="btn-back">
            ⬅ Kembali
          </button>
        </motion.div>

        {/* Galeri foto tambahan */}
        <div className="gallery">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`gallery-${i}`}
              className="gallery-img"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </div>
      </div>
    );
  }
}
