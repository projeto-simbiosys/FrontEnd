import InstagramIcon from "../../icons/Instagram";
import LinkedinIcon from "../../icons/Linkedin";
import WhatsappIcon from "../../icons/Whatsapp";
import logo from "/logo-horizontal.png";

export default function Footer({ children }) {
  return (
    <footer className="flex flex-col items-center gap-9 w-screen py-6 md:py-9 lg:py-14 px-4 md:px-12 lg:px-24 bg-white border-t border-divider/40">
      <div className="w-full flex justify-between items-center gap-4">
        <img
          src={logo}
          className="max-w-[120px] md:max-w-[150px]"
          alt="logo da empresa"
        />
        <span className="text-secondary font-bold text-right text-lg">
          Evolução através da conexão
        </span>
      </div>

      <div className="w-full border border-divider/10"></div>

      <div className="w-full flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-2.5">{children}</div>
        <div className="flex justify-center gap-5 mt-9 md:mt-0">
          <a href="#">
            <InstagramIcon width={18} height={18} />
          </a>
          <a href="#">
            <LinkedinIcon width={18} height={18} />
          </a>
          <a href="#">
            <WhatsappIcon width={18} height={18} />
          </a>
        </div>
      </div>

      <span>@ simbiosys 2025</span>
    </footer>
  );
}
