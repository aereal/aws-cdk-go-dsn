import { GoSqlDriverConfig } from "./dsn"

export const formatDSN = (config: GoSqlDriverConfig): string => {
  const { dbName, user, passwd, net, addr, ...rest } = config

  let dsn = ""

  if (user) {
    dsn += user
    if (passwd) {
      dsn += `:${passwd}`
    }
    dsn += "@"
  }

  if (net) {
    dsn += net
    if (addr) {
      dsn += `(${addr})`
    }
  }

  dsn += `/${dbName}`

  type RestKey = keyof typeof rest
  type RestKeysList = ReadonlyArray<RestKey>
  const restKeys = Object.keys(rest) as RestKeysList
  if (restKeys.length > 0) {
    dsn += "?"
    const sortedKeys = Object.keys(rest).sort((a, b) =>
      a === b ? 0 : a < b ? -1 : 1
    ) as RestKeysList
    for (const k of sortedKeys) {
      const key = k
      const value = rest[key]
      dsn += `${key}=${value}`
    }
  }

  return dsn
}
