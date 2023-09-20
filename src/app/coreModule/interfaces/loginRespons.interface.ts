export interface tokenResponce{
   success:boolean
   tokens: tokens
   message:string
}

export interface tokens{
    access:string
    refresh:string
}