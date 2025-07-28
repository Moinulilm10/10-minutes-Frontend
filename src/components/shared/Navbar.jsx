import { ChevronDown, Phone, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import responsiveMenuIcon from "../../assets/icon/responsive-menu-icon.svg";
import translateIcon from "../../assets/icon/translate-button.svg";
import logo from "../../assets/logo/10mslogo.svg";
import { useLanguage } from "../../context/LanguageContext";

// Inline Button component
const Button = ({ children, className = "", size = "default", ...props }) => {
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-md px-2",
    lg: "h-11 rounded-md px-8",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ResponsiveMenuIcon = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 12H21M3 6H21M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rawNavItems = [
  "Class 6-12",
  "Skills",
  "Admission",
  "Online Batch",
  "English Centre",
  "More",
];

const dropdownContents = {
  "Class 6-12": [
    "HSC",
    "Class Ten",
    "Class Nine",
    "Class Eight",
    "Class Seven",
    "Class Six",
  ],
  Skills: [
    "All courses",
    "Language Learning",
    "Freelancing",
    "Bundle",
    "Skills & IT",
    "Design & Creative",
    "Career Readiness",
    "Kids (Age 7-14)",
    "Professional",
    "Free",
  ],
  "Online Batch": ["Online Batch (Class 6-10)", "HSC"],
  "English Centre": [
    "All Programmes",
    "IELTS Programme",
    "Spoken English (Junior)",
    "English Foundation Programme",
    "Kids' English",
  ],
  More: [
    "Job Preparation Courses",
    "Blog",
    "Book Store",
    "Free Notes & Guides",
    "Academic Digital Content",
    "Verify Certificate",
    "divider",
    "Career / Recruitment",
    "Join as a Teacher",
    "Join as an Affiliate",
  ],
};

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarDropdown, setSidebarDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const { t, toggleLanguage, language } = useLanguage();

  const navItems = rawNavItems.map((title) => ({
    title,
    label: t(title.toLowerCase().replace(/\s+/g, "_")),
    href: "#",
    hasDropdown: title === "Admission" ? false : true,
  }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        !event.target.closest(`[data-dropdown="${openDropdown}"]`)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const toggleSidebarDropdown = (title) => {
    setSidebarDropdown(sidebarDropdown === title ? null : title);
  };

  const renderDropdownContent = (title) => {
    const items = dropdownContents[title] || [];
    return (
      <div className="py-2 bg-white shadow-lg rounded-md border border-gray-200">
        {items.map((item, index) =>
          item === "divider" ? (
            <hr key={index} className="my-1 border-t border-gray-300" />
          ) : (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {t(item)}
            </a>
          )
        )}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden xl:flex items-center justify-evenly px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4 pr-4">
          <img src={logo} alt="logo" width={100} height={27} />

          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t("search_placeholder")}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              data-dropdown={item.title}
            >
              <button
                onClick={() => item.hasDropdown && toggleDropdown(item.title)}
                onMouseEnter={() =>
                  item.hasDropdown && setOpenDropdown(item.title)
                }
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>

              {item.hasDropdown && openDropdown === item.title && (
                <div className="absolute top-full left-0 mt-2 w-60 z-50">
                  {renderDropdownContent(item.title)}
                </div>
              )}
            </div>
          ))}

          <div
            className="border-1 px-2 py-1 border-gray-400 rounded-sm flex gap-2 cursor-pointer"
            onClick={toggleLanguage}
          >
            <img src={translateIcon} alt="translate_icon" className="h-6 w-6" />
            <span className="text-gray-700 text-base font-semibold">
              {t("bn")}
            </span>
          </div>

          <div className="flex items-center text-green-600">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">{t("call")}</span>
          </div>
          <Button className="px-6">{t("login")}</Button>
        </div>
      </nav>

      {/* Tablet Navbar */}
      <nav className="hidden lg:flex xl:hidden items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-700 hover:text-green-600"
          >
            <img
              src={responsiveMenuIcon}
              alt="responsive_icon"
              className="w-6 h-6"
            />
          </button>
          <img src={logo} alt="logo" width={100} height={27} />
        </div>

        <div className="relative flex-1 max-w-lg mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div
            onClick={toggleLanguage}
            className="border-1 px-2 py-1 border-gray-400 rounded-sm flex gap-2 cursor-pointer"
          >
            <img src={translateIcon} alt="translate_icon" className="h-6 w-6" />
            <span className="text-gray-700 text-base font-semibold">
              {t("bn")}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-green-600">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">{t("call")}</span>
          </div>
          <Button className="px-4">{t("login")}</Button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden items-center justify-between px-1 py-3 bg-white border-b border-gray-200">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-around gap-[120px]">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-gray-700 hover:text-green-600"
              >
                <img
                  src={responsiveMenuIcon}
                  alt="responsive_icon"
                  className="w-6 h-6"
                />
              </button>
              <img
                src={logo}
                alt="logo"
                width={100}
                height="auto"
                className="flex items-start"
              />
            </div>

            <div className="flex items-center space-x-2">
              <div
                onClick={toggleLanguage}
                className="border-1 px-4 py-1 border-gray-400 rounded-sm flex justify-center items-center gap-1 cursor-pointer"
              >
                <img
                  src={translateIcon}
                  alt="translate_icon"
                  className="h-4 w-4"
                />
                <span className="text-gray-700 text-[10px] font-semibold">
                  {t("bn")}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-green-600 text-sm">
                <Phone className="h-3 w-3" />
                <span className="font-semibold text-sm">{t("call")}</span>
              </div>
              <Button size="sm">{t("login")}</Button>
            </div>
          </div>

          <div className="flex items-center justify-around gap-3 ">
            {navItems
              .filter((item) =>
                ["Class 6-12", "Skills", "Admission", "More"].includes(
                  item.title
                )
              )
              .map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  data-dropdown={item.title}
                >
                  <button
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.title)
                    }
                    onMouseEnter={() =>
                      item.hasDropdown && setOpenDropdown(item.title)
                    }
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium"
                  >
                    <span className="text-[11px]">{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                  {item.hasDropdown && openDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-48 z-50">
                      {renderDropdownContent(item.title)}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-blend-color-dodge bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img src={logo} alt="logo" width={100} height={27} />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-gray-700 hover:text-green-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.title}>
              <div
                className="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={() =>
                  item.hasDropdown && toggleSidebarDropdown(item.title)
                }
              >
                <span className="font-medium">{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      sidebarDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.hasDropdown && sidebarDropdown === item.title && (
                <div className="ml-4 mt-2 space-y-1">
                  {(dropdownContents[item.title] || []).map(
                    (dropdownItem, index) =>
                      dropdownItem === "divider" ? (
                        <hr
                          key={index}
                          className="border-t border-gray-300 my-1"
                        />
                      ) : (
                        <a
                          key={index}
                          href="#"
                          className="block p-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded"
                        >
                          {t(dropdownItem)}
                        </a>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
