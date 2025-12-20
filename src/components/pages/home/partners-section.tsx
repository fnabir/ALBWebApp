import { PageSection } from "@/components/page-section";
import Image from "next/image";

const partners = [
  {
    src: "http://en.mdunks.com/templets/default/img/logo-s.png",
    alt: "Suzhou MODUN Express Elevator Co., Ltd.",
    name: "MODUN Elevator",
    website: "http://en.mdunks.com/",
  },
  {
    src: "http://www.mdel.co.kr/simg/logo.png",
    alt: "MODEUN ELEVATOR CO.,LTD",
    name: "MODEUN Elevator",
    website: "http://www.mdel.co.kr/",
  },
  {
    src: "https://www.inovance.eu/typo3conf/ext/wr/Resources/Public/img/PAM_Logo.svg",
    alt: "Suzhou MONARCH Control Technology Co",
    name: "MONARCH Control",
    website: "https://www.inovance.eu/",
  },
  {
    src: "http://www.torindrive-europe.com/images/logo_TORIN_EUROPE.png",
    alt: "TORINDRIVE",
    name: "TORIN Drive",
    website: "http://www.torindrive-europe.com/",
  },
  {
    src: "https://www.sicoritaly.com/wp-content/uploads/2021/08/logo-sicor-1-Modificata.png",
    alt: "SICOR ITALY",
    name: "SICOR Italy",
    website: "https://www.sicoritaly.com/",
  },
  {
    src: "http://www.shineelevator.com/img/upimages/home/20190525133629821.png",
    alt: "Beijing Shine Elevator Co., Ltd",
    name: "Shine Elevator",
    website: "http://www.shineelevator.com/",
  },
  {
    src: "https://shopsource.singoo.cc/801/general/Qezs8BNJe3ZxiKRf/xizi_0223.png?x-oss-process=image/resize,w_200/quality,q_100",
    alt: "Xizi Elevator Technology Co., Ltd",
    name: "Xizi Elevator",
    website: "https://www.xizielevator.com/",
  },
];

export default function PartnerSection() {
  return (
    <PageSection 
      id="partners"
      className="bg-muted/50"
      badge="Business Partner"
      heading="Our Valued Partners"
      subheading="We&apos;re proud to collaborate with industry-leading companies and
            organizations. These strong partnerships enable us to deliver
            superior elevator and lift solutions with unmatched quality and
            reliability."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-2xl backdrop-blur-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center flex flex-col items-center space-y-3"
          >
            <div className="relative w-full h-20 flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-contain"
              />
            </div>
            <div className="text-sm font-medium text-gray-700">{partner.name}</div>
          </a>
        ))}
      </div>
    </PageSection>
  )
}