import React, { useState } from "react";
import { useRouter } from "next/router";
import { tinaField } from "tinacms/dist/react";
import { Themes } from "../../tina/__generated__/types";
import { Icon } from "../util/svg";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiBars3, HiXMark } from "react-icons/hi2";


function NavList({ data }: {data:Themes}) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {data.header.nav && data.header.nav.map(function (item, i) {
        return (
        <Typography
          as="li"
          variant="small"
          className="p-1 font-medium"
          key={data.header.name + i}
          tinafield={tinaField(data.header, "nav")}
        >
          <a href={item.href} className={`flex items-center ${data._sys.filename}`}>
            {item.label}
          </a>
        </Typography>
        )
      })} 
    </ul>
  );
}

export const Header = ({ data, title }: {data:Themes, title:String}) => {
  const router = useRouter();
  const Style = {
    secondary: {
      color :  data.theme.colorSecondary ,
    },
    tertiary: {
      color :  data.theme.colorTerciary ,
    },
    bgPrimary:{
      backgroundColor: data.theme.colorPrimary
    }
    

  }
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <><div className={`back-${data._sys.filename} bg-cover bg-no-repeat bg-[50%_40%] w-full h-[90vh] `}>
        <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 595.37 219.55" 
        preserveAspectRatio="none" width={'100%'} height={'76vh'} fill={data.theme.colorPrimary} className='absolute z-0 -top-96'>
          <g id="Calque_3" data-name="Calque 3">
            <path d="m595.32,178.7C393.68,190.19,186.37,138.87.05,219.55L0,0h595.37l-.05,178.7Z"/>
          </g>
        </svg>
        <div className={`flex flex-col flex-nowrap justify-between w-full h-[90vh]`}>
          <Navbar className={`mx-auto z-10 px-6 py-3 bg-transparent ${data._sys.filename}`} shadow={false} blurred={false} fullWidth={true}>
            <div className="flex items-center justify-between text-blue-gray-900">
              <Typography
                as="a"
                href="/"
                variant="h6"
                className="mr-4 cursor-pointer py-1.5"
              >
                <Icon
                className={data._sys.filename}
                  tinaField={tinaField(data.header, "icon")}
                  data={{
                    name: data.header.icon.name,
                    color: data.theme.colorSecondary,
                  }}
                />
              </Typography>
              <div className="hidden lg:block">
                <NavList data={data} />
              </div>
              <IconButton
                variant="text"
                className={`ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden ${data._sys.filename}`}
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                style={Style.secondary}
              >
                {openNav ? (
                  <HiXMark className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <HiBars3 className="h-6 w-6" strokeWidth={2} fill={data.theme.colorSecondary}/>
                )}
              </IconButton>
            </div>
            <Collapse open={openNav}>
              <NavList data={data}/>
            </Collapse>
          </Navbar>
          <div className={` mb-2`} style={Style.bgPrimary}>
            <h1 className={`${data._sys.filename} text-center`}  tinaField={tinaField(title)}>
                {title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
