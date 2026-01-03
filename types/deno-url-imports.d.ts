declare module "https://deno.land/std@0.168.0/http/server.ts" {
  export function serve(handler: (req: any) => any): void;
}

declare module "https://esm.sh/@supabase/supabase-js@2" {
  export function createClient(...args: any[]): any;
}
