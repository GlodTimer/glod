declare namespace StyleCssModule {
  export interface IStyleCss {
    segment: string;
    segmentComparison: string;
    segmentComparisonGold: string;
    segmentComparisonGreen: string;
    segmentComparisonRed: string;
    segmentEndedAt: string;
    segment__comparison: string;
    "segment__comparison--gold": string;
    "segment__comparison--green": string;
    "segment__comparison--red": string;
    segment__endedAt: string;
  }
}

declare const StyleCssModule: StyleCssModule.IStyleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleCssModule.IStyleCss;
};

export = StyleCssModule;
