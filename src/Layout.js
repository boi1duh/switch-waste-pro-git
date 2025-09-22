import React from 'react';
import Footer from './Footer'; // Assuming Footer is in the same directory

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;