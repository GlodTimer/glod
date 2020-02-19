declare namespace StylesCssModule {
  export interface IStylesCss {
    app: string;
  }
}

declare const StylesCssModule: StylesCssModule.IStylesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesCssModule.IStylesCss;
};

export = StylesCssModule;
