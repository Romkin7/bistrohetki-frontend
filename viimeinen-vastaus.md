Muutin `src/hooks/useBookableDays.ts`:ää, ja `dispatch` ei ole enää `useEffect`:n sisällä. TypeScript-tarkistus ja ESLint menivät läpi.

- **Haku ja dispatch:** `fetchStrapiData`-haku ja `dispatch(setBookableDays(...))` ovat nyt `useCallback`-funktiossa `fetchBookableDays`, joka on `useEffect`:n ulkopuolella.
- **`useEffect`:** Effect kutsuu vain `fetchBookableDays()`-funktiota, kun sivu latautuu.
- **Peruutuslippu:** Poistin `isCancelled`-lipun. Se oli tarpeellinen vain siksi, että `dispatch` oli effectin sisällä.
- **Haun sisältö:** Haku on ennallaan, eli 42 päivää (`pagination[pageSize]=42`).

Haku täytyy silti käynnistää jostakin sivun latautuessa, ja se tapahtuu tässä `useEffect`:llä. Jos mentorin tarkoitus oli, ettei `dispatch` ole lainkaan effectin kautta, ainoa vaihtoehto olisi hakea data loaderissa. Siihen en saanut koskea, joten kysy häneltä, kelpaako tämä ratkaisu.
