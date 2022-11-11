import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

function HomeFooter() {
  return (
    <footer className="flex justify-center items-center mt-20">
      <div>
        <div className="inline-flex flex-row w-full h-10 justify-center space-x-4">
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiFacebook size={15} />
          </div>
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiTwitter size={15} />
          </div>
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiLinkedin size={15} />
          </div>
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiYoutube size={15} />
          </div>
        </div>
        <div>
          <p className="text-center text-slate-400 text-sm font-bold my-4">
            Example@email.com
          </p>
          <p className="text-center text-slate-400 text-sm font-bold my-4">
            Copyright © 2020 Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
