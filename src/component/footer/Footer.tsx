import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer px-7 py-4 border-t bg-amber-300 text-white text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <p>
            Powered by{" "}
            <Link href="https://www.facebook.com/mehadeehasan" className="text-red-500 hover:underline hover:text-red-900">
              Mehadee Hasan
            </Link>
          </p>
        </div>
        {/* <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href={"#"} className="hover:bg-blue-500 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
