/// <reference types="react-scripts" />
// Declare modules for image imports
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: Record<string, any>;
  export default content;
}

declare module "*.pdf" {
  const content: string;
  export default content;
}

// For CSS/SCSS modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Environment variables
interface ImportMetaEnv {
  readonly REACT_APP_API_URL: string;
  readonly REACT_APP_EMAILJS_SERVICE_ID: string;
  readonly REACT_APP_EMAILJS_TEMPLATE_ID: string;
  readonly REACT_APP_EMAILJS_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
