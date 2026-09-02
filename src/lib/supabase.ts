import { createClient } from '@supabase/supabase-js'

// Keep the public site renderable before its repository secrets are configured.
// Registration remains unavailable until the real Supabase values are supplied.
const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? 'https://placeholder.supabase.co'
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
