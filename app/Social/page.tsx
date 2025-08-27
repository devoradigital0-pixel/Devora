"use client";
import { useState } from 'react';

type PdfKey = 'social-media' | 'ads-management';

interface PdfInfo {
  title: string;
  src: string;
}

export default function Page() {
  const [selectedPdf, setSelectedPdf] = useState<PdfKey>('social-media');

  const pdfs: Record<PdfKey, PdfInfo> = {
    'social-media': {
      title: 'Social Media',
      src: '/pdfs/devora.pdf'
    },
    'ads-management': {
      title: 'Ads Management', 
      src: '/pdfs/Marketingresults.pdf'
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <div style={{ 
        background: '#f5f5f5', 
        padding: '10px 20px', 
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '10px'
      }}>
        {(Object.keys(pdfs) as PdfKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedPdf(key)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              backgroundColor: selectedPdf === key ? '#007bff' : '#fff',
              color: selectedPdf === key ? '#fff' : '#333',
              fontWeight: selectedPdf === key ? 'bold' : 'normal',
              boxShadow: selectedPdf === key ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            {pdfs[key].title}
          </button>
        ))}
      </div>

     

      {/* PDF Viewer */}
      <div style={{ flex: 1 }}>
        <iframe
          src={pdfs[selectedPdf].src}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title={pdfs[selectedPdf].title}
          onLoad={() => console.log(`PDF loaded: ${pdfs[selectedPdf].src}`)}
          onError={() => console.error(`Failed to load PDF: ${pdfs[selectedPdf].src}`)}
        />
      </div>
    </div>
  );
}