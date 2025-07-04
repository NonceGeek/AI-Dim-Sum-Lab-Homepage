"use client";
import { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { type Dictionary } from '../i18n/types';

interface WeChatQRCodeModalProps {
  dict: Dictionary;
}

export default function WeChatQRCodeModal({ dict }: WeChatQRCodeModalProps) {
  const [showQR, setShowQR] = useState(false);
  return (
    <div className="space-y-4 text-center">
      <h4 className="text-lg font-semibold text-primary">{dict.footer.wechat.title}</h4>
      <p className="text-sm text-base-content/70">{dict.footer.wechat.description}</p>
      <button
        className="btn btn-outline btn-primary btn-sm"
        onClick={() => setShowQR(true)}
      >
        <Smartphone className="w-4 h-4 mr-2" />
        {dict.footer.wechat.button}
      </button>
      {/* Modal for QR Code */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-base-100 rounded-lg shadow-lg p-6 relative w-80 flex flex-col items-center">
            <button
              className="absolute top-2 right-2 btn btn-xs btn-circle btn-ghost"
              onClick={() => setShowQR(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src="/qr_code.jpg"
              alt="WeChat QR Code"
              className="w-40 h-40 object-contain mb-4 rounded"
            />
            <div className="text-base font-semibold text-primary mb-1">{dict.footer.wechat.modal.title}</div>
            <div className="text-xs text-base-content/70">{dict.footer.wechat.modal.description}</div>
          </div>
        </div>
      )}
    </div>
  );
} 