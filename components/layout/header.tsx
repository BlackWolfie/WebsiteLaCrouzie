import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from ".";
import { tinaField } from "tinacms/dist/react";
import { Themes, ThemesHeader } from "../../tina/__generated__/types";
import { Icon } from "../util/svg";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
function NavList({ data, style }: {data:Themes, style:any}) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {data.header.nav && data.header.nav.map(function (item, i) {
        return (
        <Typography
          as="li"
          variant="small"
          className="p-1 font-medium"
          key={data.header.name + i}
        >
          <a href={item.href} className={`flex items-center transition-colors text-${data._sys.filename}-secondary hover:text-${data._sys.filename}-terciary`}>
            {item.label}
          </a>
        </Typography>
        )
      })} 
    </ul>
  );
}

export const Header = ({ data }: {data:Themes}) => {
  const router = useRouter();
  const theme = useTheme();

  const Style = {
    color :  data.theme.colorSecondary ,

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
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3" shadow={false} blurred={false} fullWidth={true}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Icon
          className={`text-${data._sys.filename}-secondary hover:text-${data._sys.filename}-terciary`}
            tinaField={tinaField(data.header, "icon")}
            data={{
              name: data.header.icon.name,
              color: data.theme.colorSecondary,
            }}
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList data={data} style={Style}/>
        </div>
        <IconButton
          variant="text"
          className={`ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden`}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          style={Style}
        >
          {openNav ? (
            <HiXMark className="h-6 w-6" strokeWidth={2} />
          ) : (
            <HiBars3 className="h-6 w-6" strokeWidth={2} fill={data.theme.colorSecondary}/>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList data={data} style={Style}/>
      </Collapse>
    </Navbar>
  );
};
