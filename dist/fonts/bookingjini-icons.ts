export type BookingjiniIconsId =
  | "24-hour-front-desk_dual-tone"
  | "24-hour-front-desk_fill"
  | "24-hour-front-desk_line"
  | "24-Hour-Security_dual-tone"
  | "24-Hour-Security_fill"
  | "24-Hour-Security_line";

export type BookingjiniIconsKey =
  | "i24HourFrontDeskDualTone"
  | "i24HourFrontDeskFill"
  | "i24HourFrontDeskLine"
  | "i24HourSecurityDualTone"
  | "i24HourSecurityFill"
  | "i24HourSecurityLine";

export enum BookingjiniIcons {
  i24HourFrontDeskDualTone = "24-hour-front-desk_dual-tone",
  i24HourFrontDeskFill = "24-hour-front-desk_fill",
  i24HourFrontDeskLine = "24-hour-front-desk_line",
  i24HourSecurityDualTone = "24-Hour-Security_dual-tone",
  i24HourSecurityFill = "24-Hour-Security_fill",
  i24HourSecurityLine = "24-Hour-Security_line",
}

export const BOOKINGJINI_ICONS_CODEPOINTS: { [key in BookingjiniIcons]: string } = {
  [BookingjiniIcons.i24HourFrontDeskDualTone]: "61697",
  [BookingjiniIcons.i24HourFrontDeskFill]: "61698",
  [BookingjiniIcons.i24HourFrontDeskLine]: "61699",
  [BookingjiniIcons.i24HourSecurityDualTone]: "61700",
  [BookingjiniIcons.i24HourSecurityFill]: "61701",
  [BookingjiniIcons.i24HourSecurityLine]: "61702",
};
