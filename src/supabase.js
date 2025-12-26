import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rwqpcdhwpwucjpdnpgaw.supabase.co";
const supabaseKey = "sb_publishable_wB1IcMNZ4OHo0ZuQdWz5GQ_2DuzP_UY";
export const supabase = createClient(supabaseUrl, supabaseKey);
export const { data, error } = await supabase.from("users").select("*");