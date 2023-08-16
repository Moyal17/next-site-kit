import ImageFallback from "@/app/components/ImageFallback";
import config from "@/app/config/config.json";
import Link from "next/link";

interface LogoProps {
  src?: string | null
}
const Logo : React.FC<LogoProps> = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link href="/" className="navbar-brand block">
      {src || logo ? (
        <ImageFallback
          // @ts-ignore
          width={logo_width.replace("px", "") * 2}
          // @ts-ignore
          height={logo_height.replace("px", "") * 2}
          src={src ? src : logo}
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
