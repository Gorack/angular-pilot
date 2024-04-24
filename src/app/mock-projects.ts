import {Project} from "./types/project";
export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Szellemvadászok: A Paranormális Incidensek Archívuma',
    description: 'Egy online platform létrehozása, ahol a felhasználók megoszthatják és dokumentálhatják a paranormális tapasztalataikat. A cél a rejtélyes jelenségek elemzése és azoknak a tudományos megközelítése.',
    members: [
      {name: 'Anna Kovács', position: 'Lead Investigator'},
      {name: 'Péter Nagy', position: 'Tech Guru'}
    ],
    links: [
      {name: 'Szellemvadászok Archívuma', url: 'https://example.com'}
    ]
  },
  {
    id: 2,
    name: 'Égi Kalandok: Csillagközi Expedíció',
    description: 'Egy VR-alapú videojáték, amely lehetővé teszi a játékosoknak, hogy felfedezzék a távoli galaxisokat és részt vegyenek izgalmas űrkalandokban.',
    members: [
      {name: 'Gergő Tóth', position: 'Lead Game Designer'},
      {name: 'Eszter Szabó', position: '3D Artist'}
    ],
    links: [
      {name: 'Égi Kalandok honlapja', url: 'https://example.com'}
    ]
  },
  {
    id: 3,
    name: 'Zöld Ujj: Városi Kertészeti Kezdeményezés',
    description: 'Egy közösségi kertészet létrehozása egy városi területen, ahol a helyi lakosok megoszthatják és fejleszthetik kertészeti készségeiket, valamint termeszthetnek saját zöldségeket és gyümölcsöket.',
    members: [
      {name: 'Lilla Varga', position: 'Kertészeti Koordinátor'},
      {name: 'Bence Kovács', position: 'Kommunikációs Menedzser'}
    ],
    links: [
      {name: 'Zöld Ujj honlapja', url: 'https://example.com'}
    ]
  },
  {
    id: 4,
    name: 'Hangtérkép: Városi Zenei Felfedező Platform',
    description: 'Egy mobilaalkalmazás létrehozása, amely lehetővé teszi a felhasználók számára, hogy felfedezzék és megosszák a város különböző pontjain hallott zenéket és előadókat.',
    members: [
      {name: 'Gábor Bálint', position: 'App Developer'},
      {name: 'Zsófi Mészáros', position: 'Marketing Manager'}
    ],
    links: [
      {name: 'Hangtérkép alkalmazás letöltése', url: 'https://example.com'}
    ]
  },
  {
    id: 5,
    name: 'Örökségvadászok: Családfakutató és Történetmesélő Platform',
    description: 'Egy online platform létrehozása, ahol a felhasználók felfedezhetik családfájukat és megoszthatják családi történeteiket, emlékeiket, valamint dokumentumokat, fotókat.',
    members: [
      {name: 'Dávid Balogh', position: 'Genealógus'},
      {name: 'Zsuzsa Fekete', position: 'Content Curator'}
    ],
    links: [
      {name: 'Örökségvadászok portál', url: 'https://example.com'}
    ]
  },
  {
    id: 6,
    name: 'Gyermekvilág: Kreatív Tanulási Játékok Gyerekeknek',
    description: 'Egy online platform létrehozása, ahol interaktív és oktató játékokat találhatnak a gyerekek számára, hogy fejlesszék kreativitásukat és tanulási készségeiket.',
    members: [
      {name: 'Marci Fehér', position: 'Pedagógus'},
      {name: 'Réka Tóth', position: 'UI/UX Designer'}
    ],
    links: [
      {name: 'Gyermekvilág játékok', url: 'https://example.com'}
    ]
  }
]
