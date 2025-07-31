import { neon } from "@neondatabase/serverless"

// Crée une instance de client SQL réutilisable pour Neon
// Assurez-vous que process.env.DATABASE_URL est défini dans vos variables d'environnement Vercel
const sql = neon(process.env.DATABASE_URL!)

export { sql }