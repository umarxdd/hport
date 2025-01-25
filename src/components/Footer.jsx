import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {
  return (
    <>
      <div className="bg-black text-white px-[12vw] py-[15vh]">
        <div className="flex flex-col gap-10 max-w-[50%]">
          <div className="text-3xl  font-mono">
            <h1 className="font-bold">Contact me</h1>
            So we can create creative projects together
          </div>

          <div className="text-xl flex">
            <h1 className="italic font-thin">hammadgmail.com | 03000045054</h1>
          </div>

          <div className="flex text-2xl gap-8">
            <TiSocialInstagram />
            <TiSocialFacebook />
            <TiSocialTwitter />
            <TiSocialYoutube />
          </div>
          <div className="text-sm font-thin italic opacity-50">
            © 2025 by Rana Umar
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
