export type InlineSegment =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "link"; label: string; href: string; strong?: boolean };

export interface PersonLink {
  name: string;
  url: string;
}

export interface MemberGroup {
  title: InlineSegment[];
  statement: InlineSegment[];
  members: PersonLink[];
}

export interface DownloadLink {
  title: string;
  statement: string;
  url: string;
  buttonText: string;
}
