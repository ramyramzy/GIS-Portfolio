import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <span className="section-kicker">404</span>
          <h1 className="section-title">الصفحة غير موجودة</h1>
          <Link className="btn btn-primary" href="/">
            العودة للرئيسية
          </Link>
        </div>
      </section>
    </main>
  );
}
