import { useContext, Fragment } from "react";
import { Tab } from "@headlessui/react";
import { CountryContext } from "../context/country-context";
import Navbar from "../components/Navbar";
import HomeFooter from "../components/HomeFooter";
import Loading from "../components/Loading";

function Home() {
  const { filterCountryData } = useContext(CountryContext);
  if (filterCountryData.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <Tab.Group>
        <Navbar />
        <Tab.Panels className="grid grid-cols-2 md:mx-32 max-md:grid-cols-1 gap-4">
          {filterCountryData &&
            filterCountryData.map((country) => (
              <Fragment key={country.name}>
                <div className="border border-slate-900 inline-flex flex-row m-2 p-2 items-center">
                  <img src={country.flag} alt="flag" className="w-24 h-20" />
                  <div className="ml-8">
                    <p>{country.name}</p>
                    <p>{country.region}</p>
                  </div>
                </div>
              </Fragment>
            ))}
        </Tab.Panels>
      </Tab.Group>
      <HomeFooter />
    </div>
  );
}

export default Home;
