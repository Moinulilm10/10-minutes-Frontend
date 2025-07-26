import { ChevronDown, Phone, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import responsiveMenuIcon from "../../assets/icon/responsive-menu-icon.svg";
import translateIcon from "../../assets/icon/translate-button.svg";
import logo from "../../assets/logo/10mslogo.svg";

// Inline Button component
const Button = ({ children, className = "", size = "default", ...props }) => {
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
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

// Inline responsive menu icon SVG
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

const navItems = [
  { title: "Class 6-12", href: "#", hasDropdown: true },
  { title: "Skills", href: "#", hasDropdown: true },
  { title: "Admission", href: "#", hasDropdown: true },
  { title: "Online Batch", href: "#", hasDropdown: true },
  { title: "English Centre", href: "#", hasDropdown: true },
  { title: "More", href: "#", hasDropdown: true },
];

const sampleDropdownItems = [
  "সকল ক্লাস",
  "ক্লাস ৬",
  "ক্লাস ৭",
  "ক্লাস ৮",
  "ক্লাস ৯",
  "ক্লাস ১০",
  "SSC",
  "HSC",
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarDropdown, setSidebarDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        openDropdown &&
        !target.closest(`[data-dropdown="${openDropdown}"]`)
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

  const renderDropdownContent = () => (
    <div className="py-2 bg-white shadow-lg rounded-md border border-gray-200">
      {sampleDropdownItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Navbar (1280px+) */}
      <nav className="hidden xl:flex items-center justify-evenly px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4 pr-4">
          {/* Logo */}
          <img src={logo} alt="logo" width={100} height={27} />

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="কিসের কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">
          {navItems.slice(0, 6).map((item) => (
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
                className="flex items-center  text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                <span>{item.title}</span>
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>

              {item.hasDropdown && openDropdown === item.title && (
                <div className="absolute top-full left-0 mt-2 w-48 z-50">
                  {renderDropdownContent()}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center space-x-3">
            <div className="border-1 px-2 py-1 border-gray-400 rounded-sm flex gap-2 cursor-pointer">
              <img
                src={translateIcon}
                alt="translate_icon"
                className="h-6 w-6"
              />
              <span className="text-gray-700 text-base font-semibold">বাং</span>
            </div>

            <div className="flex items-center  text-green-600">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">16910</span>
            </div>
            <Button className="px-6">লগ-ইন</Button>
          </div>
        </div>
      </nav>

      {/* Tablet Navbar (768px - 1279px) */}
      <nav className="hidden lg:flex xl:hidden items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-700 hover:text-green-600"
          >
            {/* <ResponsiveMenuIcon className="w-6 h-6" /> */}
            <img
              src={responsiveMenuIcon}
              alt="responsive_icon"
              className="w-6 h-6"
            />
          </button>

          <img src={logo} alt="logo" width={100} height={27} />
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="কিসের কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div className="border-1 px-2 py-1 border-gray-400 rounded-sm flex gap-2 cursor-pointer">
            <img src={translateIcon} alt="translate_icon" className="h-6 w-6" />
            <span className="text-gray-700 text-base font-semibold">বাং</span>
          </div>
          <div className="flex items-center space-x-2 text-green-600">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">16910</span>
          </div>
          <Button className="px-4">লগ-ইন</Button>
        </div>
      </nav>

      {/* Mobile Navbar (<768px) */}
      <nav className="flex lg:hidden items-center justify-between  px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-700 hover:text-green-600"
          >
            {/* <ResponsiveMenuIcon className="w-6 h-6" /> */}
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
            height={27}
            className="flex items-start"
          />
        </div>

        <div className="flex items-center gap-3 mt-[60px]">
          {navItems
            .filter((item) =>
              ["Class 6-12", "Skills", "Admission", "More"].includes(item.title)
            )
            .map((item) => (
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
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  <span className="text-[11px]">{item.title}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>

                {item.hasDropdown && openDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-48 z-50">
                    {renderDropdownContent()}
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="border-1 px-2 py-1 border-gray-400 rounded-sm flex gap-2 cursor-pointer">
            <img src={translateIcon} alt="translate_icon" className="h-6 w-6" />
            <span className="text-gray-700 text-base font-semibold">বাং</span>
          </div>
          <div className="flex items-center space-x-1 text-green-600 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">16910</span>
          </div>
          <Button size="sm">লগ-ইন</Button>
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
                <span className="font-medium">{item.title}</span>
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
                  {sampleDropdownItems.map((dropdownItem, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block p-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded"
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
