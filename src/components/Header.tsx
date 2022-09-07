import ortexlogo from "../assets/ortex-logo-h.webp";

const Header:React.FC = () => {
  return (
    <div className="p-8 pb-4 flex flex-row gap-2 items-center">
      <a href="/">
        <img src={ortexlogo} alt='ortex-logo' className="text-aquaort w-40" />
      </a>
    </div>
  );
};

export default Header;
