import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface SetImageProps extends ImageProps {
  src: string;
  caption?: string;
  width?: number;
  link?: string;
  alt: string;
}

export default function SetImage({ src, caption,alt, width, link }: SetImageProps) {
  return (
    
    link? (
            <Link href={link} passHref style={{width: width? width+"%" : "none"}} className='relative self-center h-max'>
                <img src={src} alt={alt} />
                <Caption>{caption}</Caption>
            </Link>
    ): (
        <div style={{width: width? width+"%" : "none"}} className='relative self-center h-max'>
            <img src={src} alt={alt} />
            <Caption>{caption}</Caption>
        </div>
    )



  );
}



const Caption = styled.small`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;
