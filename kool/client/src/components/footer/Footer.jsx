// import {
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillTwitterCircle,
// } from "react-icons/ai";
import { motion } from "framer-motion";
import { Logo } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-4 border-primary bg-bgfooter pt-12 mt-24">
      {/* Footer top */}
      <div className="box flex flex-col md:flex-row justify-between border-b-2 border-primary pb-10 gap-8">
        {/* Footer top left */}
        <div className="basis-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
          <Logo />
          <p>
          Where authentic flavors meet creativity! Explore a collection of cherished family recipes, traditional dishes, and modern favorites.
           Dive into the stories behind each meal and connect with a community of food lovers who celebrate the joy of cooking and sharing.
          </p>
        </div>
        {/* Footer top right */}
        <div className="flex gap-10 basis-1/2 justify-center md:justify-end flex-wrap md:flex-nowrap">
          {/* Footer links */}
          <ul className="flex flex-col gap-2 font-semibold mx-8 items-center md:items-start">
            <li className="text-gray-700 text-sm text-bold mb-2">Navigate</li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to={""} >Home</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to={"recipe"} >Recipes</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to={"blog"} >Blogs</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to={"contact"} >Contact</Link>
            </motion.li>
          </ul>
          {/* <ul className="flex flex-col gap-2 font-semibold mx-8 items-center md:items-start">
            <li className="text-gray-700 text-sm text-bold mb-2">Kool</li>
            <motion.li whileHover={{ x: 5 }}>
              <Link>About</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link>Privacy policy</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link>Cookies</Link>
            </motion.li>
          </ul> */}
          
        </div>
      </div>
      {/* Footer bottom */}
      <div className="box flex justify-center sm:justify-between flex-col sm:flex-row w-full gap-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Kool. All rights reserved
        </p>
        {/* Footer social links */}
        {/* <ul className="flex justify-center gap-6 text-xl">
          <motion.li
            className="border border-primary p-1 rounded-full hover:text-gray-500"
            whileHover={{ y: -4 }}
          >
            <a
              href="#"
              aria-label="Follow me on github"
            >
              <AiFillGithub />
            </a>
          </motion.li>
          <motion.li
            className="border border-primary p-1 rounded-full hover:text-blue-400"
            whileHover={{ y: -4 }}
          >
            <a
              href="#"
              aria-label="Follow me on twitter"
            >
              <AiFillTwitterCircle />
            </a>
          </motion.li>
          <motion.li
            className="border border-primary p-1 rounded-full hover:text-blue-600"
            whileHover={{ y: -4 }}
          >
            <a
              href="#"
              aria-label="Follow me on linkedin"
            >
              <AiFillLinkedin />
            </a>
          </motion.li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
