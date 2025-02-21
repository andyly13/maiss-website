import React from 'react';

const companyLogos = [
  {
    name: 'Deloitte',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg'
  },
  {
    name: 'PwC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg'
  },
  {
    name: 'JP Morgan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg'
  },
  {
    name: 'Deutsche Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Deutsche_Bank-Logo.svg'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
  },
  {
    name: 'Palantir',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Palantir_Technologies_logo.svg'
  },
  {
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg'
  },
  {
    name: 'Applied Materials',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Applied_Materials_Inc._Logo.svg'
  },
  {
    name: 'SoFi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/SoFi_logo.svg'
  },
  {
    name: 'PlayStation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Playstation_logo_colour.svg'
  }
];

function CompanyLogos() {
  return (
    <div className="logo-grid">
      {companyLogos.map((company, index) => (
        <img 
          key={index}
          src={company.logo}
          alt={`${company.name} logo`}
          className="company-logo"
        />
      ))}
    </div>
  );
}

export default CompanyLogos; 