# go-dsn

## Synopsis

```typescript
import { formatDSN } from "@aereal/go-dsn"

formatDSN({
  dbName: "test-db",
  passwd: "mypasswd",
  user: "root",
})
// => "root:mypasswd@/test-db"
```

## See also

https://github.com/go-sql-driver/mysql#dsn-data-source-name
