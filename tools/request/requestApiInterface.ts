export interface RequestApiInterface {
  (url: string, data: any, method: string): Promise<any>
}
