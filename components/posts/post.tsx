/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import format from "date-fns/format";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Prism } from "tinacms/dist/rich-text/prism";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import { PostType } from "../../pages/posts/[filename]";
import { tinaField } from "tinacms/dist/react";

const components: Components<{
  BlockQuote: {
    children: TinaMarkdownContent;
    authorName: string;
  };
  DateTime: {
    format?: string;
  };
  NewsletterSignup: {
    placeholder: string;
    buttonText: string;
    children: TinaMarkdownContent;
    disclaimer?: TinaMarkdownContent;
  };
}> = {
  code_block: (props) => <Prism {...props} />,
  BlockQuote: (props: {
    children: TinaMarkdownContent;
    authorName: string;
  }) => {
    return (
      <div>
        <blockquote>
          <TinaMarkdown content={props.children} />
          {props.authorName}
        </blockquote>
      </div>
    );
  },
  DateTime: (props) => {
    const dt = React.useMemo(() => {
      return new Date();
    }, []);

    switch (props.format) {
      case "iso":
        return <span>{format(dt, "yyyy-MM-dd")}</span>;
      case "utc":
        return <span>{format(dt, "eee, dd MMM yyyy HH:mm:ss OOOO")}</span>;
      case "local":
        return <span>{format(dt, "P")}</span>;
      default:
        return <span>{format(dt, "P")}</span>;
    }
  },
  NewsletterSignup: (props) => {
    return (
      <div className="bg-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="">
            <TinaMarkdown content={props.children} />
          </div>
          <div className="mt-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="px-5 py-3 w-full placeholder-gray-400 rounded-md border border-gray-300 shadow-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:max-w-xs"
                placeholder={props.placeholder}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex justify-center items-center px-5 py-3 w-full text-base font-medium text-white bg-teal-600 rounded-md border border-transparent hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  {props.buttonText}
                </button>
              </div>
            </form>
            <div className="mt-3 text-sm text-gray-500">
              {props.disclaimer && <TinaMarkdown content={props.disclaimer} />}
            </div>
          </div>
        </div>
      </div>
    );
  },
  img: (props) => (
    <span className="flex justify-center items-center">
      <img src={props.url} alt={props.alt} />
    </span>
  ),
};

export const Post = (props: PostType) => {
  const titleColorClasses = {
    blue: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500",
    teal: "from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-300 to-pink-500",
    purple:
      "from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500",
    orange:
      "from-orange-300 to-orange-600 dark:from-orange-200 dark:to-orange-500",
    yellow:
      "from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-500",
  };

  const date = new Date(props.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <Section className="flex-1">
      <Container width="medium" className={`flex-1 pb-2`} size="large">
        <h2
          data-tina-field={tinaField(props, "title")}
          className={`relative mb-8 w-full text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r`}
          >
            {props.title}
          </span>
        </h2>
        <div
          data-tina-field={tinaField(props, "author")}
          className="flex justify-center items-center mb-16"
        >
          {props.author && (
            <>
              <div className="flex-shrink-0 mr-4">
                <img
                  data-tina-field={tinaField(props.author, "avatar")}
                  className="object-cover w-14 h-14 rounded-full shadow-sm"
                  src={props.author.avatar}
                  alt={props.author.name}
                />
              </div>
              <p
                data-tina-field={tinaField(props.author, "name")}
                className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white"
              >
                {props.author.name}
              </p>
              <span className="mx-2 font-bold text-gray-200 dark:text-gray-500">
                —
              </span>
            </>
          )}
          <p
            data-tina-field={tinaField(props, "date")}
            className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150"
          >
            {formattedDate}
          </p>
        </div>
      </Container>
      {props.heroImg && (
        <div className="px-4 w-full">
          <div
            data-tina-field={tinaField(props, "heroImg")}
            className="relative mx-auto max-w-4xl lg:max-w-5xl"
          >
            <img
              src={props.heroImg}
              className="absolute block rounded-lg w-full h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              aria-hidden="true"
            />
            <img
              src={props.heroImg}
              alt={props.title}
              className="block relative z-10 mb-14 w-full h-auto rounded-lg opacity-100"
            />
          </div>
        </div>
      )}
      <Container className={`flex-1 pt-4`} width="small" size="large">
        <div
          data-tina-field={tinaField(props, "_body")}
          className="w-full max-w-none"
        >
          <TinaMarkdown components={components} content={props._body} />
        </div>
      </Container>
    </Section>
  );
};
