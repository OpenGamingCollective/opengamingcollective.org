import type { DownloadLink, MemberGroup } from "./types";

export const members: MemberGroup[] = [
  {
    title: [
      { type: "link", label: "Universal Blue", href: "https://universal-blue.org/" },
      { type: "text", text: " & " },
      { type: "link", label: "Bazzite", href: "https://bazzite.gg/" }
    ],
    statement: [
      {
        type: "text",
        text: "We think the future of Linux gaming is a collaborative effort forged in mutual interest and friendship and want to do our part to make that happen!"
      }
    ],
    members: [
      { name: "Kyle Gospodnetich", url: "https://github.com/KyleGospo" },
      { name: "Hikari", url: "https://github.com/hikariknight" },
      { name: "Noel Miller", url: "https://github.com/noelmiller" },
      { name: "Tulip Blossom", url: "https://github.com/tulilirockz" }
    ]
  },
  {
    title: [{ type: "link", label: "ASUS Linux", href: "https://asus-linux.org/" }],
    statement: [
      {
        type: "text",
        text: "Our team focuses on Linux for many ASUS hardware. In being part of OGC, we aim to provide seamless, high-quality, and early support for users and developers while collaborating with others and reducing fragmentation. In doing so, we more closely bridge the gap between enthusiast hardware and the mainline kernel."
      }
    ],
    members: [
      { name: "NeroReflex", url: "https://github.com/NeroReflex" },
      { name: "Sukiru", url: "https://github.com/kojq" },
      { name: "Dragonn", url: "https://github.com/dragonnn" },
      { name: "Ghoul", url: "https://github.com/Ghoul4500" }
    ]
  },
  {
    title: [{ type: "link", label: "ShadowBlip", href: "https://github.com/ShadowBlip/" }],
    statement: [
      {
        type: "text",
        text: "ShadowBlip is a collection of developers focused on enhancing gaming on Linux with handheld and console-like PCs. Our projects are used in many popular gaming distributions such as SteamOS, Nobara, Playtron, and more. As founding members of the Open Gaming Collective, we focus on delivering projects that benefit the whole gaming on Linux ecosystem."
      }
    ],
    members: [
      { name: "ShadowApex", url: "https://github.com/ShadowApex" },
      { name: "pastaq", url: "https://github.com/pastaq" },
      { name: "Samsagax", url: "https://github.com/samsagax" },
      { name: "ruineka", url: "https://github.com/ruineka" }
    ]
  },
  {
    title: [{ type: "link", label: "PikaOS", href: "https://pika-os.com/" }],
    statement: [
      {
        type: "text",
        text: "One of our goals at Pika is to improve gaming accessibility and performance on Linux, with a particular focus on better support and representation for Debian-based distributions within the gaming ecosystem. The OGC is a great place to further these goals and really maximise and contribute to the great work done by Linux gaming community as a whole."
      }
    ],
    members: [
      { name: "Cosmo", url: "https://github.com/CosmicFusion" },
      { name: "Ferreo", url: "https://github.com/ferrreo" }
    ]
  },
  {
    title: [{ type: "link", label: "Fyra Labs", href: "https://fyralabs.com/" }],
    statement: [
      {
        type: "text",
        text: "Fyra Labs was founded on the mission to bring desktop Linux to the everyday person. We believe that the growing popularity of Linux gaming is beneficial to that goal. Through our founding involvement in OGC, we hope to accelerate the adoption of gaming on Linux, advancing our core mission."
      }
    ],
    members: [
      { name: "Lleyton Gray", url: "https://github.com/lleyton" },
      { name: "Gilver Eckhart", url: "https://github.com/GildedRoach" },
      { name: "Owen Zimmerman", url: "https://github.com/Owen-sz" },
      { name: "Madomado", url: "https://github.com/madonuko" },
      { name: "Riley Loo", url: "https://github.com/zackerthescar" },
      { name: "Jaiden Riordan", url: "https://github.com/nothingneko" },
      { name: "Cappy Ishihara", url: "https://github.com/korewaChino" }
    ]
  }
];

export const partners: MemberGroup = {
  title: [{ type: "text", text: "Strategic Partners & Core Contributors" }],
  statement: [
    { type: "text", text: "Collaborating with " },
    { type: "link", label: "ChimeraOS", href: "https://chimeraos.org/", strong: true },
    { type: "text", text: ", " },
    { type: "link", label: "Nobara", href: "https://nobaraproject.org/", strong: true },
    { type: "text", text: ", and " },
    { type: "link", label: "winesapOS", href: "https://github.com/winesapOS/winesapOS", strong: true },
    { type: "text", text: " to maintain the core plumbing of the ecosystem." }
  ],
  members: [
    { name: "SytheZN", url: "https://github.com/sythezn" },
    { name: "GloriousEggroll", url: "https://github.com/GloriousEggroll" },
    { name: "superm1", url: "https://github.com/superm1" },
    { name: "hphilm", url: "https://github.com/hphilm" },
    { name: "justinweiss", url: "https://github.com/justinweiss" },
    { name: "JustRadical", url: "https://github.com/JustRadical" },
    { name: "R1kaB3rN", url: "https://github.com/R1kaB3rN" },
    { name: "xXJSONDeruloXx", url: "https://github.com/xXJSONDeruloXx" },
    { name: "LionHeartP", url: "https://github.com/LionHeartP" },
    { name: "Alesh Slovak", url: "https://github.com/alkazar" },
    { name: "bouhaa", url: "https://github.com/boukehaarsma23" },
    { name: "LukeShortCloud", url: "https://github.com/LukeShortCloud" }
  ]
};

export const downloads: DownloadLink[] = [
  {
    title: "Bazzite",
    statement: "A custom image built upon Fedora for gaming on PCs and handhelds.",
    url: "https://bazzite.gg/#download",
    buttonText: "Download Bazzite"
  },
  {
    title: "Nobara Project",
    statement: "A modified version of Fedora Linux with user-friendly fixes added to it.",
    url: "https://nobaraproject.org/download.html",
    buttonText: "Download Nobara"
  },
  {
    title: "PikaOS",
    statement: "A Debian-based gaming OS focused on ease of use and performance.",
    url: "https://wiki.pika-os.com/en/home#downloads",
    buttonText: "Download PikaOS"
  },
  {
    title: "ChimeraOS",
    statement: "An operating system that provides an out-of-the-box couch gaming experience.",
    url: "https://chimeraos.org/download/",
    buttonText: "Download ChimeraOS"
  },
  {
    title: "winesapOS",
    statement: "A portable Linux OS for gaming that can be installed on a flash drive.",
    url: "https://github.com/winesapOS/winesapOS/releases",
    buttonText: "Download winesapOS"
  }
];
