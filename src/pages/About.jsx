import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-container">
        <div className="section-text about">
          <h1>Tentang Kerupukin</h1>
          <p>
            Kami adalah UMKM yang berdedikasi menghadirkan kerupuk lokal
            berkualitas tinggi ke seluruh Indonesia. Mulai dari kerupuk udang,
            ikan, hingga kerupuk khas Jawa semua dibuat dengan bahan alami dan
            proses yang higienis.
          </p>
        </div>
        <div className="visi-misi-container">
          <div className="visi">
            <h1>Visi</h1>
            <p>
              Menjadi merek kerupuk nomor satu di Indonesia yang dikenal akan
              cita rasa autentik dan kualitas terbaik.
            </p>
          </div>

          <div className="misi">
            <h1>Misi</h1>
            <ul>
              <li>Menghadirkan kerupuk yang sehat, renyah, dan lezat.</li>
              <li>Mendukung UMKM lokal dan pemberdayaan petani bahan baku.</li>
              <li>Terus berinovasi dalam rasa dan kemasan produk.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
