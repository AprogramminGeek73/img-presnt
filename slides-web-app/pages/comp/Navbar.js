import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex items-center w-full justify-between">
      {/* Left side - Circular Image */}
      <div className="flex items-center">
        <Image
          src="/images/logo.jpg" // Replace with your image path
          alt="Logo"
          width={50} // Width of the circular image
          height={50} // Height of the circular image
          className="rounded-full" // Circular image
        />
      </div>

      {/* Centered Heading */}
      <div className="flex-1 text-center">
        <h1 className="text-white text-2xl font-bold">MNSS RAI EVENTS</h1>
      </div>
      
      {/* Right side (optional - for spacing or other content) */}
      <div></div> {/* This can be empty or used for other navbar items */}
    </nav>
  );
}