import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">{site.copyright}</div>
    </footer>
  );
}
