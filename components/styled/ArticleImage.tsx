import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface ArticleImageProps extends ImageProps {
  src: string;
  caption?: string;
  alt: string;
}

export default function ArticleImage({ src, caption, alt, ...rest }: ArticleImageProps) {
  return (
    
        <><Image
      src={src}
      alt={alt || caption}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkj6+vBwAC4AFuNSmtGAAAAABJRU5ErkJggg=="
      {...rest} /></>

  );
}
