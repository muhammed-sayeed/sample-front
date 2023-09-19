export interface tokenResponce{
   success:boolean
   tokens: tokens
}

export interface tokens{
    access:string
    refresh:string
}