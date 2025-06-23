console.log('Hello Async')


let newDate=null;

const handleDateChange=(e)=>{
     newDate=new Date(e.target.value);
     console.log('New Date: '+newDate);

     const targetMilliSecond=newDate.getTime();
     console.log('targetMilliSecond: '+targetMilliSecond);

     const currentMilliSecond=newDate.getTime();
     console.log('currentMilliSecond: '+currentMilliSecond);

     const diff=(targetMilliSecond-currentMilliSecond)/1000;
     console.log('diff: '+diff)
}

