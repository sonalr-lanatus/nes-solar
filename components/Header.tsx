import React from "react";

function Header() {
  return (
    <div>
      <header className="fixed top-0 w-full py-5 bg-white text-white text-center">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../assets/nes-solar-header-logo-35420220703.png"
            className="h-12"
            alt="Flowbite Logo"
          />
        </a>
      </header>
    </div>
  );
}

export default Header;
