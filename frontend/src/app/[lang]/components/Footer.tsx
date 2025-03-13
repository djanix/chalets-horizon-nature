"use client";
import Link from "next/link";
import Logo from "./Logo";
import { CgFacebook, CgInstagram } from "react-icons/cg";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "Facebook":
      return <CgFacebook className="h-5 w-5" />;
    case "Instagram":
      return <CgInstagram className="h-5 w-5" />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  legalLinks,
  socialLinks,
  contact
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
  contact: {
    address: string;
    email: string;
    phone: string;
  }
}) {

  return (
    <footer className="py-6">
      <div className="container px-6 mx-auto">
        <div className="pb-6">
          <Logo src={logoUrl}>
            {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
          </Logo>
        </div>

        <div className="divide-y divide-gray-400 divide-opacity-50">
          <div className="mx-auto lg:flex flex-wrap justify-between pb-6">
            <div className="pb-6 lg:pb-0">
              <p className="pb-1 text-lg font-medium">Contact</p>
              <ul>
                <li>{contact.address}</li>
                <li>Email: <a href={`mailto:${contact.email}`} className="text-natural-dark hover:text-greyFriends-dark">{contact.email}</a></li>
                <li>Tel. : <a href={`tel:${contact.phone}`} className="text-natural-dark hover:text-greyFriends-dark">{contact.phone}</a></li>
              </ul>
            </div>

            <div className="pb-6 lg:pb-0">
              <p className="pb-1 text-lg font-medium">À propos</p>
              <ul>
                {legalLinks.map((link: FooterLink) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-natural-dark hover:text-greyFriends-dark">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pb-6 lg:pb-0">
              <p className="pb-1 text-lg font-medium">Suivez-nous</p>
              <div className="flex space-x-2">
                {socialLinks.map((link: FooterLink) => {
                  return (
                    <a
                      key={link.id}
                      rel="noopener noreferrer"
                      href={link.url}
                      title={link.text}
                      target={link.newTab ? "_blank" : "_self"}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-natural-dark hover:bg-natural-dark/80"
                    >
                      <RenderSocialIcon social={link.social} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="py-6 col-span-full md:pb-0 md:col-span-6">
            <span className="mr-2">
              ©{new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
