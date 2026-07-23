# TREMBLE — Brand & Product Reference
*Za content creation, script writing in personal brand storytelling*

---

## Kaj je Tremble?

Tremble je proximity dating app za mobilne naprave (iOS + Android). Ne deluje kot Tinder ali Bumble. Ni swipanja. Ni chatiranja. Ni profilov, ki jih pregledaš ure in ure.

App teče tiho v ozadju. Ko zaznajo, da je v bližini nekdo kompatibilen — v kavarni, med tekom, v fitnesu — te diskretno obvesti. Pošlješ val. Če ga pošljejo nazaj — to je match. Imaš 30 minut, da se najdeta v resničnem svetu.

**Tagline:** Meet Someone Real. Without the App.

---

## Zakaj obstaja?

Dating industrija generira 12 milijard USD letno — a je strukturno pokvarjena. Tinder, Bumble, Hinge zaslužijo, ko si samski in na platformi. Niso motivirani, da te spravijo v zvezo. Tremble je drugačen po zasnovi, ne samo po izjavi v marketingu.

Tri silnice ustvarjajo priložnost:

1. **Dating app fatigue** — 78% uporabnikov 18–35 let poroča o izčrpanosti od swipanja. Gen Z beleži rekordno osamljenost kljub digitalni hiperkonektivnosti.
2. **Tehnološka zrelost** — BLE je dovolj stabilen za zanesljivo background proximity detekcijo pri <1% pasivne porabe baterije. To ni bila opcija pred petimi leti.
3. **Regulatorna realnost** — EU AI Act (august 2026) udari platforme z algoritmičnim profiliranjem. Tremble nima nobenega algoritma za rangiranje. To je arhitekturna odločitev, ki hkrati reši pravni problem.

---

## Kako deluje — core mehanika

### BLE Proximity Engine
App v ozadju periodično skenira BLE signale (Bluetooth Low Energy). Ko sta dva kompatibilna profila fizično blizu, Cloud Function to zaznana in sproži notifikacijo. GPS koordinate se **nikoli ne shranjujejo** — izračunajo se samo v Cloud Function RAM-u in se takoj zavržejo. V Firestore gre samo geohash natančnosti ~150m.

### Wave Mechanic
- Zaznamo nekoga v bližini → dobiš tiho notifikacijo: "Nekdo v bližini — [ime], [starost]"
- Quick action: **Pošlji val / Ne pošljaj** — brez odpiranja app
- Prejemnik dobi: "[ime] ti pošilja val" → Wave back / Not now
- **Samo mutual wave = match**. Ni asymmetričnega swiping sistema.

### The Trembling Window — 30 minut
Ko pride do mutual wave, se odpre 30-minutno okno. Active radar prikazuje dve premikajoči se točki. Kompas telefona zavrti radar view. Urgentnost je realna, ne umetna. Dve možni izida:
- Najdeta se v resničnem svetu
- "Oh dang, better luck next time."

### Pulse Intercept
Med aktivnim 30-minutnim oknom, ko se ne moreta najti:
- **[Pošlji številko]** — neposreden klic, brez tipkanja
- **[Pošlji foto]** — view-once slika lokacije za orientacijo, zbriše se ob ogledu ali po 10 minutah

Ni prostega besedila. Ni chat room-a.

---

## Trije fizični konteksti

### Radar (vsakdanje življenje)
Pasiven. App teče, ti živiš. BLE + GPS geohash, 30-sekundno skeniranje vsakih 5 minut. <1% baterije v pasivnem načinu.

### Run Club
Zazna tek z CMMotionActivityManager (iOS) / ActivityRecognition (Android).
- 5 minut teka → ponudi Run Club
- 10 minut teka → autostart brez potrditve
- Med tekom: vse notifikacije tihe, razen mutual wave
- Po koncu: Run recap — kdo je bil blizu

### Gym Mode
Zazna geofence fitnes centra + dwell time.
- 10 minut v fitnesu → ponudi Gym Mode
- 15 minut → autostart
- DND med treningom — tiha lista, summary po odhodu
- 24-urni Firestore TTL za gym encounters

---

## Kompatibilnost — formula

```
(hobiji × 0.50) + (osebnost × 0.25) + (življenjski slog × 0.25) ≥ 0.70
```

Determinizem, brez ML. Formula je interna — nikoli prikazana uporabniku, nikoli shranjena v Firestore.

- Prag **0.55** = samodejno zaznana aktivnost (Run Club, Gym Mode)
- Prag **0.70** = ročna aktivacija + Radar
- 30-minutni Redis cooldown na par — preprečuje spam

---

## Free vs Premium

| Funkcija | Free | Premium |
|---|---|---|
| Mutual waves | 5/mesec | 20/mesec |
| Received waves | Neomejeno | Neomejeno |
| Radar radius | 100m | 250m |
| Near-Miss History | 1× agregirani push/mesec | Polni tab |
| Run / Gym recap | Sivina, brez akcije | Barvno, pošlješ val (10 min TTL) |
| Hard Filters | Ne | Da (server-side) |
| Heatmap | Krogi brez podatkov | Število + filter toggle |

### Cenik
| Tier | Cena | Product ID |
|---|---|---|
| Signal Prime Monthly | €7.99/mes | `monthly` |
| Signal Prime Yearly | €59.99/leto | `yearly` |
| Weekend Getaway | €2.99/vikend (Pet–Ned) | `weekly` |
| Lifetime | €149.99 | `lifetime` |

---

## Zasebnost — kaj točno to pomeni

**Ni marketinškega klišeja. Je arhitektura.**

- GPS koordinate: samo v Cloud Function RAM → nikoli v Firestore
- V Firestore gre: geohash natančnosti ~150m (prostorska celica, ne točna lokacija)
- BLE proximity log: RAM only → zbriše ob koncu seje
- Pulse Intercept media: zbriše ob viewedAt ali po 10 minutah
- Run encounter TTL: 10 minut
- Gym session TTL: 24 ur

Pravilna formulacija za content: *"GPS computed in Cloud Function RAM only, never stored."*
Nepravilna formulacija: *"Zero location stored"* — ker geohash (~150m) JE shranjen.

---

## Tehnični stack (za kontekst)

- **App:** Flutter (iOS + Android), flavors `dev` / `prod`
- **Backend:** Firebase (36 Cloud Functions, europe-west1)
- **Database:** Firestore
- **Storage:** Cloudflare R2 (avatari)
- **Auth + safety:** Firebase App Check, App Attest (iOS prod)
- **Cache:** Upstash Redis (EU region)
- **Maps:** Protomaps + Cloudflare R2 (~€1.50/mes, zamenjava za Google Maps)
- **Payments:** RevenueCat
- **Monitoring:** Sentry (`tremble-functions` + `tremble-app`)
- **Firebase projekta:** `tremble-dev` (dev) | `am---dating-app` (prod)

---

## Ekipa in entiteta

**AMS Solutions d.o.o.** — registrirano 7. maja 2026, Slovenija.
Kontakt: info@amssolutions.biz

**Soosnovatelja:** Aleksandar Bojić (GitHub: unfab) + Martin (GitHub: MartinD111)
Oba delata čisto vse — koda, branding, pogodbe, marketing, testiranje. Ni delitve vlog.

**Target trgi (Faza 1):** Ljubljana, Koper, Zagreb — Jadransko zaledje.

---

## Brand — vizualna identiteta

### Barve
| Ime | Hex |
|---|---|
| Rose | `#F4436C` |
| Yellow | `#F5C842` |
| Green | `#2D9B6F` |
| Graphite | `#1A1A18` |
| Cream | `#FAFAF7` |

### Tipografija
- **Display:** Playfair Display (naslovi, velike besede)
- **Body:** Lora (telo besedila)
- **UI:** Instrument Sans (gumbi, labele, navigacija)

### Prepovedano
- Glassmorphism na content cards
- 3D telefon mockupi
- Stock fotografije parov
- Fraze: *revolutionary, seamless, game-changing, "find love today"*

---

## Brand glas — ton

Tremble govori kot nekdo, ki ve, da ima prav — ampak ni aroganten. Direkten brez pritiska. Samozavesten brez hvaljenja. Intimen brez sladkoblednosti.

### Piše tako:
- *It runs while you live.*
- *Your location is never stored. Not policy. Architecture.*
- *Zero swipes. One wave.*
- *You were running. She was running. Tremble noticed.*
- *30 minutes. Find each other or don't.*
- *Gym Mode: DND on. Quiet list. Summary when you're done.*

### Nikoli ne piše tako:
- *Experience the magic of real connections!*
- *We take your privacy very seriously.*
- *Revolutionary proximity matching technology!*
- *Join millions of happy singles today!*

### Pravila pisanja:
- Kratke povedi. Ena misel, en stavek.
- Nagovori direktno — "ti", ne "uporabniki" ali "people"
- Nikoli ne obljubi čustev. Opisi mehaniko — čustva pridejo sama.
- Tehnično je dovoljeno, ko gradi zaupanje (BLE, geohash, 10-min TTL)
- Brez vzklikov in emoji v headlineih

---

## Ključni copy lines (18 — iz uradnega dokumenta)

| # | Line | Kontekst |
|---|---|---|
| 01 | Dating apps turned human connection into a numbers game. Tremble is different by design. | Opening |
| 02 | It works quietly in your pocket, asking you to go live your life. | Product truth |
| 03 | You don't open the app — the app works for you. | Differentiator |
| 04 | One signal. No noise. When someone compatible is near, you get a single, quiet nudge. | Wave mechanic |
| 05 | Send a wave. If they send one back — that's a match. No chat rooms, no message queues, no ghosting. | Feature |
| 06 | Tremble gets out of the way the moment a match happens. The rest is up to you. | Philosophy |
| 07 | Your location is never stored. Not policy. Architecture. | Privacy |
| 08 | If they show up on your radar, their phone is physically near you. This eliminates bots, fake locations, and catfishing. | Trust |
| 09 | You are completely anonymous until a mutual wave happens. | Privacy / Onboarding |
| 10 | Dating apps taught you to scroll. We're teaching you to look up. | Manifesto |
| 11 | Stop scrolling. Start being somewhere. | Social / Short |
| 12 | Dating, ki ne zahteva tvojega časa. | SLO core |
| 13 | You were running. She was running. Tremble noticed. You had 10 minutes. | Run Club — FOMO |
| 14 | Mid-run. Zero words. One wave. That's the whole mechanic. | Run Club — mechanic |
| 15 | You were 5 minutes into a set. She was on the treadmill. Tremble suggested nothing. It just noticed. | Gym Mode — narrative |
| 16 | Gym Mode: no notifications during your workout. A quiet list when you're done. | Gym Mode — DND |
| 17 | 30 minutes. Find each other or don't. The clock is real. So is the person. | Trembling Window |
| 18 | Lost? Send your number. Or a photo of where you are. That's it. No chat. No typing. | Pulse Intercept |

---

## Psihološki momenti za storytelling

| Moment | Mehanika |
|---|---|
| **Anticipation** | Notifikacija razkrije samo ime + starost. Minimum za radovednost, brez preobremenitve. |
| **Wave transparency** | Prejemnik vidi "[ime] waved at you" — zmanjšuje anksioznost, povečuje mutual wave conversion. |
| **Radar hunt** | Dve premikajoči točki. Fizično iskanje postane igra dveh letal v skupnem prostoru. |
| **Run cross drama** | "Pravkar šla mimo: Ana, 24" — 10 minut. Urgentnost brez chat buffer zone. |
| **Gym quiet list** | Brez prekinitev med treningom. Vse po koncu. Psihološka nagrada za fokus. |
| **Near-miss outcome** | "Oh dang, better luck next time!" — ne kaznuje, motivira. Naslednji proximity event je čez 30 sekund. |
| **Near-Miss History mirror** | "Ta teden si bil blizu 4 oseb." Brez ene besede marketinga. |
| **Second encounter** | "To ni več naključje." — drama ki se piše sama. |

---

## Konkurenca — pozicioniranje

| Platforma | Tremble diferenciator |
|---|---|
| Tinder | Nič swipanja. Nič algoritmičnega rangiranja. Fizična prisotnost kot edini vir resnice. |
| Bumble | Brez gender dynamics manipulacije. Proximity event je sam po sebi icebreaker. |
| Hinge | Tremble nima chat roomov. Profil je minimalen by design — real-world meeting je cilj. |

---

## Status projekta (junij 2026)

- **Build:** TestFlight build 6 uploadana
- **Bloker:** Registracija v prod ne deluje — App Check ni bil konfiguriran za `tremble.dating.app` (prod iOS), Zod `.optional()` vs Dart `null` mismatch
- **Fix v delu:** Build 7 — App Check prod registracija + Zod `.nullish()` fix
- **Naslednji korak:** App Store submission (screenshots pripravljene, App Store Connect ID: 6782018915)
- **RevenueCat:** SDK wiran, IAP produkti v konfiguraciji
- **Prevodi:** 8 jezikov, 608 ključev (EN/SL/DE/IT/FR/SR/HU + HR)

---

## Za content writing — kaj Claude ve

Ko pišeš content za Tremble (skripte, captions, blog, naracije):

1. **Referenciraj mehaniko, ne čustva.** Ne "najdi ljubezen" — ampak "10 minut, ko si tekel mimo nje."
2. **Kontekst šteje.** Run Club stories so drugačne od Gym Mode stories. Vsak ima svojo dramaturškim lok.
3. **Privacy je feature, ne disclaimer.** "Not policy. Architecture." — to je selling point, ne legal boilerplate.
4. **Urgentnost je resnična.** 30 minut. Ura teče. Ni umetne FOMO — je resnična matematika.
5. **App je odsoten, ko je uspešen.** Tremble je najboljši takrat, ko ga ne uporabljaš aktivno.
6. **Geografska specifičnost.** Faza 1 = Ljubljana, Koper, Zagreb. Lokalni storytelling ima prednost pred generičnim.

---

*Dokument verzija: 1.0 — junij 2026*
*Vir: Master Strategy v9, Brand Identity v6.1, Project Context*
*AMS Solutions d.o.o. — CONFIDENTIAL*
