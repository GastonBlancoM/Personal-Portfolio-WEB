import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import { FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const [t] = useTranslation("global");
  const inputValue = 'gaston.blanco.martinez@gmail.com';

  const title = (
    <div>
      
    <h3 className='mr-8 ml-8 text-primary-500'><i className='pi pi-envelope text-xl'/> {t("footer.title-contact")}</h3>
    
    </div>
  );

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(inputValue);
  };

  return (
    <div className='py-2'>
      <Card title={title} style={{ backgroundColor: 'rgba(20, 26, 33, 0.6' }}>
        <div className='align-items-center mx-8 my-3'>
          <div className="p-inputgroup flex-1">
            <InputText value='gaston.blanco.martinez@gmail.com' readOnly/>
            <Button icon="pi pi-copy" tooltip={t("footer.btn-contact")} onClick={handleCopyToClipboard}/>
          </div>
        </div>
      </Card>
    </div>
  )
}
