import { Instagram } from "lucide-react";
import logo from "../../assets/logo/10mslogo.svg";
// App Store Button Component
const AppStoreButton = ({ store, className = "" }) => {
  const isGoogle = store === "google";
  return (
    <button
      className={`bg-black text-white rounded-lg px-3 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors ${className}`}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {isGoogle ? (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        )}
      </div>
      <div className="text-left">
        <div className="text-xs opacity-80">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </div>
        <div className="text-sm font-semibold">
          {isGoogle ? "Google Play" : "App Store"}
        </div>
      </div>
    </button>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, className = "" }) => {
  const icons = {
    facebook: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: <Instagram className="w-5 h-5 text-white" />,
    linkedin: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    youtube: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    tiktok: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  };

  return (
    <div
      className={`bg-gray-800 hover:bg-gray-700 transition-colors p-3 rounded-lg cursor-pointer ${className}`}
    >
      {icons[icon]}
    </div>
  );
};

// Navigation Link Component
const NavLink = ({ children, className = "" }) => (
  <a
    href="#"
    className={`text-gray-600 hover:text-gray-800 transition-colors cursor-pointer ${className}`}
  >
    {children}
  </a>
);

// Contact Info Component
const ContactInfo = ({ type, value, className = "" }) => (
  <div className={`text-sm ${className}`}>
    <span className="text-gray-600">{type}: </span>
    <span className="text-green-600 font-medium">{value}</span>
  </div>
);

// Chat Button Component
const ChatButton = ({ className = "" }) => (
  <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
    <div className="bg-green-500 hover:bg-green-600 transition-colors p-4 rounded-full cursor-pointer shadow-lg">
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 13H7v-2h6v2zm4-4H7V9h10v2zm0-4H7V5h10v2z" />
      </svg>
    </div>
  </div>
);

// WhatsApp Button Component
const WhatsAppButton = ({ className = "" }) => (
  <div className={`fixed bottom-24 right-6 z-50 ${className}`}>
    <div className="bg-green-500 hover:bg-green-600 transition-colors p-4 rounded-full cursor-pointer shadow-lg">
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
      </svg>
    </div>
  </div>
);

// Main Footer Component
const Footer = () => {
  return (
    <div className="bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-[15px] py-12">
          {/* Top Section */}
          <div className="flex justify-between items-start mb-12">
            {/* Left - Logo and App Downloads */}
            <div className="flex-1">
              <img src={logo} alt="logo" className="w-[116px] h-[32px] mb-2" />

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Download Our Mobile App
                </h3>
                <div className="flex space-x-4">
                  <AppStoreButton store="google" />
                  <AppStoreButton store="apple" />
                </div>
              </div>
            </div>

            {/* Middle - Navigation */}
            <div className="flex-1 grid grid-cols-2 gap-10 mx-4">
              {/* Company Column */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Company</h3>
                <div className="flex flex-col gap-3">
                  <NavLink>Career / Recruitment</NavLink>
                  <NavLink>Join as a Teacher</NavLink>
                  <NavLink>Join as an Affiliate</NavLink>
                  <NavLink>Privacy policy</NavLink>
                  <NavLink>Refund policy</NavLink>
                  <NavLink>Terms & Conditions</NavLink>
                </div>
              </div>

              {/* Others Column */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Others</h3>
                <div className="flex flex-col gap-3">
                  <NavLink>Blog</NavLink>
                  <NavLink>Book Store</NavLink>
                  <NavLink>Free Notes & Guides</NavLink>
                  <NavLink>Job Preparation Courses</NavLink>
                  <NavLink>Verify Certificate</NavLink>
                  <NavLink>Free Download</NavLink>
                </div>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-6">Keep up with us at</h3>
              <div className="space-y-3 mb-6">
                <ContactInfo type="Call Us" value="16910 (24×7)" />
                <ContactInfo type="whatsapp" value="+8801896016252(24×7)" />
                <ContactInfo
                  type="Outside Bangladesh"
                  value="+880 9610916910"
                />
                <div className="text-sm">
                  <span className="text-gray-600">Email Us: </span>
                  <span className="text-green-600 font-medium">
                    support@10minuteschool.com
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3">
                <SocialIcon icon="facebook" />
                <SocialIcon icon="instagram" />
                <SocialIcon icon="linkedin" />
                <SocialIcon icon="youtube" />
                <SocialIcon icon="tiktok" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-6 py-12">
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[116px] h-[32px] mb-4 mx-auto"
          />

          {/* App Downloads */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold mb-4">
              Download Our Mobile App
            </h3>
            <div className="flex flex-col space-y-4 items-center">
              <AppStoreButton store="google" className="w-64" />
              <AppStoreButton store="apple" className="w-64" />
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 gap-12 mb-12 px-7">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="flex flex-col gap-2">
                <NavLink>Career / Recruitment</NavLink>
                <NavLink>Join as a Teacher</NavLink>
                <NavLink>Join as an Affiliate</NavLink>
                <NavLink>Privacy policy</NavLink>
                <NavLink>Refund policy</NavLink>
                <NavLink>Terms & Conditions</NavLink>
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Others</h3>
              <div className="flex flex-col gap-2">
                <NavLink>Blog</NavLink>
                <NavLink>Book Store</NavLink>
                <NavLink>Free Notes & Guides</NavLink>
                <NavLink>Job Preparation Courses</NavLink>
                <NavLink>Verify Certificate</NavLink>
                <NavLink>Free Download</NavLink>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-12">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="instagram" />
            <SocialIcon icon="linkedin" />
            <SocialIcon icon="youtube" />
            <SocialIcon icon="tiktok" />
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <ChatButton />
      <WhatsAppButton />
    </div>
  );
};

export default Footer;
