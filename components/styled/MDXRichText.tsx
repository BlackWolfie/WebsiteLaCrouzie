import { Language } from 'prism-react-renderer';
import styled from 'styled-components';
import { Components, TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import ArticleImage from './ArticleImage';
import Linkd from './Link';
import Quote from './Quote';

const Container = styled.div`
  display: flex;
  ${'' /* Opting-out of margin-collapse */}

  flex-direction: column;
  width: 100%;
  color: inherit;
  p {
    font-size: 16px;
    line-height: 150%;
  }
  section:not(:last-child) {
    margin-bottom: 3.8rem;
  }

  a {
    word-break: break-word;
  }

  a:hover{
    color: blue;
  }

  & > section,
  .footnotes {
    ${'' /* content-visibility: auto; */}
  }

  ol,
  ul {
    margin: 0;
    padding-left: 2.4rem;
    li {
      list-style: disc;
      width: fit-content;
      margin: auto;
      & > * {
        vertical-align: top;
      }
    }
  }
  
`;

const Paragraph = styled.p`
  hanging-punctuation: first;
  & + ul,
  & + li {
    margin-top: -1.5rem !important;
  }
`;
const FirstHeading = styled.h1`
  line-height: 3.9rem;
`;

const SecondHeading = styled.h2`
  line-height: 3.75rem;
`;

const ThirdHeading = styled.h3`
  line-height: 3.4rem;
`;
const FourthHeading = styled.h4`
  line-height: 3.2rem;
`;
const FiftHeading = styled.h5`
  line-height: 2.9rem;
`;
const SixtHeading = styled.h6`
  line-height: 2.7rem;
`;

const Break = styled.br`
  display: block;
  content: '';
  margin: 0;
  height: 1rem;
`;

const TextHighlight = styled.code`
  display: inline-block;
  padding: 0 0.6rem;
  color: rgb(var(--textSecondary));
  border-radius: 0.4rem;
  background-color: rgba(var(--primary), 0.8);
  font-size: 1.6rem;
  font-family: inherit;
`;

const components = {
  h1: FirstHeading,
  h2: SecondHeading,
  h3: ThirdHeading,
  h4: FourthHeading,
  h5: FiftHeading,
  h6: SixtHeading,
  p: Paragraph,
  br: Break,
  code: TextHighlight,
  Linkd,
  Quote,
  ArticleImage,
};

export default function RichText(props: { content: TinaMarkdownContent | TinaMarkdownContent[] }) {
  return (
    <Container>
      <TinaMarkdown content={props.content} components={components as Components<object>} />
    </Container>
  );
}
