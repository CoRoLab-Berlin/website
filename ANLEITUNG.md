# Anleitung: Inhalte der CoRoLab-Website ändern

Diese Anleitung ist für alle im Lab. **Du brauchst keinen Code, kein Programm und keine Installation** – nur einen
GitHub-Account mit Zugriff auf das Repository `CoRoLab-Berlin/website`.

---

## 1. Das Wichtigste in 30 Sekunden

1. Alle Texte liegen im Ordner **`content`**. Darin gibt es `en` (Englisch) und `de` (Deutsch).
2. Datei öffnen → **Stift-Symbol ✏️** (Edit) → ändern → **Commit changes** (grüner Button).
3. Nach ca. 2 Minuten ist die Änderung live. Fehler? Dann bleibt die alte Seite online (siehe Abschnitt 9).

> Tipp: Wenn du dir unsicher bist, wähle beim Commit **„Create a new branch … and start a pull request"**. Dann
> wird nichts live, bevor jemand zugestimmt hat.

---

## 2. Wo steht was?

| Was willst du ändern? | Datei / Ordner |
|---|---|
| Menü-Beschriftungen, Footer, feste Texte | `content/<sprache>/site.md` |
| Startseite (Titel, Foto, Text, Bildstreifen, Partnerlogos) | `content/<sprache>/pages/home.md` |
| Kontakt-Seite | `content/<sprache>/pages/contact.md` |
| Impressum / Disclaimer | `content/<sprache>/pages/disclaimer.md` |
| **Projekte** (eine Datei pro Projekt) | `content/<sprache>/projects/` |
| **Hardware** (eine Datei pro Roboter) | `content/<sprache>/hardware/` |
| **Forschung** (Themen) | `content/<sprache>/work/` |
| **Team** (eine Datei pro Person) | `content/<sprache>/team/` |
| **Lehre** (eine Datei pro Modul) | `content/<sprache>/teaching/` |
| **Publikationen** (eine Datei pro Kategorie) | `content/<sprache>/publications/` |
| Überschrift + Einleitung einer Rubrik | `content/<sprache>/<rubrik>/_index.md` |
| Bilder, PDFs | `public/images/…`, `public/pdfs/…` |

`<sprache>` ist `en` oder `de`.

---

## 3. Aufbau einer Datei

Jede Datei besteht aus zwei Teilen:

```
---
title: EPI
description: Kurzbeschreibung für die Karte.
timespan: 2019 - 2021
status: Active
---
Hier steht der normale Text (Markdown). Das ist der Inhalt der Detailseite.
```

* **Oben zwischen den `---`-Zeilen:** „Felder" (`name: Wert`). Sie steuern Titel, Bild, Reihenfolge usw.
* **Darunter:** der Fließtext in Markdown.

Regeln für die Felder (hier passieren die meisten Fehler):

* Format immer `feldname: Wert` – mit **Leerzeichen nach dem Doppelpunkt**.
* Enthält der Wert einen Doppelpunkt, in Anführungszeichen setzen: `title: "Roboter: eine Geschichte"`.
* Die `---`-Zeilen oben und unten nicht löschen.
* Listen (z. B. mehrere Bilder) so schreiben – mit Einrückung:
  ```
  images:
    - images/projects/foto1.jpg
    - images/projects/foto2.jpg
  ```

---

## 4. Text formatieren (Markdown)

| Du schreibst | Ergebnis |
|---|---|
| `## Überschrift` | Zwischenüberschrift |
| `**fett**` und `*kursiv*` | **fett**, *kursiv* |
| `[Linktext](https://example.com)` | Link |
| `- Punkt` (pro Zeile) | Aufzählung |
| `1. Punkt` | nummerierte Liste |
| Leerzeile | neuer Absatz |
| zwei Leerzeichen am Zeilenende | Zeilenumbruch im selben Absatz |
| `![Bildbeschreibung](images/projects/foto.jpg)` | Bild im Text |

Im GitHub-Editor gibt es oben den Reiter **Preview** – damit siehst du vor dem Speichern, wie der Text aussieht.

---

## 5. Neues anlegen (Projekt, Roboter, Person, Modul …)

1. Gehe in den passenden Ordner, z. B. `content/en/projects`.
2. **Add file → Create new file**.
3. Dateiname: nur Kleinbuchstaben, Zahlen und Bindestriche, Endung `.md`, z. B. `mein-projekt.md`.
   Der Dateiname wird Teil der Adresse (`…/projects/mein-projekt/`).
4. Kopiere die passende Vorlage aus dem Ordner [`templates`](templates) hinein und fülle sie aus.
5. **Commit changes**.

Auf Deutsch dasselbe in `content/de/…` mit **demselben Dateinamen**.

### Felder je Bereich

**Projekt** (`projects`)

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `title` | ja | Name |
| `description` | nein | Kurztext auf der Karte |
| `timespan` | nein | z. B. `2023 - 2025` (Neueste Projekte stehen oben) |
| `status` | nein | z. B. `Active`, `Completed` |
| `images` | nein | Liste von Bildern (das erste erscheint auf der Karte) |
| `link` | nein | externer Link (Button „Read more" auf der Detailseite) |
| `order` | nein | feste Reihenfolge (kleine Zahl = weiter oben) |

**Hardware** (`hardware`): `title`, `description`, `image`, `order`.
Ist der Text unter den `---` leer, ist die Karte nicht klickbar (keine Detailseite).

**Forschung** (`work`): `title`, `description`, `image`, `link`, `order`.
Gibt es keinen Text darunter, aber einen `link`, führt die Karte direkt auf diese externe Seite.

**Team** (`team`)

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `name` | ja | Vor- und Nachname |
| `role` | ja | Rolle, z. B. `Head of Lab`, `Research Assistant` |
| `description` | nein | eine Zeile über die Person |
| `image` | nein | Foto, quadratisch ist am schönsten |
| `scholar`, `website`, `email` | nein | Links, erscheinen unter dem Namen |

Sortierung: zuerst nach Rolle (Reihenfolge steht in `content/<sprache>/team/_index.md` unter `roles:`), dann
nach Nachname. Eine neue Rolle musst du dort in die Liste eintragen, sonst steht sie am Ende.

**Lehre** (`teaching`): `title` (Modulname), `semester`, `sws`, `description`, `image`, `link` (Modulhandbuch).

**Publikationen** (`publications`): Eine Datei pro Kategorie (`journal.md`, `conference.md` …) mit `title` und
`order`. Der Text darunter ist eine nummerierte Liste:

```
1. **Nachname A., Nachname B.** (2024): Titel des Papers. In _Zeitschrift_, 12(3), S. 1–10. [DOI](https://doi.org/…)
```

Eine neue Kategorie = eine neue Datei in `publications/`; sie bekommt automatisch einen Filter-Button.

**Startseite** (`pages/home.md`): `title`, `heroTitle`, `heroSubtitle`, `heroImage`, `images` (Bildstreifen),
`logos` (Partnerlogos). Der Text darunter ist der Begrüßungstext.

---

## 6. Bilder und PDFs

1. Auf GitHub in den Ordner `public/images/…` gehen (z. B. `public/images/projects`; Ordner bei Bedarf neu anlegen,
   indem du beim Dateinamen `ordner/datei.jpg` eingibst).
2. **Add file → Upload files** und die Datei hochladen, **Commit changes**.
3. In der Markdown-Datei so verweisen: `images/projects/foto.jpg` (ohne `public/` davor).

Empfehlungen:

* Fotos **maximal 1600 Pixel breit**, Dateigröße unter 500 KB (sonst lädt die Seite langsam).
* Dateinamen ohne Leerzeichen und Umlaute, **am besten nur Kleinbuchstaben** – `Foto.JPG` und `foto.jpg` sind für
  den Server verschiedene Dateien!
* Logos mit weißem Hintergrund sind okay; Logos für dunkle Hintergründe (weiße Schrift) bitte nicht verwenden.
* PDFs nach `public/pdfs/`, Link im Text: `[Paper](pdfs/mein-paper.pdf)`.

---

## 7. YouTube-Videos einbetten

Den normalen YouTube-Link **allein in eine Zeile** schreiben, mit einer Leerzeile davor und danach:

```
Hier ist unser erstes Video:

https://www.youtube.com/watch?v=VIDEO_ID

Und hier geht der Text weiter.
```

Steht der Link mitten in einem Satz oder in einer Liste, bleibt er ein normaler Link.

---

## 8. Deutsch und Englisch

* Beide Sprachen haben **gleich benannte Dateien**: `content/en/projects/epi.md` ↔ `content/de/projects/epi.md`.
* Gibt es die deutsche Datei noch nicht, zeigt die Seite den **englischen Text** mit einem kleinen Hinweis –
  es verschwindet also nie etwas.
* Übersetzen: englische Datei öffnen, Inhalt kopieren, in `content/de/…` eine Datei mit gleichem Namen anlegen,
  einfügen und übersetzen. Feldnamen (`title:`, `description:`) **nicht** übersetzen, nur die Werte.
* Bilder und Links müssen nicht neu angelegt werden – einfach dieselben Pfade verwenden.

---

## 9. Etwas löschen oder verstecken

* **Löschen:** Datei öffnen → Papierkorb-Symbol (oben rechts) → Commit. (Auch in der anderen Sprache löschen!)
* **Nur verstecken:** Es gibt kein „Entwurf"-Feld. Am einfachsten die Datei umbenennen, so dass sie mit `_` beginnt
  (z. B. `_altes-projekt.md`) – dann wird sie nicht angezeigt.

---

## 10. Wenn etwas schiefgeht

Nach jedem Commit prüft GitHub automatisch die Datei und baut die Seite neu (Reiter **Actions**).

* **Grüner Haken:** alles gut, die Änderung ist live (ca. 2 Minuten).
* **Rotes Kreuz:** Es gibt einen Fehler. Klicke auf den Eintrag → **build** → im Protokoll steht in normaler Sprache, z. B.

  ```
  Content error in content/en/projects/epi.md
    - field "timespan": Invalid input: expected string, received number
  ```

  Das heißt: In dieser Datei, Feld `timespan`, stimmt etwas nicht. Datei korrigieren und erneut speichern.
  **Die bisherige Website bleibt die ganze Zeit unverändert online.**
* Meldung „**file … not found in /public**": Das Bild/PDF ist nicht hochgeladen oder falsch geschrieben
  (Groß-/Kleinschreibung beachten).

Typische Fehlerquellen: fehlendes Leerzeichen nach `:`, gelöschte `---`-Zeile, falsch eingerücktes `- ` in Listen,
Doppelpunkt im Titel ohne Anführungszeichen, Tab statt Leerzeichen.

---

## 11. Vorschau vor dem Veröffentlichen (optional)

Wer wirklich sehen möchte, wie es aussieht, bevor es live geht, kann auf dem eigenen Rechner testen
(Node.js 20+ nötig):

```bash
git clone https://github.com/CoRoLab-Berlin/website.git
cd website
npm install
npm run dev
```

Dann im Browser `http://localhost:3000/en/` öffnen. Jede Änderung an einer Datei erscheint sofort.
`npm run build` prüft alle Inhalte, so wie es auch GitHub tut.

---

## 12. Für Entwickler (kurz)

* Next.js (App Router, statischer Export) + React + Tailwind 4. Seiten in `src/app/[lang]/…`, Komponenten in
  `src/components`, Content-Loader in `src/lib/content.ts`.
* Erlaubte Felder: `src/lib/schemas.ts` (zod). Neues Feld = dort ergänzen.
* Farben/Dark-/Light-Theme: `src/app/globals.css` (Tokens `--ink-*`, `--accent`, `--strong`).
* Deploy: GitHub Action `.github/workflows/deploy.yml`, Base-Path `/website`.
  In den Repo-Einstellungen unter *Pages* muss die Quelle **GitHub Actions** sein.
