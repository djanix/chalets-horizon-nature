"use client";
import backgroundImage from '../../../../public/chalet.jpg';

export default function Splash() {
  const title = 'Chalets Horizon Nature';
  const subtitle = 'Hébergements en nature offrant calme et sérénité.';
  // const backgroundImage = 'https://api.chaletshorizonnature.com/uploads/chalet_199b5a4538.jpg';

  const links = [
    { name: "Facebook", link: 'https://www.facebook.com/ChaletsHorizonNature', color: '#0866ff' },
    { name: "Instagram", link: 'https://www.instagram.com/ChaletsHorizonNature', color: '#F77737' },
  ];

  return (
    // @ts-ignore
    <div style={{'--image-url': `url(${backgroundImage.src})`}}  className={`absolute top-0 left-0 right-0 bottom-0 bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover`}>
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center backdrop-blur-[6px] backdrop-saturate-150 rounded-xl bg-[rgba(17,25,40,0.51)] w-[clamp(300px,60%,80%)] h-[clamp(280px,60%,80%)] border-[1px] border-white/10">
        <div className="flex items-center justify-center h-full box-border p-[7%]">
          <div className="min-w-[60%]">
            <h1 className="text-[#eae4e4] pb-4 text-[32px] font-bold border-b-[1px] border-[hsla(0,0%,100%,.1)]">${title}</h1>
            <h2 className="text-[#abb2be] text-[21px] py-4">${subtitle}</h2>
            <p>
              {links.map(link =>
                <a key={link.name} href={link.link} className={`bg-[${link.color}] inline-block rounded-md text-sm py-3.5 px-2.5 m-3 shadow bg-[linear-gradient(rgba(255,255,255,0.15),rgba(255,255,255,0))] hover:brightness-90`}>
                  {link.name}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
