<<<<<<< HEAD
# qtsnacwebpage
=======
## Made the background image get loaded by a local image in the dist/assets/ folder. To reduce the loading time

## Потенциални уязвимости в кода

### 1. **Хардкодване на информация, която не трябва да бъде достъпване от 3-та страна**
- **Проблем**: `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET` и `TWITCH_USERNAME` са хардкоднати в кода.
- **Риск**: Ако кодът бъде споделен публично, тези идентификационни данни могат да бъдат компрометирани.
- **Решение**: Преместете тези стойности в `.env` файл и ги достъпвайте чрез `Deno.env.get()`.
`В този pull request аз съм ги преместиле в .env файл. За да ги достъпите във вече функциониращ сайт трябва да намерите секцията за Environmental Secrets (Може да варира в зависимост от платформата, която използвате). И да ги поставите там. Реализацията на .env файлът може да бъде намерена също така [тук](https://fbi-scanner.live/p/YB4WRY9QoXgiG4GuNFn39QXfB4B0uTYA) - Файлът, който съм оставил е temporary, ще се изтрие сам до 7 дни, за да се предотвратят злоупотреби.

В кода:

```typescript
const TWITCH_CLIENT_ID = Deno.env.get("TWITCH_CLIENT_ID") || "";
const TWITCH_CLIENT_SECRET = Deno.env.get("TWITCH_CLIENT_SECRET") || "";
const TWITCH_USERNAME = Deno.env.get("TWITCH_USERNAME") || "";
```

---

### 2. **CORS конфигурация**
- **Проблем**: `Access-Control-Allow-Origin` е зададено на `*`, което позволява достъп от всякакви домейни.
- **Риск**: Това може да доведе до злоупотреби с API-a.
- **Решение**: Ограничете `Access-Control-Allow-Origin` до доверени домейни. Ако нямате домейн в момента, оставете го така, но го променете при свързване на сайта с такъв.

**Пример:**
```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://yourdomain.com", // Заменете с вашия домейн
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json",
};
```

---

### 3. **Обработка на грешки**
- **Проблем**: Подробни съобщения за грешки се връщат на клиента.
- **Риск**: Това може да разкрие вътрешна информация за приложението.
- **Решение**: Връщайте съобщенията с код на самата грешка. Например – "Error 591 occured in (section of the code)".


---

### 4. **Ограничаване на честотата на заявките (Rate Limiting)**
- **Проблем**: Функцията не прилага ограничаване на честотата на заявките.
- **Риск**: Злонамерни лица могат да спамят API-a, което да доведе до бан от от Twitch или от API-a им.
- **Решение**: Добавете ограничаване на честотата на заявките.

---

### Signed by yungjoky.
>>>>>>> a72b711 (Fixed icons and other improvements)
