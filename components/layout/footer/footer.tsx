import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { Icon } from "../../util/icon";
import { GlobalFooter, ThemesTheme } from "../../../tina/__generated__/types";

export const Footer = ({ data, theme}: {data:GlobalFooter, theme:ThemesTheme}) => {
const date = new Date();
const year = date.getFullYear();
const style = {
  spacer: {
    backgroundColor : theme.colorSecondary
  },
}
  return (
    <footer className={`bg-gradient-to-br`}>
      <Container className="relative" size="small">
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='my-6 mx-2  flex-grow sm:flex-grow-0'>
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
          <div className='my-6 mx-2 flex-grow sm:flex-grow-0'>
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
          <div className='my-6 mx-2 flex-grow sm:flex-grow-0'>
            <div>
                <p>Abonnez-vous à la Newsletter</p>
                <form >
                    <input type="email" name="S'abonner à la newsletter" id=""/>
                    <input type="submit" value="OK"/>
                </form>
            </div>
            <div>
            {data.social && data.social.facebook && (
              <a
                className="inline-block opacity-80 hover transition ease-out duration-150"
                href={data.social.facebook}
                target="_blank"
              >
                <FaFacebookF
                  className={`hover`}
                />
              </a>
            )}
            {data.social && data.social.instagram && (
              <a
                className="inline-block opacity-80 hover  transition ease-out duration-150"
                href={data.social.instagram}
                target="_blank"
              >
                <AiFillInstagram
                  className={`hover`}
                />
              </a>
            )}
            {data.social && data.social.pinterest && (
              <a
                className="inline-block opacity-80 hover transition ease-out duration-150"
                href={data.social.pinterest}
                target="_blank"
              >
                <FaPinterest
                  className={`hover`}
                />
              </a>
            )}
            {data.social && data.social.twitter && (
              <a
                className="inline-block opacity-80 hover transition ease-out duration-150"
                href={data.social.twitter}
                target="_blank"
              >
                <FaPinterest
                  className={`hover`}
                />
              </a>
            )}
            </div>
          </div>
        </div>
        <div className='mt-10 mb-0 w-5/12 mx-auto h-1'style={style.spacer}></div>
        <div className='flex flex-wrap flex-row justify-center my-10'>
          {data.part.imgpart && 
            data.part.imgpart.map((item,i)=>{
              return (
              <a href={item.link} target="_blank" key={'part'+i} className='mx-12 my-2'>
                <img src={item.img} alt={item.name} className='w-auto h-20'/>
              </a>
          )})}

        </div>

        <div className='mt-0 w-1/12 mx-auto h-1 mb-12' style={style.spacer}></div>
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
