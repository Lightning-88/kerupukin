import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import heroImage from "../assets/hero-image.webp";
import kerupukOriginal from "../assets/kerupuk-original.jpeg";
import kerupukPedas from "../assets/kerupuk-pedas.jpeg";
import kerupukKeju from "../assets/kerupuk-keju.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-container">
        <div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
          <h1>Kerupukin - Kerupuk Gurih, Renyah, dan Penuh Cerita!</h1>
          <p>
            Kerupuk tradisional dengan rasa modern. Cocok buat camilan atau
            teman makan!
          </p>
          <Button name="Lihat Produk" link="#produk-container" />
        </div>
        <div
          className="kerupuk-image"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={heroImage} alt="kerupuk-image"></img>
        </div>
      </section>

      <section className="about-section">
        <div
          className="section-text about-home"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>Tentang Kerupukin</h1>
          <p>
            Kami adalah UMKM yang berdedikasi untuk menghadirkan kerupuk gurih,
            renyah, dan berkualitas tinggi ke seluruh Indonesia.
          </p>
          <Button name="Baca Selengkapnya" link="/about" />
        </div>
      </section>

      <section className="section-container keunggulan">
        <div
          className="section-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
        >
          <h1>Kenapa Pilih Kerupukin? turu</h1>
        </div>
        <div className="section-list">
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            {/* <i class="fa-solid fa-star"></i> */}
            <h3>Gurih & Renyah</h3>
            <p>
              Tekstur renyah dan rasa gurih yang bikin nagih di setiap gigitan.
            </p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            {/* <i class="fa-solid fa-shield-halved"></i> */}
            <h3>Tanpa Pengawet</h3>
            <p>Dibuat dari bahan alami tanpa tambahan bahan kimia berbahaya.</p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            {/* <i class="fa-solid fa-tags"></i> */}
            <h3>Harga Terjangkau</h3>
            <p>
              Harga bersahabat di kantong, tetep menghadirkan kualitas tetap
              premium.
            </p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            {/* <i class="fa-solid fa-layer-group"></i> */}
            <h3>Banyak Varian</h3>
            <p>Tersedia berbagai rasa: original, balado, pedas, dan lainnya.</p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            {/* <i class="fa-solid fa-box-open"></i> */}
            <h3>Kemasan Praktis</h3>
            <p>
              Mudah dibawa ke mana saja, cocok untuk camilan saat bepergian.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container" id="produk-container">
        <div
          className="section-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
        >
          <h1>Varian Kerupukin</h1>
        </div>
        <div className="section-list">
          <div
            className="section-card varian"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <img src={kerupukOriginal} alt="kerupuk-original" />
            <h3>Kerupuk Original</h3>
            <p>Rasa klasik yang tetap bikin nagih.</p>
          </div>
          <div
            className="section-card varian"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <img src={kerupukPedas} alt="kerupuk-pedas" />
            <h3>Kerupuk Pedas</h3>
            <p>Rasa pedas gurih, cocok buat cemilan santai.</p>
          </div>
          <div
            className="section-card varian"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <img src={kerupukKeju} alt="kerupuk-keju" />
            <h3>Kerupuk Keju</h3>
            <p>Paduan kerupuk dan keju yang creamy dan renyah.</p>
          </div>
        </div>
        <div
          className="button-produk-list"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
        >
          <Button name="Lihat Semua Produk" link="/product" />
        </div>
      </section>

      <section className="home-reseller-section">
        <div
          className="section-text reseller-home"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>Gabung Jadi Reseller</h1>
          <p>
            Ingin jualan kerupuk dengan untung maksimal? Yuk gabung jadi
            reseller Kerupukin dan nikmati banyak keuntungan!
          </p>
          <Button name="Lihat Info Reseller" link="/reseller" />
        </div>
      </section>

      <section className="section-container testi">
        <div
          className="section-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
        >
          <h1>Apa Kata Mereka?</h1>
        </div>
        <div className="section-list">
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <p>
              "Rasanya tuh gak bohong, gurihnya nempel di lidah. Sekali coba,
              langsung langganan."
            </p>
            <p>- Ronald, Pelanggan</p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <p>
              "Biasanya saya khawatir soal bahan tambahan, tapi ini kerasa
              natural banget."
            </p>
            <p>- Donald, Pelanggan</p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <p>
              "Harga kaki lima, rasa bintang lima. Cocok banget buat camilan
              keluarga."
            </p>
            <p>- Adi, Pelanggan</p>
          </div>
          <div
            className="section-card"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
          >
            <p>
              "Anak-anak di rumah sampe rebutan! Favorit mereka yang pedas,
              katanya nagih."
            </p>
            <p>- Budi, Pelanggan</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
