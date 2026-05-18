import { createClient } from '@supabase/supabase-js'

const URL = 'https://htnrwsiyfagfocnpbfjf.supabase.co'
// const URL = 'https://htnrwsiyfagfocnpbfjf.supabase.co/rest/v1/'
const API_KEY =  'sb_publishable_vGHUmSrghIVGzMEOcL8WIA_P98giLmp'

// const supabase = createClient(URL, API_KEY)
export const supabase = createClient(URL, API_KEY)