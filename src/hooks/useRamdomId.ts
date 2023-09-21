export const  RamdomId = ():string => {
  const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id:string = '';

  for (let i = 0; i < 8; i++) {
    const idRamdom = Math.floor(Math.random() * values.length);
    id += values.charAt(idRamdom);
  }

  return id;
}
