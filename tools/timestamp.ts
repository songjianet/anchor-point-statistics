export class Timestamp {
  getTimestamp() {
    return Date.parse(new Date().toString())
  }
}
