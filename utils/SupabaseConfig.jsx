import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://qewlukqajyoihzhzwmpu.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFld2x1a3FhanlvaWh6aHp3bXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5ODEyMzQsImV4cCI6MjAzNDU1NzIzNH0.KG8KiWIrzfSnP4y8ny8DDB0yblRw_1_Px_LFFQ1KCCo')