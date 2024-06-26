import { getStrapiMedia } from "../utils/api-helpers";
import { fetchAPI } from "../utils/fetch-api";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "notificationBanner.link",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export default async function PageLayout({children, params}: {
  readonly children: React.ReactNode;
  readonly params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  const { notificationBanner, navbar, footer } = global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data?.attributes.url
  );

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data?.attributes.url
  );

  return (
    <>
      <Navbar
        links={navbar.links}
        logoUrl={navbarLogoUrl}
        logoText={navbar.navbarLogo.logoText}
      />

      <main className="dark:bg-black dark:text-gray-100 min-h-screen">
        {children}
      </main>

      <Banner data={notificationBanner} />

      <Footer
        logoUrl={footerLogoUrl}
        logoText={footer.footerLogo.logoText}
        menuLinks={footer.menuLinks}
        categoryLinks={footer.categories.data}
        legalLinks={footer.legalLinks}
        socialLinks={footer.socialLinks}
      />
    </>
  );
}
