# 0002: libsql / Turso over Postgres

libsql (Turso) gives us SQLite ergonomics in development (file:./local.db) and edge-replicated SQL in production with the same driver. Postgres would require Docker locally and a managed service in prod. The starter optimizes for zero-setup dev.

If you outgrow SQLite semantics (true concurrent writes, advanced types), migrate — Drizzle abstracts the SQL.
