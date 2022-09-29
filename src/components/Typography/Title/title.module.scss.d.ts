export type Styles = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type ClassesType = keyof Styles;

declare const styles: Styles;

export default styles;
