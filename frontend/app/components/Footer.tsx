import { Github } from 'lucide-react';
import { FadeInUp, FadeInLeft, FadeInRight } from './ScrollReveal';
import WeChatQRCodeModal from './WeChatQRCodeModal';

export default function Footer() {
  const partners = [
    "NoncegeekDAO",
    "Center for Chinese Dialect Studies, Jinan University",
    "Guangdong People's Publishing House",
    "Yangcheng Evening News",
    "The Hong Kong University of Science and Technology (Guangzhou)",
    "South China Normal University",
    "University of Chinese Academy of Sciences (UCAS)",
    "Guangzhou TV Station"
  ];

  return (
    <FadeInUp>
      <footer className="bg-base-200 text-base-content">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <FadeInLeft delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img src="/logo.png" alt="DimSum Logo" className="w-8 h-8 rounded-lg" />
                  <h3 className="text-xl font-bold text-primary">DIMSUN AI Labs</h3>
            </div>
                <p className="text-sm text-base-content/80 leading-relaxed">
                  Advancing AI research and development in natural language processing, 
                  with a focus on Chinese dialect studies and computational linguistics.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/NonceGeek/dim-sum-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="btn btn-primary btn-sm">
                      <Github className="w-4 h-4" />
                  </button>
                  </a>
                </div>
              </div>
            </FadeInLeft>

            {/* Media (WeChat Public Account) */}
            <FadeInUp delay={0.3}>
              <WeChatQRCodeModal />
            </FadeInUp>

            {/* Partners */}
            <FadeInRight delay={0.4}>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Partners</h4>
                <div className="space-y-2">
                  {partners.map((partner, index) => (
                    <p 
                      key={index} 
                      className="text-sm text-base-content/70 hover:text-primary cursor-pointer transition-colors duration-200"
                    >
                      {partner}
                    </p>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>
          </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <FadeInUp delay={0.6}>
                <p className="text-sm text-base-content/60">
                  © 2024 AI Dim Sum Lab. All rights reserved.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.7}>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-base-content/60 hover:text-primary transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-base-content/60 hover:text-primary transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="#" className="text-base-content/60 hover:text-primary transition-colors duration-200">
                    Cookie Policy
                  </a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </footer>
    </FadeInUp>
  );
} 