export const apiKey='AIzaSyDYwGnMkSSwGjscABH5LaIBR-LCHbDlIW8';

export const valueconvertor=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}