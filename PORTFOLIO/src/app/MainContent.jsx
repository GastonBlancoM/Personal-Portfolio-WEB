import React from 'react';
import { Card } from 'primereact/card';
import { GiSkills } from "react-icons/gi";
import { LuMountain } from "react-icons/lu";
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { useTranslation } from "react-i18next";
import { FaConnectdevelop } from "react-icons/fa";
import { Image } from 'primereact/image';

import { gallery, content, icons } from '../components/srcImage.jsx';

export default function Main() {
  const [t] = useTranslation("global");

  const imagesDesktop = [
    { itemImageSrc: gallery.desktop_1, alt: "desktop_1" },
    { itemImageSrc: gallery.desktop_2, alt: "desktop_2" },
    { itemImageSrc: gallery.desktop_3, alt: "desktop_3" },
    { itemImageSrc: gallery.desktop_4, alt: "desktop_4" },
  ];

  const imagesWeb = [
    { itemImageSrc: gallery.web_1, alt: "web_1" },
    { itemImageSrc: gallery.web_2, alt: "web_2" },
    { itemImageSrc: gallery.web_3, alt: "web_3" },
    { itemImageSrc: gallery.web_4, alt: "web_4" },
  ];

  const imagesMobile = [
    { itemImageSrc: gallery.mobile_1, alt: "mobile_1" },
    { itemImageSrc: gallery.mobile_2, alt: "mobile_2" },
    { itemImageSrc: gallery.mobile_3, alt: "mobile_3" },
  ];

  const imagesPFolio = [
    { itemImageSrc: gallery.pfolio_1, alt: "pfolio_1" },
  ];

  const btnLink = [
    { desktop_code: <Button icon="pi pi-github" className='py-0 bg-primary' tooltip={t("main.tool-tip")} style={{ paddingLeft: '0.20rem', paddingRight: '0.20rem' }} onClick={() => window.open('https://github.com/GastonBlancoM/PDT-Proyecto-de-Desarrollo-y-Testing-DESKTOP-JAVA.git', '_blank')} /> },
    { web_code: <Button icon="pi pi-github" className='py-0 bg-primary' tooltip={t("main.tool-tip")} style={{ paddingLeft: '0.20rem', paddingRight: '0.20rem' }} onClick={() => window.open('https://github.com/GastonBlancoM/PFT-Proyecto-Final-de-Tecnicatura-WEB-JAVA.git', '_blank')} /> },
    { android_code: <Button icon="pi pi-github" className='py-0 bg-primary' tooltip={t("main.tool-tip")} style={{ paddingLeft: '0.20rem', paddingRight: '0.20rem' }} onClick={() => window.open('https://github.com/GastonBlancoM/PFT-Proyecto-Final-de-Tecnicatura-ANDROID-KOTLIN.git', '_blank')} /> },
    { portfolio_code: <Button icon="pi pi-github" className='py-0 bg-primary' tooltip={t("main.tool-tip")} style={{ paddingLeft: '0.20rem', paddingRight: '0.20rem' }} onClick={() => window.open('https://github.com/GastonBlancoM/Personal-Portfolio-WEB.git', '_blank')} /> },
  ];

  const responsiveOptions = [
    { breakpoint: '991px', numVisible: 4 },
    { breakpoint: '767px', numVisible: 3 },
    { breakpoint: '575px', numVisible: 1 },
  ];

  const title = (
    <h3 className='mr-8 ml-8 text-primary-500 '><FaConnectdevelop className='text-2xl' />{t("main.title-projects")}</h3>
  );

  return (
    <>
      <div className='py-2'>
        <Card style={{ backgroundColor: 'rgba(20, 26, 33, 0.6' }}>
          <div className='grid align-items-center mr-8 ml-8'>
            <div className='col flex justify-content-center'>
              <img src={content.devImg} alt="dev-img" className='w-8 mr-8' />
            </div>

            <div className='col '>
              <h2 className='font-bold m-0 text-primary-500 '><GiSkills /> {t("main.title-experience")}</h2>
              <p className="line-height-3">{t("main.txt-experience-part1")}</p>
              <p className="line-height-3">{t("main.txt-experience-part2")}</p>
            </div>
          </div>
          <div className='grid align-items-center mr-8 ml-8'>
            <div className='col '>
              <h2 className='font-bold m-0 text-primary-500 '><LuMountain /> {t("main.title-competences")}</h2>
              <p className="line-height-3">{t("main.txt-competences")}</p>
              <ul class="list-disc">
                <li>{t("main.competence-list-1")}</li>
                <li>{t("main.competence-list-2")}</li>
                <li>{t("main.competence-list-3")}</li>
                <li>{t("main.competence-list-4")}</li>
                <li>{t("main.competence-list-5")}</li>
              </ul>
            </div>

            <div className='col flex justify-content-center'>
              <img src={content.compImg} alt="dev-img" className='w-8 mr-8' />
            </div>

          </div>
        </Card>
      </div>

      <div>
        <Card title={title} style={{ backgroundColor: 'rgba(20, 26, 33, 0.6' }}>

          <div className='grid align-items-center mr-8 ml-8 my-3'>

            <div className='col surface-overlay border-round border-1'>
              <div className='flex justify-content-between'>
                <h4 className='font-bold m-0 text-primary-500 '>{t("main.subTitle-desktop")}</h4>
                {btnLink[0].desktop_code}
              </div>
              <p className="line-height-3">
                {t("main.description-desktop")}
              </p>
              <ul class="list-disc">
                <li>{t("main.D-list-1")}</li>
                <li>{t("main.D-list-2")}</li>
              </ul>
              <div className='inline-flex w-full align-items-center justify-content-end'>
                <img src={icons.javaIcon} title="Java" alt="" style={{ width: '5%' }} />
                <img src={icons.sqlIcon} title="SQL" alt="" style={{ width: '5%' }} />
              </div>

            </div>

            <div className="w-4" style={{ marginRight: '10%', marginLeft: '10%' }}>
              {imagesDesktop.map((item, index) => (
                <div className='inline-flex align-items-center' key={index}>
                  <Image src={item.itemImageSrc} zoomSrc={item.itemImageSrc} alt={item.alt} width="100" className='m-2' preview />
                </div>
              ))}
            </div>
          </div>

          <hr className='mr-8 ml-8 border-primary-500' /><br />

          <div className='grid align-items-center mr-8 ml-8'>
            <div className="w-4" style={{ marginRight: '5%', marginLeft: '10%' }}>
              {imagesWeb.map((item, index) => (
                <div className='inline-flex align-items-center' key={index}>
                  <Image src={item.itemImageSrc} zoomSrc={item.itemImageSrc} alt={item.alt} width="180" className='m-1' preview />
                </div>
              ))}
            </div>

            <div className='col surface-overlay border-round border-1'>
              <div className='flex justify-content-between'>
                <h4 className='font-bold m-0 text-primary-500 '>{t("main.subTitle-web")}</h4>
                {btnLink[1].web_code}
              </div>
              <p className="line-height-3">
                {t("main.description-web")}
              </p>
              <ul class="list-disc">
                <li>{t("main.W-list-1")}</li>
                <li>{t("main.W-list-2")}</li>
                <li>{t("main.W-list-3")}</li>
              </ul>
              <div className='inline-flex w-full align-items-center justify-content-end'>
                <img src={icons.javaIcon} title="Java" alt="" style={{ width: '5%' }} />
                <img src={icons.htmlIcon} title="HTML" alt="" style={{ width: '5%' }} />
                <img src={icons.cssIcon} title="CSS" alt="" style={{ width: '5%' }} />
                <img src={icons.sqlIcon} title="SQL" alt="" style={{ width: '5%' }} />
              </div>
            </div>
          </div>

          <br /><hr className='mr-8 ml-8 border-primary-500' /><br />

          <div className='grid align-items-center mr-8 ml-8 my-3'>

            <div className='col surface-overlay border-round border-1'>
              <div className='flex justify-content-between'>
                <h4 className='font-bold m-0 text-primary-500 '>{t("main.subTitle-android")}</h4>
                {btnLink[2].android_code}
              </div>
              <p className="line-height-3">
                {t("main.description-android")}
              </p>
              <ul class="list-disc">
                <li>{t("main.A-list-1")}</li>
                <li>{t("main.A-list-2")}</li>
                <li>{t("main.A-list-3")}</li>
              </ul>
              <div className='inline-flex w-full align-items-center justify-content-end'>
                <img src={icons.kotlinIcon} title="Kotlin" alt="" style={{ width: '5%' }} />
                <img src={icons.sqlIcon} title="SQL" alt="" style={{ width: '5%' }} />
              </div>
            </div>

            <div className="w-4" style={{ marginRight: '10%', marginLeft: '10%' }}>
              {imagesMobile.map((item, index) => (
                <div className='inline-flex align-items-center' key={index}>
                  <Image src={item.itemImageSrc} zoomSrc={item.itemImageSrc} alt={item.alt} width="100" className='m-2' preview />
                </div>
              ))}
            </div>

          </div>

          <hr className='mr-8 ml-8 border-primary-500' /><br />

          <div className='grid align-items-center mr-8 ml-8'>

            <div className="w-4" style={{ marginRight: '5%', marginLeft: '10%' }}>
              {imagesPFolio.map((item, index) => (
                <div className='inline-flex align-items-center' key={index}>
                  <Image src={item.itemImageSrc} zoomSrc={item.itemImageSrc} alt={item.alt} width="290" className='m-1' preview />
                </div>
              ))}
            </div>

            <div className='col surface-overlay border-round border-1'>
              <div className='flex justify-content-between'>
                <h4 className='font-bold m-0 text-primary-500 '>{t("main.subTitle-port")}</h4>
                {btnLink[3].portfolio_code}
              </div>
              <p className="line-height-3">
                {t("main.description-port")}
              </p>
              <ul class="list-disc">
                <li>{t("main.F-list-1")}</li>
                <li>{t("main.F-list-2")}</li>
              </ul>
              <div className='inline-flex w-full align-items-center justify-content-end'>
                <img src={icons.reactIcon} title="React" alt="" style={{ width: '5%' }} />
                <img src={icons.jscriptIcon} title="JavaScript" alt="" style={{ width: '5%' }} />
                <img src={icons.htmlIcon} title="HTML" alt="" style={{ width: '5%' }} />
                <img src={icons.cssIcon} title="CSS" alt="" style={{ width: '5%' }} />
              </div>
            </div>
          </div>

        </Card>
      </div>
    </>
  )
}
