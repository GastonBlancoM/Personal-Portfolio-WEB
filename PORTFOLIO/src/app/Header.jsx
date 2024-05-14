import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Toolbar } from 'primereact/toolbar';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FaBookReader } from "react-icons/fa";
import {useTranslation} from "react-i18next";

import { icons, profile } from '../components/srcImage.jsx';

import '../styles/header.css';

export default function Header() {
    const [t, i18n] = useTranslation("global");

    const options = ['ES', 'EN'];
    const [value, setValue] = useState(options[0]);

    const startContent = (
        <h1 className='m-0'><span className='text-primary-100'>G</span>B<span className='text-primary-100'>M</span></h1>
    );

    const endContent = (
        <SelectButton value={value} onChange={(e) => setValue(i18n.changeLanguage(e.value))} options={options} />
        
    );

    const iconsH = [
        { icon: icons.javaIcon, label: "JAVA" },
        { icon: icons.htmlIcon, label: "HTML" },
        { icon: icons.cssIcon, label: "CSS" },
        { icon: icons.sqlIcon, label: "SQL" },
        { icon: icons.kotlinIcon, label: "KOTLIN" },
    ];

    const iconsA = [
        { icon: icons.reactIcon, label: "REACT" },
    ];

    const footer = (
        <div className='grid align-items-center mr-8 ml-8'>
            <div className='col my-3'>
                <h2 className='font-bold m-0 text-primary-500'>&lt;/&gt; {t("header.title-skills")}</h2>
                <br />
                <div>
                    {iconsH.map((item, index) => (
                        <div className='inline-flex align-items-center' key={index}>
                            <img src={item.icon} className='w-4 mr-1' alt={item.label} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col'>
                <h2 className='font-bold m-0 text-primary-500'><FaBookReader /> {t("header.title-learning")}</h2>
                <br />
                <div>
                    {iconsA.map((item, index) => (
                        <div className='inline-flex align-items-center' key={index}>
                            <img src={item.icon} className='w-4 mr-1' alt={item.label} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Toolbar start={startContent} end={endContent}  className="border-noround sticky-toolbar" style={{ backgroundImage: 'linear-gradient(to right, var(--primary-600) , var(--cyan-400))' }} />
            <Card footer={footer} style={{ backgroundColor: 'rgba(20, 26, 33, 0.6' }}>
                <div className='grid align-items-center mr-8 ml-8'>
                    <div className='col'>
                        <h1 className='mb-1'><span className='text-primary-500'>Gastón</span> Blanco Martínez</h1>
                        <h3 className='m-0'>{t("header.subTitle-position")}</h3>
                        <p className="line-height-3"> {t("header.txt-aboutMe-part1")}</p>
                        <p className="line-height-3">{t("header.txt-aboutMe-part2")}</p>
                        <div className='mt-4 '>
                            <Button label={t("header.cv-btn")} icon='pi pi-file-pdf' className='mr-2 flipup' onClick={() => window.open('https://react.dev', '_blank')} />
                            <Button label="LinkedIn" icon='pi pi-linkedin' className='flipup' onClick={() => window.open('https://linkedin.com/in/gastón-blanco-martínez', '_blank')} />
                        </div>
                    </div>
                    <div className='col-fixed relative p-0'>
                        <img src={profile.phFrame} alt="marco-avatar" className='h-marco-avatar border-solid' />
                        <img src={profile.phMain} alt="avatar-photo" className='h-avatar-ph' />
                    </div>
                </div>
            </Card>
        </>
    );
} 
