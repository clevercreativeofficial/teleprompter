import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const navigation = () => {
  return (
    <nav className='sticky top-0 z-10 font-sans backdrop-blur-sm bg-background/90'>
      <Container>
        <div className='flex items-center justify-between py-6 border-b border-gray-200/10'>
          <div className=''>
            <div className='flex items-center justify-between gap-2'>
              <div>
                <div>
                  <Image
                    src={"./logo.svg"}
                    alt='PromptRoll Logo'
                    width={180}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Link
              href={"/"}
              className='text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200'>
              Home
            </Link>
            <Link
              href={"/"}
              className='text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200'>
              Features
            </Link>
            <Link
              href={"/"}
              className='text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200'>
              Download
            </Link>
            <Link
              href={"/"}
              className='text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200'>
              Contact
            </Link>
            <div>
              <Link
                href={"/"}
                className='text-sm font-medium text-background bg-amber-400 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default navigation;
