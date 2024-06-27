export type IUsers = IPaginate<IUser> & {
  data: IUser[]
}

export type IUser = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}
