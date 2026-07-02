import { FaTiktok, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact | Ramy Ramzy"
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container about-grid">
          <div>
            <h1 className="section-title">Get in Touch</h1>
            <p className="about-copy" lang="en">
              For collaboration on a GIS project or for reviewing maps and spatial data, feel free to reach out directly via email or through the following links.
            </p>
          </div>
          <div className="hero-panel">
            <div className="badge-grid">
              <a
                className="icon-btn icon-btn--telegram"
                href={site.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
              >
                <FaTelegramPlane size={22} color="#fff" />
              </a>
              <a className="icon-btn icon-btn--linkedin" href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <FaLinkedin size={22} color="#fff" />
              </a>
              <a className="icon-btn icon-btn--github" href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <FaGithub size={22} color="#fff" />
              </a>
              <a className="icon-btn icon-btn--whatsapp" href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <FaWhatsapp size={22} color="#fff" />
              </a>
              <a className="icon-btn icon-btn--facebook" href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <FaFacebook size={22} color="#fff" />
              </a>
              <a className="icon-btn icon-btn--instagram" href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <FaInstagram size={22} color="#fff" />
              </a>
              <a className="icon-btn icon-btn--tiktok" href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok">
                <FaTiktok size={22} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
