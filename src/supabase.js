import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sdibsbbhbbjiecpzofpe.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkaWJzYmJoYmJqaWVjcHpvZnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0NDkwNjcsImV4cCI6MjAwNjAyNTA2N30.A_zGk1yo1xd63bNN8VQsJ62horHm0d9dkxaQfuCmrdk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)