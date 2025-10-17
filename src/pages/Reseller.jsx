import { FaTags, FaHandshake, FaChartLine } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Reseller = () => {
  return (
    <>
      <Navbar />
      <section className="reseller-container">
        <div className="reseller-title">
          <h1>Yuk Jadi Reseller Kerupukin!</h1>
          <p>
            Bergabunglah bersama kami dan nikmati peluang usaha dengan
            keuntungan menarik.
          </p>
        </div>
        <div className="reseller-benefit">
          <div className="benefit-card">
            <FaTags />
            <h1>Harga Khusus</h1>
            <p>Dapatkan harga reseller spesial untuk keuntungan maksimal.</p>
          </div>
          <div className="benefit-card">
            <FaHandshake />
            <h1>Dibimbing Langsung</h1>
            <p>Kami bantu dari awal sampai jualan lancar.</p>
          </div>
          <div className="benefit-card">
            <FaChartLine />
            <h1>Potensi Cuan Besar</h1>
            <p>Produk kami laris dan disukai semua kalangan!</p>
          </div>
        </div>

        <div className="reseller-form">
          <h1>Daftar Sekarang</h1>
          <form action="" method="POST">
            <input
              type="text"
              name="nama"
              placeholder="Nama lengkap"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email aktif"
              required
            />
            <input
              type="number"
              name="no-telp"
              placeholder="No. Telp"
              required
            />
            <textarea
              name="alasan"
              rows="4"
              placeholder="Kenapa ingin jadi reseller?"
              required
            ></textarea>
            <button type="submit" className="btn">
              Kirim
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reseller;
