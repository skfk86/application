# NileBase (نيل بيس)

لوحة تحكم لقواعد بيانات Postgres، مبنية على [Supabase Studio](https://github.com/supabase/supabase)
(ترخيص Apache-2.0) مع هوية بصرية جديدة ودعم للعربية واتجاه RTL.

> NileBase منتج مستقل وغير تابع لشركة Supabase, Inc. ولا ترعاه. راجع ملف `NOTICE`.

## التشغيل عبر Docker

```bash
# واجهة إنجليزية
docker build . -f apps/studio/Dockerfile --target production -t nilebase-studio:en

# واجهة عربية RTL
docker build . -f apps/studio/Dockerfile --target production -t nilebase-studio:ar \
  --build-arg NEXT_PUBLIC_UI_LOCALE=ar

docker run -p 3000:3000 nilebase-studio:ar
```

اللغة والاتجاه يُحدَّدان وقت البناء عبر `NEXT_PUBLIC_UI_LOCALE` (`en` أو `ar`).
في وضع `ar` يُضبط `dir="rtl"` ويُحمَّل خط Noto Sans Arabic، وتبقى أجزاء الكود وSQL
والجداول من اليسار لليمين (`apps/studio/styles/rtl.css`).

## ما تغيّر عن الأصل

- الاسم والشعار والأيقونات وصورة المعاينة، ولوحة الألوان (من الأخضر إلى التيل).
- النصوص الظاهرة للمستخدم في `apps/studio`.
- دعم RTL والخط العربي. **ترجمة النصوص إلى العربية لم تتم بعد**؛ الواجهة ما زالت بالإنجليزية.

## ملاحظات قبل البيع

- روابط التوثيق ما زالت تشير إلى `supabase.com` إلى أن يكون لديك توثيق خاص.
- أمثلة الكود ومكتبات العميل (`supabase-js` وغيرها) تحتفظ بأسمائها الحقيقية عمداً.
- راجع إعدادات التتبع والتحليلات (Sentry وConfigCat وغيرها) قبل النشر للعملاء.
- لم تُشغَّل الاختبارات الآلية بعد، وبعضها يتوقع النصوص القديمة.
