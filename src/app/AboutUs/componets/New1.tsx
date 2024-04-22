// components/Navbar.tsx
import Link from 'next/link';
import SubMenu from './SubMenu';

const Navbar: React.FC = () => {
  const products = [
    { title: 'Tata Structura YST 210', link: '/yst210' },
    { title: 'Tata Structura YST 310 & YST 355', link: '/yst355' },
    { title: 'Tata Structura Z+', link: '/zplus' },
    { title: 'Tata Ezyfit', link: '/ezyfit' },
  ];

  const applications = [
    { title: 'Application 1', link: '/application1' },
    { title: 'Application 2', link: '/application2' },
    { title: 'Application 3', link: '/application3' },
    { title: 'Application 4', link: '/application4' },
  ];

  const media = [
    { title: 'Media 1', link: '/media1' },
    { title: 'Media 2', link: '/media2' },
    { title: 'Media 3', link: '/media3' },
    { title: 'Media 4', link: '/media4' },
  ];

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About Us</a></Link>
        </li>
        <SubMenu title="Our Products" items={products} />
        <SubMenu title="Applications" items={applications} />
        <li>
          <Link href="/building-guide"><a>Building Guide</a></Link>
        </li>
        <SubMenu title="Media" items={media} />
        <li>
          <Link href="/nation-of-india"><a>Nation Of India</a></Link>
        </li>
        <li>
          <Link href="/contact-us"><a>Contact Us</a></Link>
        </li>
        <li>
          <Link href="/shop-now"><a>Shop Now</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
