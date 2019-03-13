import { formatDSN } from "../format-dsn"

describe("formatDSN", () => {
  test("minimal config", () => {
    expect(formatDSN({ dbName: "test-db" })).toBe("/test-db")
  })

  test("with user", () => {
    expect(
      formatDSN({
        dbName: "test-db",
        user: "root",
      })
    ).toBe("root@/test-db")
  })

  test("with user and password", () => {
    expect(
      formatDSN({
        dbName: "test-db",
        passwd: "mypasswd",
        user: "root",
      })
    ).toBe("root:mypasswd@/test-db")
  })

  test("with custom net", () => {
    expect(
      formatDSN({
        addr: "/tmp/mysql.sock",
        dbName: "test-db",
        net: "unix",
      })
    ).toBe("unix(/tmp/mysql.sock)/test-db")
  })

  test("with addr", () => {
    expect(
      formatDSN({
        addr: "/tmp/mysql.sock",
        dbName: "test-db",
      })
    ).toBe("(/tmp/mysql.sock)/test-db")
  })

  test("with parameters", () => {
    expect(
      formatDSN({
        charset: "utf8mb4",
        dbName: "test-db",
      })
    ).toBe("/test-db?charset=utf8mb4")
  })
})
