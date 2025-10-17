import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import kerupukUdang from "../assets/kerupuk-udang.jpeg";
import kerupukBawang from "../assets/kerupuk-bawang.jpeg";
import kerupukIkan from "../assets/kerupuk-ikan.jpeg";
import kerupukKulitSapi from "../assets/kerupuk-kulit-sapi.jpeg";
import kerupukMelarat from "../assets/kerupuk-melarat.jpg";
import kerupukPedas from "../assets/kerupuk-pedas-level-5.jpeg";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="section-container produk">
        <div className="section-title">
          <h1>Daftar Produk</h1>
        </div>
        <div className="section-list">
          <div className="section-card">
            <img src={kerupukUdang} alt="kerupuk-udang" />
            <h3>Kerupuk Udang Premium</h3>
            <p>Rasa gurih khas laut, kriuk maksimal.</p>
            <p className="harga">Rp12.000</p>
          </div>
          <div className="section-card">
            <img src={kerupukBawang} alt="kerupuk-bawang" />
            <h3>Kerupuk Bawang Renyah</h3>
            <p>Aroma bawangnya nendang banget!</p>
            <p className="harga">Rp10.000</p>
          </div>
          <div className="section-card">
            <img src={kerupukIkan} alt="kerupuk-ikan" />
            <h3>Kerupuk Ikan Gurih</h3>
            <p>Dibuat dari ikan segar, cocok untuk cemilan.</p>
            <p className="harga">Rp11.000</p>
          </div>
          <div className="section-card">
            <img src={kerupukKulitSapi} alt="kerupuk-kulit" />
            <h3>Kerupuk Kulit Sapi</h3>
            <p>Gurih, garing, dan bikin nagih.</p>
            <p className="harga">Rp15.000</p>
          </div>
          <div className="section-card">
            <img src={kerupukMelarat} alt="kerupuk-melarat" />
            <h3>Kerupuk Melarat</h3>
            <p>Khas Cirebon, digoreng tanpa minyak!</p>
            <p className="harga">Rp8.000</p>
          </div>
          <div className="section-card">
            <img src={kerupukPedas} alt="kerupuk-pedas" />
            <h3>Kerupuk Pedas Level 5</h3>
            <p>Pecinta pedas wajib coba!</p>
            <p className="harga">Rp13.000</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
