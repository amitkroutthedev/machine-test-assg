import { useContext, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { CountryContext } from "../context/country-context";
import { BiMenu } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
function Navbar() {
  const navigate = useNavigate();
  const { regionData, regionHandler } = useContext(CountryContext);
  const [hambuger, setHambuger] = useState(false);
  const [hambugerClose, setHambugerClose] = useState(false);
  function hambugerHandler() {
    setHambuger(!hambuger);
    setHambugerClose(!hambugerClose);
  }
  const logoutHandler = () => {
    navigate("/");
  };
  return (
    <nav className="mb-10 px-4 pt-1 bg-slate-200 ">
      <div className="w-full inline-flex justify-between items-center">
        <p className="text-2xl font-bold text-black my-4">Countries</p>
        <div className="inline-flex flex-row space-x-2">
          <button onClick={logoutHandler}>
            <FiLogOut size={30} />
          </button>
          <button className="hidden max-md:block" onClick={hambugerHandler}>
            {!hambugerClose ? <BiMenu size={30} /> : <GrClose size={28} />}
          </button>
        </div>
      </div>
      <Tab.List
        className={
          !hambuger
            ? "max-md:hidden md:flex md:flex-row md:justify-around"
            : "flex flex-row max-md:grid max-md:grid-cols-2"
        }
      >
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-4 border-b-gray-700 w-full"
                  : " text-black w-full"
              }
              onClick={() => regionHandler("All")}
            >
              All
            </button>
          )}
        </Tab>
        {regionData &&
          regionData.map((region) => (
            <Tab as={Fragment} key={region}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? "border-b-4 border-b-gray-700 w-full"
                      : " text-black w-full"
                  }
                  onClick={() => regionHandler(region)}
                >
                  {region}
                </button>
              )}
            </Tab>
          ))}
      </Tab.List>
    </nav>
  );
}

export default Navbar;
