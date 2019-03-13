// https://godoc.org/github.com/go-sql-driver/mysql#Config
export interface GoSqlDriverConfig {
  user?: string
  passwd?: string
  net?: string
  addr?: string
  dbName: string
  charset?: string
  collation?: string
  location?: string
  maxAllowedPacket?: number
  serverPubKey?: string

  tlsConfig?: string

  timeout?: number
  readTimeout?: number
  writeTimeout?: number

  allowAllFiles?: boolean
  allowCleartextPasswords?: boolean
  allowNativePasswords?: boolean
  allowOldPasswords?: boolean
  clientFoundRows?: boolean
  columnsWithAlias?: boolean
  interpolateParams?: boolean
  multiStatements?: boolean
  parseTime?: boolean
  rejectReadOnly?: boolean
}
