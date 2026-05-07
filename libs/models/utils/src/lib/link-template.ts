export interface LinkTemplateProperty {
  link?: string;
  label?: string;
  title?: string;
  class?: string;
  hideMobile?: boolean;
  children?: LinkTemplateProperty[];
  external?: boolean;
}
