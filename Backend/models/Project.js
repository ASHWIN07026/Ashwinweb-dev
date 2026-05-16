// Supabase table configuration
// Table name: projects
// Columns:
//   - id (bigint, primary key, auto-increment)
//   - title (text, not null)
//   - description (text)
//   - github (text)
//   - created_at (timestamp with time zone, default: now())

// No schema validation needed with Supabase
// Queries will be done directly in routes
module.exports = { tableName: "projects" };
