import Social from "@/app/components/shared/Social";
import config from "@/app/config/config.json";
import menu from "@/app/config/menu.json";
import social from "@/app/config/social.json";
import Logo from "@/app/components/shared/Logo";
import {markdownify} from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const {copyright, footer_content} = config.params;
  const {email, phone, location} = config.contact_info;
  return (
    <>
    <footer className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Logo/>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              {markdownify(footer_content, "p", "mt-3")}
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              {email && <Link href={`mailto:${email}`}>{email}</Link>}
              {/* social icons */}
              <Social source={social} className="gap-x-2"/>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">
                Company
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                {menu.footer.map((menu) => (
                  <Link href={menu.url} className="hover:text-primary hover:underline">
                    {menu.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Services
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> 1on1 Coaching </a>
                <a className="hover:opacity-75" href> Company Review </a>
                <a className="hover:opacity-75" href> Accounts Review </a>
                <a className="hover:opacity-75" href> HR Consulting </a>
                <a className="hover:opacity-75" href> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Helpful Links
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> Contact </a>
                <a className="hover:opacity-75" href> FAQs </a>
                <a className="hover:opacity-75" href> Live Chat </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Location & Contact
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> {markdownify(location)} </a>
                <Link href={`tel:${phone}`}>{phone}</Link>
              </nav>
            </div>
          </div>
        </div>
        <p class="mt-8 text-xs text-gray-800">
          © 2022 Comany Name
        </p>
      </div>
    </footer>
    </>
);
};

export default Footer;
