export type IUsers = IPaginate<IUser> & {
  data: IUser[]
}

export type IUser = {
  id: number
  name: string
  year: number
  color: string
  first_name: string
  last_name: string
  pantone_value: string
}
