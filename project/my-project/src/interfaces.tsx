
export interface ArendaCardProduct {
    id:string ,
    imageOwner:string,
    mail:string,
    name:string,
    number:string,
    options:{
      [key:string]:any
    },
    description:string,
    square:any,
    rayon:string,
    city2?:string,
    url:[],
    sent:number,
    total:string,
    rooms:any,
    linkMail:string,
    linkViber:string,
    linkWats:string,
    metro:string,
    readonly priceMin?:number,
    readonly priceMax?:number,
    city?:string,
    adress?:string,
    pointX?:number,
    pointY?:number,
}

export interface advertisementItem extends ArendaCardProduct{
  check:string
}

export interface cities {
  id:number,
  city:string,
}

export interface NewsItem{
  id:number,
  url:[string],
  title:string,
  secondTitle:string,
  fullInfo:string,
  data:string,
}

export interface advertisementItemRedux{
  city:string,
  sent:number,
  rooms:string,
  people:string,
  square:number,
  metro:string,
  rayon:string,
  FIO:string,
  number:string,
  mail:string,
  viber:string,
  whatsUp:string,
  workMail:string,
  dopInfo:{},
  description:string,
  idItem:number,
  idItemChange:number,
  length:number
}

export interface formPropsSignIn{
  signIn:(login:string,password:string)=>void
}



