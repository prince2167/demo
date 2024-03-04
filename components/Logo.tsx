import logo from "@/public/icons/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={logo} alt="logo" className="size-12" />
      <p className="text-2xl font-semibold ">
        Chakr <span>Innovation</span>
      </p>
    </div>
  );
};

export default Logo;
