# Training Quality

منصة تفاعلية لجودة التدريب، مبنية باستخدام React وTypeScript وVite، مع حفظ التسجيلات في Supabase.

## التشغيل محلياً

```bash
npm ci
cp .env.example .env
npm run dev
```

أدخل بيانات مشروع Supabase في ملف `.env`، ثم نفّذ ملف الترحيل:

`supabase/migrations/20260902111714_create_registrations_table.sql`

## متغيرات البيئة

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

عند النشر عبر GitHub Pages، أضف المتغيرين كـ Repository Secrets بنفس الاسمين.

## البناء والنشر

```bash
npm run lint
npm run build
```

يُنشر الموقع آلياً عبر GitHub Actions عند كل تحديث لفرع `main`.
