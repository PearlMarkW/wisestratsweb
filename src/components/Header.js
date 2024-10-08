import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo on the left */}
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image src="/images/wisestrats_logo.png" alt="Wise Strategies Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Navigation Links for larger screens (hidden on mobile) */}
        <nav className={`hidden md:flex ${styles.nav}`}>
          <Link href="/" passHref>Home</Link>
          <Link href="/investing" passHref>Investing</Link>
          <Link href="/consulting" passHref>Consulting</Link>
          <Link href="/careers" passHref>Careers</Link>
          <Link href="/contact-us" passHref>Contact us</Link>
          {/* LinkedIn icon */}
          <Link href="https://www.linkedin.com/company/pearl-io" passHref>
            <Image src="/images/linkedin.png" alt="LinkedIn" className={styles.linkedinIcon} width={20} height={20} />
          </Link>
        </nav>
        {/* <nav className="hidden md:flex">
          <Link href="/" passHref>Home</Link>
          <Link href="/investing" passHref>Investing</Link>
          <Link href="/consulting" passHref>Consulting</Link>
          <Link href="/careers" passHref>Careers</Link>
          <Link href="/contact-us" passHref>Contact us</Link>
          <Link href="https://www.linkedin.com/company/pearl-io" passHref>
            <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
          </Link>
        </nav> */}

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <Image
              src={isOpen ? "/images/closewindow.png" : "/images/hamburger.png"}
              alt="Menu Icon"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible only on small screens when isOpen is true) */}
      {isOpen && (
        <nav className={`${styles.mobileNav} md:hidden`}>
          <Link href="/" passHref>Home</Link>
          <Link href="/investing" passHref>Investing</Link>
          <Link href="/consulting" passHref>Consulting</Link>
          <Link href="/careers" passHref>Careers</Link>
          <Link href="/contact-us" passHref>Contact us</Link>
          <Link href="https://www.linkedin.com/company/pearl-io" passHref>
            <Image src="/images/linkedin.png" alt="LinkedIn" className={styles.linkedinIcon} width={20} height={20} />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;


// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '../styles/header.module.css';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     console.log("Menu toggled!", isOpen);
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         {/* Logo on the left */}
//         <div className={styles.logo}>
//           <Link href="/" passHref>
//             <Image src="/images/wisestrats_logo.png" alt="Wise Strategies Logo" width={150} height={50} />
//           </Link>
//         </div>

//         {/* Navigation Links for larger screens */}
//         <nav className={`hidden md:flex ${styles.nav}`}>
//           <Link href="/" passHref>Home</Link>
//           <Link href="/investing" passHref>Investing</Link>
//           <Link href="/consulting" passHref>Consulting</Link>
//           <Link href="/careers" passHref>Careers</Link>
//           <Link href="/contact-us" passHref>Contact us</Link>
//           {/* LinkedIn icon */}
//           <Link href="https://www.linkedin.com/company/pearl-io" passHref>
//             <Image src="/images/linkedin.png" alt="LinkedIn" className={styles.linkedinIcon} width={20} height={20} />
//           </Link>
//         </nav>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-black">
//             <Image
//               src={isOpen ? "/images/closewindow.png" : "/images/hamburger.png"}
//               alt="Menu Icon"
//               width={30}
//               height={30}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (visible only on small screens when isOpen is true) */}
//       {isOpen && (
//         <nav className={`${styles.mobileNav} md:hidden`}>
//           <Link href="/" passHref>Home</Link>
//           <Link href="/investing" passHref>Investing</Link>
//           <Link href="/consulting" passHref>Consulting</Link>
//           <Link href="/careers" passHref>Careers</Link>
//           <Link href="/contact-us" passHref>Contact us</Link>
//           <Link href="https://www.linkedin.com/company/pearl-io" passHref>
//             <Image src="/images/linkedin.png" alt="LinkedIn" className={styles.linkedinIcon} width={20} height={20} />
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '../styles/header.module.css';

// const Header = () => {
//     return (
//       <header className={styles.header}>
//         <div className={styles.container}>
//           {/* Logo on the left */}
//           <div className={styles.logo}>
//             <Link href="/" passHref>
//               <Image src="/images/wisestrats_logo.png" alt="Wise Strategies Logo" width={150} height={50} />
//             </Link>
//           </div>
  
//           {/* Navigation Links on the right */}
//           <nav className={styles.nav}> 
//             <Link href="/" passHref>Home</Link>
//             <Link href="/investing" passHref>Investing</Link>
//             <Link href="/consulting" passHref>Consulting</Link>
//             <Link href="/careers" passHref>Careers</Link>
//             <Link href="/contact-us" passHref>Contact us</Link>
//             {/* LinkedIn icon */}
//             <Link href="https://www.linkedin.com/company/pearl-io" passHref>
//               <Image src="/images/linkedin.png" alt="LinkedIn" className={styles.linkedinIcon} width={20} height={20} />
//             </Link>
//           </nav>
//         </div>
//       </header>
//     );
//   };
  
//   export default Header;