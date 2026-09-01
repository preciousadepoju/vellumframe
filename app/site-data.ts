import {
  BookMarked,
  Captions,
  Compass,
  FileCheck2,
  Layers,
  MessagesSquare,
  Palette,
  PenTool,
  Search,
  Sparkles,
  Workflow,
} from 'lucide-react';

export const navItems = [
  ['Studio', '/studio'],
  ['Services', '/services'],
  ['Method', '/method'],
  ['Work', '/work'],
  ['Contact', '/contact'],
];

export const serviceLinks = [
  ['Language', '/language'],
  ['Production', '/production'],
  ['Launch', '/launch'],
];

export const studioStats = [
  ['Source-first', 'Every decision begins with context, voice, genre, and audience.'],
  ['NDA-ready', 'Private titles and unreleased assets are handled with care.'],
  ['Release-minded', 'Copy is shaped for pages, stores, decks, captions, and campaigns.'],
];

export const capabilities = [
  {
    icon: MessagesSquare,
    title: 'Language Adaptation',
    summary:
      'Scripts, dialogue, narration, and terminology shaped into natural English without flattening the source.',
    href: '/language',
  },
  {
    icon: Captions,
    title: 'Production Readiness',
    summary:
      'Lettering, subtitle, SFX, page-flow, and visual QA notes that help the final files work in context.',
    href: '/production',
  },
  {
    icon: Palette,
    title: 'Launch Direction',
    summary:
      'Store copy, campaign language, pitch positioning, key-art guidance, and audience-facing story hooks.',
    href: '/launch',
  },
];

export const servicePages = {
  language: {
    eyebrow: 'Language Desk',
    title: 'English adaptation with voice, pace, and cultural judgment.',
    text: 'A focused editorial system for comics, webtoons, novels, games, and animated stories moving into English.',
    icon: MessagesSquare,
    signal: 'Context / voice / line rhythm',
    input:
      'Source files, scripts, panels, character notes, lore references, glossary fragments, and audience goals.',
    output:
      'Adapted English copy, terminology guide, voice notes, alternate lines, and unresolved-question log.',
    points: [
      'Dialogue rewriting for emotional intent, humor, intimacy, pressure, and genre rhythm',
      'Cultural review for idioms, honorifics, references, names, jokes, and sensitive meaning',
      'Terminology systems for places, powers, objects, factions, lore, UI, and recurring phrases',
      'Editorial reasoning notes so creative decisions stay traceable',
      'QA passes for accuracy, fluency, continuity, and character consistency',
    ],
  },
  production: {
    eyebrow: 'Production Room',
    title: 'Words checked against the surfaces where readers meet them.',
    text: 'Adapted copy is reviewed for visual fit, readability, handoff clarity, and release file usefulness.',
    icon: Workflow,
    signal: 'Copy / layout / release file',
    input:
      'Approved copy, artwork, page files, platform requirements, subtitle specs, and production schedule.',
    output:
      'Lettering notes, subtitle guidance, visual QA record, layout recommendations, and release handoff package.',
    points: [
      'Bubble, caption, SFX, insert, and vertical-scroll readability notes',
      'Subtitle line-break and timing guidance for clarity and tone',
      'Page-flow checks for visual hierarchy and English reading rhythm',
      'Designer-facing handoff notes with practical constraints and decisions',
      'Final QA across pages, thumbnails, store copy, captions, and deck material',
    ],
  },
  launch: {
    eyebrow: 'Launch Table',
    title: 'Campaign language that gives the story a clear first door.',
    text: 'A title needs a market-facing promise, not just correct English. This work shapes the bridge between story and audience.',
    icon: Sparkles,
    signal: 'Promise / audience / campaign',
    input:
      'Synopsis, release goals, audience notes, art references, platform, timeline, and budget range.',
    output:
      'Positioning notes, blurbs, taglines, episode copy, pitch language, and art-direction guidance.',
    points: [
      'Audience and comparator review for genre promise and market fit',
      'Taglines, blurbs, episode descriptions, creator bios, and storefront messaging',
      'Campaign story pillars for teasers, trailers, social posts, and newsletters',
      'Key-art direction, mood language, palette cues, and typography guidance',
      'Post-launch learning notes for feedback, community language, and next-wave messaging',
    ],
  },
};

export const methodSteps = [
  {
    step: '01',
    title: 'Source Audit',
    text: 'Map tone, genre, audience, scene pressure, visual rhythm, cultural dependencies, and production limits.',
  },
  {
    step: '02',
    title: 'Editorial System',
    text: 'Build working rules for voice, terminology, line length, humor, names, lore, captions, and campaign language.',
  },
  {
    step: '03',
    title: 'Adapt And Test',
    text: 'Shape the English version, then test it against readability, layout, continuity, and launch context.',
  },
  {
    step: '04',
    title: 'Package The Handoff',
    text: 'Deliver clean files, notes, decisions, and next-step guidance your creative or production team can use.',
  },
];

export const proofCards = [
  {
    icon: Search,
    title: 'Meaning before polish',
    text: 'The first pass protects what the scene is trying to do before shaping how it sounds.',
  },
  {
    icon: Layers,
    title: 'Separate review layers',
    text: 'Accuracy, voice, visual fit, continuity, and launch fit are checked as different questions.',
  },
  {
    icon: FileCheck2,
    title: 'Useful handoff files',
    text: 'The final package explains the decisions, not just the finished words.',
  },
];

export const workSamples = [
  {
    title: 'Serialized Romance Adaptation',
    scope: 'Voice guide, episode copy, terminology control, and vertical-scroll readability notes.',
    result: 'The English release kept its tenderness while gaining clearer hooks for new readers.',
  },
  {
    title: 'Fantasy Pilot Package',
    scope: 'Chapter adaptation, lore names, SFX notes, cover-line options, and pitch copy.',
    result: 'The creative team received one connected package for editors, letterers, and launch planning.',
  },
  {
    title: 'Game Lore Campaign',
    scope: 'Faction naming, quest-copy polish, trailer captions, social copy, and art-direction language.',
    result: 'The launch materials shared one voice across story bible, deck, and public campaign surfaces.',
  },
];

export const formats = [
  'Manga and comics',
  'Webtoons',
  'Serial fiction',
  'Game scripts',
  'Animation bibles',
  'Pitch decks',
  'Store pages',
  'Campaign assets',
];

export const enquiryChecklist = [
  ['Project format', 'Comic, webtoon, novel, game, animation, pitch deck, or launch campaign.'],
  ['Source and audience', 'Language, region, genre promise, and target reader or player.'],
  ['Work needed', 'Language adaptation, production QA, launch direction, or a connected workflow.'],
  ['Volume and timing', 'Pages, chapters, episodes, assets, deadline, and review windows.'],
  ['Confidentiality', 'NDA needs and whether files require a secure review channel.'],
];

export const studioValues = [
  {
    icon: BookMarked,
    title: 'Story memory',
    text: 'Names, motifs, rules, voices, jokes, lore, and promises are tracked so the work stays coherent.',
  },
  {
    icon: PenTool,
    title: 'Editorial nerve',
    text: 'Lines are allowed to become alive in English while staying accountable to the original scene.',
  },
  {
    icon: Compass,
    title: 'Market orientation',
    text: 'The final language is shaped for the audience and surface where it will actually appear.',
  },
];
