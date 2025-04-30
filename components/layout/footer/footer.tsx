import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { Icon } from "../../util/icon";
import { GlobalFooter, ThemesTheme } from "../../../tina/__generated__/types";
import { Input, Button } from "@material-tailwind/react";

export const Footer = ({ data, theme, Style}: {data:GlobalFooter, theme:ThemesTheme, Style:string}) => {
const date = new Date();
const year = date.getFullYear();
const style = {
  spacer: {
    backgroundColor : theme.colorSecondary
  },
}
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <footer id="contact" className={`font-semibold leading-7 bg-right bg-no-repeat bg-cover back-footer-${Style} lg:bg-center`}>
      <Container className="relative pt-40" size="small">
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='flex-grow mx-2 my-6 sm:flex-grow-0'>
            <h4 className='underline'>{data.links.name}</h4>
            <p className='flex flex-col flex-nowrap'>
              {data.links.nav && 
              data.links.nav.map((item, i)=>{
                return(
                  <a href={item.link} key={data.links.name + i} className="hover">{item.name}</a>
                )
              })}
            </p>
          </div>
          <div className='flex-grow mx-2 my-6 sm:flex-grow-0'>
            <h4 className='underline'>{data.contact.name}</h4>
            <p className='flex flex-col flex-nowrap'>
              <a href={data.contact.laddr} target="_blank" rel="noopener noreferrer" className="hover">
                {data.contact.addr}
              </a>
              {data.contact.phone.map((item,i)=>{
                return <a key={'phone'+i} href={`tel:${item}`} className="hover">{item}</a>
              })}
              {data.contact.email.map((item,i)=>{
                return <a key={'mailto'+i} href={`mailto:${item}`} className="hover">{item}</a>
              })}
            </p>
          </div>
          <div className='flex-grow mx-2 my-6 sm:flex-grow-0'>
            <div>
                <p>Abonnez-vous à la Newsletter</p>

              <form className="flex flex-row flex-nowrap" method="post" action="https://gazette.lacrouzie.fr/subscription/form" >
                <input type="hidden" name="nonce" />
                <Input
                  type="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }} onResize={undefined} onResizeCapture={undefined}                />
                
                <p className="hidden">  
                  <input id="f5805" type="checkbox" name="l" checked value="f5805ee6-4b51-4877-ba1b-99a7bd9c00ce" />
      <label htmlFor="f5805">La Gazette (mensuelle)</label>
    </p>
                <Button
                  size="sm"
                  color={email ? "gray" : "blue-gray"}
                  disabled={!email}
                  className="rounded" onResize={undefined} onResizeCapture={undefined} type="submit">
                  OK
                </Button>
                </form>
            </div>
            <div>
            {data.social && data.social.facebook && (
              <a
                className="inline-block opacity-80 transition duration-150 ease-out hover"
                href={data.social.facebook}
                target="_blank"
              >
                <FaFacebookF size={'2em'}
                  className={`hover`}
                />
              </a>
            )}
            {data.social && data.social.instagram && (
              <a
                className="inline-block opacity-80 transition duration-150 ease-out hover"
                href={data.social.instagram}
                target="_blank"
              >
                <AiFillInstagram size={'2em'}
                  className={`hover`}
                />
              </a>
            )}
            {data.social && data.social.pinterest && (
              <a
                className="inline-block opacity-80 transition duration-150 ease-out hover"
                href={data.social.pinterest}
                target="_blank"
              >
                <FaPinterest size={'2em'}
                  className={`hover`}
                />
              </a>
            )}
            {data.social && data.social.twitter && (
              <a
                className="inline-block opacity-80 transition duration-150 ease-out hover"
                href={data.social.twitter}
                target="_blank"
              >
                <FaPinterest size={'2em'}
                  className={`hover`}
                />
              </a>
            )}
            </div>
          </div>
        </div>
        <div className='mx-auto mt-10 mb-0 w-5/12 h-1'style={style.spacer}></div>
        <div className='flex flex-row flex-wrap justify-center my-10'>
          {data.part.imgpart && 
            data.part.imgpart.map((item,i)=>{
              return (
              <a href={item.link} target="_blank" key={'part'+i} className='mx-12 my-2'>
                <img src={item.img} alt={item.name} className='w-auto h-20'/>
              </a>
          )})}

        </div>

        <div className='mx-auto mt-0 mb-12 w-1/12 h-1' style={style.spacer}></div>
        <div className='flex flex-col flex-nowrap justify-center'>
          {data.legal.legal &&
            <a href={data.legal.legal} className='text-center hover'>Mentions légales</a>  
          }
          {data.legal.copyright &&
            <p className='text-center'>Copyright 2023 - {year} : {data.legal.copyright} </p>
          }
        </div>
      </Container>
    </footer>
  );
};
