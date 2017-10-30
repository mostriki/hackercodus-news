export class News {
  constructor (
    public header: string,
    public subheader: string,
    public authorFirstName: string,
    public authorLastName: string,
    public content: string,
    public category: string,
    public ID: number
  ) {}
}
