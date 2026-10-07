# Miksi lokakuulle ei saada 42 päivää

Lokakuun kalenteriruudukolle ei voi saada 42 päivää nykyisillä tiedoilla.

## Miksi

Strapissa olevat tietueet (31.8.–11.10.) ovat **syyskuun** kalenteriruudukko. **Lokakuun** ruudukko on eri: 28.9.–8.11. Hookin kysely määräytyy tämän päivän päivämäärästä ja nykyisen kuukauden ruudukosta, ei Strapin tietueista.

Tänään on 6.10. Hook kysyy aikavälin **6.10.–8.11.** Tietueistasi tähän väliin osuvat vain 6.10.–11.10., eli 6 päivää. Loput ovat joko ennen tätä päivää tai niille ei ole tietuetta.

## Miksi syyskuu näyttää täydeltä

Syyskuun kalenteri ei näytä Strapin dataa. `Days.tsx` laskee ruudut `date-fns`-kirjastolla, eikä mikään vielä lue `state.bookableDays`-arvoa (koodissa se esiintyy vain storessa ja slicessa). Siksi näet nämä päivät: kalenteri piirtää ne itse, ja ne sattuvat täsmäämään aikaväliin, jolle loit tietueet. Se ei todista, että Strapi palauttaa ne.

## Mitä tarvitaan 42 päivään lokakuussa

1. **Alkupäivä:** Kyselyn pitää alkaa ruudukon ensimmäisestä ruudusta (28.9.), ei tämän päivän päivämäärästä.
2. **Tietueet:** Tarvitaan tietueet välille 28.9.–8.11. Sinulla on tietueet 11.10. asti, eli puuttuvat 12.10.–8.11. (28 päivää). Nykyisillä tiedoilla väliltä 28.9.–11.10. saat enintään 14 päivää.

## Kokeilua varten

Jos haluat nähdä 42 päivää kehitystilassa ilman uusia tietueita, kokeile kyselyä syyskuun ruudukolle:

```
filters[date][$gte]=2026-08-31&filters[date][$lte]=2026-10-11
```

Se palauttaa tasan 42, koska se on ruudukko, jonka olet kattanut. Tämä on vain kokeilua varten, ei oikea kysely lokakuulle.
