import logo from './assets/Logo.png'
import products from './data/products'
import './App.css'

function App() {
  const mapUrl = 'https://maps.app.goo.gl/k5uFjs6aFv2krGbTA'

  const services = [
    {
      title: 'Eceran Harian',
      text: 'Melayani kebutuhan harian secara eceran dengan pengambilan langsung di warung.',
    },
    {
      title: 'Jarak Dekat',
      text: 'Lokasi dekat, memudahkan warga membawa galon menggunakan gerobak',
    },
    {
      title: 'Mitra ShopeePay',
      text: 'Melayani top up ShopeePay dengan pembayaran tunai di warung.',
    },
    {
      title: 'Sembako & Dapur',
      text: 'Tersedia sembako, bumbu dapur, dan kebutuhan rumah tangga tertentu.',
    },
    {
      title: 'Snack & Dingin',
      text: 'Menyediakan makanan ringan dan minuman dingin dalam jumlah terbatas.',
    },
    {
      title: 'Stok Terkontrol',
      text: 'Stok galon dan gas diperiksa secara rutin untuk memastikan ketersediaan.',
    },
  ]

  const steps = [
    {
      title: 'Datang',
      text: 'Datang ke warung di Jl kendung gang X.',
    },
    {
      title: 'Pilih',
      text: 'Pilih galon atau gas sesuai kebutuhan.',
    },
    {
      title: 'Bayar',
      text: 'Bayar tunai di tempat, cepat dan mudah.',
    },
  ]

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <div className="brand-mark">
            <img src={logo} alt="Warung Pak Anang logo" />
          </div>
          <div>
            <p className="brand-name">Warung Pak Anang</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#produk">Produk</a>
          <a href="#layanan">Layanan</a>
          <a href="#cara">Cara Ambil</a>
          <a href="#lokasi">Lokasi</a>
        </nav>
        <div className="nav-actions">
          <a
            className="btn btn--ghost"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Maps
          </a>
          <a className="btn btn--primary" href="#produk">
            Cek Stok
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content reveal">
            <h1 className="hero-title">
              Galon dan gas selalu tersedia untuk warga kendung gang X
            </h1>
            <p className="hero-sub">
              Ambil langsung di warung, mudah dan praktis untuk kebutuhan
              harian.
            </p>
            <p className="hero-copy">
              Warung Pak Anang melayani kebutuhan utama warga kendung gang X.
              Ambil langsung, mudah, dan cepat tanpa ribet.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn--primary"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Datang ke Warung
              </a>
              <a
                className="btn btn--ghost"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Lihat Lokasi
              </a>
              <a
                className="btn btn--ghost"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cek Jam Buka
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">Melayani pembelian eceran</span>
                <span className="stat-label">Transaksi langsung di warung</span>
              </div>
              <div className="stat">
                <span className="stat-value">07:00-21:00</span>
                <span className="stat-label">Jam operasional</span>
              </div>
              <div className="stat">
                <span className="stat-value">Jl kendung gang X</span>
                <span className="stat-label">Area Jl kendung gang X aja</span>
              </div>
            </div>
          </div>

          <div className="hero-card reveal" style={{ '--delay': '0.15s' }}>
            <div className="hero-card-header">
              <p className="card-title">Status Hari Ini</p>
              <div className="status-pills">
                <span className="status-pill">Stok siap diambil</span>
                <span className="status-pill status-pill--alt">
                  Gerobak tersedia
                </span>
              </div>
            </div>
            <div className="hero-card-body">
              <div className="info-block">
                <p className="info-title">Alamat Toko</p>
                <p className="info-text">
                  Jl kendung gang X, berada di lingkungan pemukiman warga.
                </p>
              </div>
              <div className="info-block">
                <p className="info-title">Eceran</p>
                <p className="info-text">
                  Melayani pembelian eceran, transaksi langsung di warung.
                </p>
              </div>
            </div>
            <div className="hero-card-footer">
              <div className="availability">
                <span className="availability-dot" />
                <span>Stok diperbarui setiap 30 menit</span>
              </div>
              <a className="btn btn--primary" href="#produk">
                Lihat Produk
              </a>
            </div>
          </div>
        </section>

        <section className="promo-strip reveal" style={{ '--delay': '0.25s' }}>
          <p>Promo minggu ini: harga galon lebih hemat 2%.</p>
          <a
            className="btn btn--light"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Tanya Promo
          </a>
        </section>

        <section className="products" id="produk">
          <div className="section-head">
            <div>
              <p className="eyebrow">Produk Utama</p>
              <h2 className="section-title">Status stok galon dan gas.</h2>
            </div>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`product-card product-card--${product.state} reveal`}
                style={{ '--delay': `${0.15 + index * 0.1}s` }}
              >
                <div className="product-top">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                  </div>
                  <span className={`status-chip status-chip--${product.state}`}>
                    {product.status}
                  </span>
                </div>
                <div className="stock">
                  <div className="stock-bar">
                    <span style={{ width: `${product.level}%` }} />
                  </div>
                  <div className="stock-meta">
                    <span>{product.stock}</span>
                    <span>{product.update}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <a
                    className="btn btn--primary"
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Datang ke Warung
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cek Jam Buka
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="services" id="layanan">
          <div className="section-head">
            <div>
              <p className="eyebrow">Layanan</p>
              <h2 className="section-title">
                Kenapa warga kendung gang X pilih Warung Pak Anang.
              </h2>
            </div>
          </div>
          <div className="feature-grid">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="feature-card reveal"
                style={{ '--delay': `${0.15 + index * 0.1}s` }}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="steps" id="cara">
          <div className="section-head">
            <div>
              <p className="eyebrow">Cara Ambil</p>
              <h2 className="section-title">Tiga langkah, ambil langsung.</h2>
            </div>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="step-card reveal"
                style={{ '--delay': `${0.15 + index * 0.1}s` }}
              >
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" id="lokasi">
          <div className="cta-content">
            <div>
              <p className="eyebrow">Lokasi</p>
              <h2 className="section-title">Siap diambil hari ini.</h2>
              <p className="section-note">
                Warung Pak Anang melayani eceran untuk warga kendung gang X.
                Ambil langsung tanpa ribet.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn--primary"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Lihat Lokasi
              </a>
              <a
                className="btn btn--ghost"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cek Jam Buka
              </a>
            </div>
          </div>
          <div className="cta-card">
            <div>
              <p className="cta-title">Jam Operasional</p>
              <p>Senin - Minggu: 07:00 - 21:00</p>
            </div>
            <div>
              <p className="cta-title">Lokasi</p>
              <p>Jl kendung gang X.</p>
            </div>
            <div>
              <p className="cta-title">ShopeePay</p>
              <p>Mitra ShopeePay untuk layanan top up dengan pembayaran tunai.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="brand-name">Warung Pak Anang</p>
          <p className="footer-note">
            Galon dan gas eceran untuk warga kendung gang X.
          </p>
        </div>
        <div className="footer-links">
          <a href="#produk">Produk</a>
          <a href="#layanan">Layanan</a>
          <a href="#lokasi">Lokasi</a>
        </div>
      </footer>
    </div>
  )
}

export default App
