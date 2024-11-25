import { logoNoBg } from "../../assets";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Logo = ({ customCss, hideName = false }) => {
  return (
    <Link
      to={"/"}
      className={`max-w-max ${customCss}`}
    >
      <div className="flex gap-1.5 items-center">
        <div className="w-16">
          <img
            src={logoNoBg}
            alt="recipen logo"
            className="w-full h-full"
          />
        </div>
        {!hideName && <h1 className="font-bold text-xl"></h1>}
      </div>
    </Link>
  );
};

export default Logo;
