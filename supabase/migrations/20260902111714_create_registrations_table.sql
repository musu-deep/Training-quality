/*
# Create registrations table for Training Quality Forum

1. New Tables
- `registrations`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — registrant's full name
  - `email` (text, not null) — registrant's email
  - `phone` (text) — registrant's phone number
  - `country` (text) — registrant's country
  - `profession` (text) — registrant's profession/role
  - `organization` (text) — registrant's organization
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `registrations`.
- This is a no-auth public registration form (no sign-in screen).
- Allow anon + authenticated to INSERT (anyone can register).
- Allow anon + authenticated to SELECT only count metadata (we keep SELECT open for potential admin use, but the form only inserts).
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  profession text,
  organization text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert registrations (public sign-up form, no auth)
DROP POLICY IF EXISTS "anon_insert_registrations" ON registrations;
CREATE POLICY "anon_insert_registrations"
ON registrations FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE for anon — registrations are private
