
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  const serviceLinks = [
    { name: "GST", href: "#services" },
    { name: "TDS", href: "#services" },
    { name: "Payroll", href: "#services" },
    { name: "ITR", href: "#services" },
    { name: "Accounting", href: "#services" },
    { name: "Corporate Governance", href: "#services" }
  ];

  const resourceLinks = [
    { name: "Blog", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Tax Calculator", href: "#" },
    { name: "Resources", href: "#" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/918896710095",
      icon: (
        <svg className="w-5 h-5" fill="#9efb56" viewBox="0 0 24 24">
          <path d="M12.012 2C6.486 2 2.013 6.474 2.013 12c0 1.99.525 3.851 1.44 5.463L2 22l4.537-1.44C8.149 21.475 10.01 22 12.012 22c5.525 0 9.988-4.474 9.988-10s-4.463-10-9.988-10zm5.765 14.465c-.24.678-1.203 1.24-1.98 1.386-.543.102-1.153.145-3.564-.76-3.289-1.233-5.412-4.645-5.578-4.86-.165-.214-1.351-1.798-1.351-3.434 0-1.635.855-2.446 1.16-2.785.306-.34.669-.425.892-.425.214 0 .428.01.613.02.196.01.458-.076.717.547.26.623.884 2.2.959 2.363.076.163.127.355.026.57-.101.214-.15.346-.306.534-.153.188-.321.42-.459.565-.153.163-.306.34-.132.668.174.328.773 1.279 1.66 2.07 1.142.99 2.104 1.296 2.403 1.441.306.146.48.122.657-.076.178-.197.765-.893.969-1.2.204-.306.408-.255.688-.153.28.102 1.781.841 2.088.993.306.153.51.229.586.357.076.127.076.738-.164 1.415z"/>
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:savitanivesh@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-medium mb-3">Stay Updated — Subscribe</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-black font-medium rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © {currentYear} Taxify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
