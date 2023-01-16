import { cityIn, cityFrom, cityTo } from 'lvovich';

export default function PokazatSort(value,value2,category,setCategory,setValue,setValue2,axios,setArenda,Arenda,gorod){
  const h1= document.querySelector(".ArendaInnerTextH1");
  let results;
  let DopOpciiCategory=false;
  const filterKomnati = document.getElementById("SpisokFilter");
  const filterMesta = document.getElementById("FilterMesta");
  const filterRayon = document.getElementById("FilterRayon"); 
  const filterMetro = document.getElementById("FilterMetro2");
  const input = document.getElementById("checkboxInputValue");
  const Opcii = document.querySelector(".Opcii");
  const dopOpcii = document.querySelector(".DopOpcii");
  let results1 = 0;
  let results2;
  let k=0;
  let z=0;

  // Список чексов скрыт
  if(Opcii && dopOpcii!==null && input==null){
    Opcii.classList.remove("active");
    dopOpcii.classList.remove("active");
  }

  // Очистка кнопок поиска сверху
  document.querySelectorAll(".categoriesBtn").forEach(function(categoriaalone){
    const categoria = categoriaalone.querySelector(".xHidden");
    categoria.classList.remove("active");
    categoriaalone.classList.remove("hidden");
  });
  if(input!==null && filterMetro!==null && filterMesta!==null && filterRayon!==null && filterKomnati!==null){
    if (category && input.value=="" && filterKomnati.textContent == "Выберите" && filterMetro.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterRayon.textContent=="Выберите" && DopOpciiCategory==false ){
      setCategory("");
      h1.textContent=`Аренда квартир на сутки в ${cityIn(gorod)}`;
    }
  }

  axios.get(`/ArendaCard?city2=${gorod}`)
  .then(({data})=>{

  if(input!==null && filterMetro!==null && filterMesta!==null && filterRayon!==null){
    
     
    if(input.value!=="" || filterMetro.textContent!=="Выберите" || filterMesta.textContent!=="Выберите" || filterRayon.textContent!=="Выберите"){
      DopOpciiCategory=true;
    }
    else{
      DopOpciiCategory=false;
    }

    if ((value=="" && value2!=="") || (value!=="" && value2=="")){
      alert("Для поиска, по заданному значению стоимости, необходимо заполнить оба поля ввода.")
    }

    // Multiple filter
    if((value!=="" && value2!=="") && filterKomnati.textContent=="Выберите" && DopOpciiCategory==false){ //Без опций чисто цена
      if(value2 > value){
        results = data.filter((item)=>(item.sent>`${value}` && `${value2}`>item.sent));
        setArenda(results);
      }
      else{
        results = data.filter((item)=>(item.sent >=`${value2}` && `${value}`>= item.sent));
        setArenda(results);
      }    
    }

    else if(filterKomnati.textContent!=="Выберите" && (value=="" && value2=="") && DopOpciiCategory==false){ // Filter komnat
      results = data.filter((item)=>
      (item.komnati==(filterKomnati.textContent.substring(0,6)+".")));
      setArenda(results); 
    }

    else if ((value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите" && DopOpciiCategory==false){ //Без опций квартиры+цена
      if(value2 > value){
        results = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) &&(item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
        setArenda(results);
      }
      else{
        results = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
        setArenda(results);
      }    
    }
    else if(DopOpciiCategory==true){
      if((value=="" && value2=="") && filterKomnati.textContent=="Выберите"){ //Чисто опции
        // Spalnie mesta одиночное

        if(filterRayon.textContent=="Выберите" && filterMesta.textContent!=="Выберите" && filterMetro.textContent=="Выберите" && input.value==""){
          results = data.filter((item)=>
          (item.opcii.length!==0 && item.opcii[0].mesta==(filterMesta.textContent)));
          setArenda(results); 
        }

        // Rayon одиночное

        else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" && input.value==""){
          results = data.filter((item)=>
          (item.rayon==(filterRayon.textContent + " р.")));
          setArenda(results); 
        }

        // Metro одиночное

        else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent!=="Выберите" && input.value==""){
          results = data.filter((item)=>
          (item.metro==(filterMetro.textContent)));
          setArenda(results); 
        }

        // checkbox одиночный

        else if(filterRayon.textContent =="Выберите" && filterMesta.textContent =="Выберите" && filterMetro.textContent =="Выберите" && input.value!==""){
          const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
          for (let i=0; i<lengthResult.length;i++){
            results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
              ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)));
              // Uslovia proverki podlennosti
              if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
                setArenda(results2);
                results1=results2.length;
                k++;
              }

              else if(results2.length!==0 && results1==results2.length && z==k){
                setArenda(results2);
                results1=results2.length
                k++
                z=k
              }

              else if(results2.length!==0 && results1==results2.length && z<k){
                Arenda.push(results2);
                results1=results2.length
                k++
                z=k
              }
          }
        }
        // Filter rayona s chem-to (2 elementa)

        // filter Rayona i Mesta
        else if(filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent =="Выберите" && input.value==""){
          results = data.filter((item)=>
          (item.opcii[0].mesta==(filterMesta.textContent) && (item.rayon==(filterRayon.textContent + " р."))));
          setArenda(results); 
        }

        // filter rayona s metro
        else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent == "Выберите" && filterMetro.textContent !=="Выберите" && input.value==""){
          results = data.filter((item)=>
          (item.metro==(filterMetro.textContent) && (item.rayon==(filterRayon.textContent + " р."))));
          setArenda(results); 
        }
        
        // filter rayona s chekboxom
        else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent == "Выберите" && filterMetro.textContent =="Выберите" && input.value !== ""){
          const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
          for (let i=0; i<lengthResult.length;i++){
            results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
              ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.rayon==(filterRayon.textContent + " р.")) );
              // Uslovia proverki podlennosti
              if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
                setArenda(results2);
                results1=results2.length;
                k++;
              }
              else if( results1==results2.length && z==k){
                setArenda(results2);
                results1=results2.length
                k++
                z=k
              }
              else if(results1==results2.length && z<k){
                Arenda.push(results2);
                results1=results2.length
                k++
                z=k
              }
          }
        }

        // Filter Mesta s chem-to (2 elementa)

        // filter mesta i metro
        else if(filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent !=="Выберите" && input.value ==""){
          results = data.filter((item)=>
          (item.opcii[0].mesta==(filterMesta.textContent) && (item.metro==(filterMetro.textContent))));
          setArenda(results); 
        }

        // filter mesta s checkboxom
        else if (filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent =="Выберите" && input.value !==""){
          const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
          for (let i=0; i<lengthResult.length;i++){
            results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
              ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.opcii[0].mesta==(filterMesta.textContent)));
              // Uslovia proverki podlennosti
              if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
                setArenda(results2);
                results1=results2.length;
                k++;
              }
              else if( results1==results2.length && z==k){
                setArenda(results2);
                results1=results2.length
                k++
                z=k
              }
              else if(results1==results2.length && z<k){
                Arenda.push(results2);
                results1=results2.length
                k++
                z=k
              }
          }
        }

        // Filter Metro s chekboxom 

        else if (filterRayon.textContent == "Выберите" && filterMesta.textContent == "Выберите" && filterMetro.textContent !=="Выберите" && input.value !==""){
          const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
          for (let i=0; i<lengthResult.length;i++){
            results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
              ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.metro==(filterMetro.textContent)));
              // Uslovia proverki podlennosti
              if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
                setArenda(results2);
                results1=results2.length;
                k++;
              }
              else if( results1==results2.length && z==k){
                setArenda(results2);
                results1=results2.length
                k++
                z=k
              }
              else if(results1==results2.length && z<k){
                Arenda.push(results2);
                results1=results2.length
                k++
                z=k
              }
          }
        }
        
      //  Filter 3 elementa dop opciy

      // filter rayon,metro,mest
      else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent !=="Выберите" && input.value==""){
        results = data.filter((item)=>
        (item.metro==(filterMetro.textContent) && (item.rayon==(filterRayon.textContent + " р."))&& (item.opcii[0].mesta==(filterMesta.textContent))));
        setArenda(results); 
      }

      // filter rayon,mesta,checkbox
      else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent =="Выберите" && input.value!==""){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
          for (let i=0; i<lengthResult.length;i++){
            results2 = data.filter((item)=>
              (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р."))&& (item.opcii[0].mesta==(filterMesta.textContent))));
              // Uslovia proverki podlennosti
              if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
                setArenda(results2);
                results1=results2.length;
                k++;
              }
              else if( results1==results2.length && z==k){
                setArenda(results2);
                results1=results2.length
                k++
                z=k
              }
              else if(results1==results2.length && z<k){
                Arenda.push(results2);
                results1=results2.length
                k++
                z=k
              }
          }
          
      }

      // filter rayon,metro,checkbox
      else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent == "Выберите" && filterMetro.textContent !=="Выберите" && input.value !== ""){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>
            (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && (item.metro==(filterMetro.textContent))));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

      // filter mesta,metro,checkbox
      else if (filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent !=="Выберите" && input.value !== ""){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>
            (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.metro==(filterMetro.textContent))));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }
      
      // filter 4 elementa
      else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && filterMetro.textContent !=="Выберите" && input.value !== ""){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>
            (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && (item.metro==(filterMetro.textContent)) && (item.opcii[0].mesta==(filterMesta.textContent))));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

    }

  // /////////////////////////////////////////////////////////////////////////////////////////////

  //MULTIPLY FILTER ALL 

  else if(DopOpciiCategory==true){
      // Spalnie mesta 

      // *2 elementa
      // mesta+value
      if(filterRayon.textContent=="Выберите" && filterMesta.textContent!=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
        if(value2 > value){
          results = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) &&(item.opcii.length!==0 && item.opcii[0].mesta==(filterMesta.textContent))));
          setArenda(results);
        }
        else{
          results = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.opcii.length!==0 && item.opcii[0].mesta==(filterMesta.textContent))));
          setArenda(results);
        }    
      }

      // mesta+komnati
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent!=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        results = data.filter((item)=>
        (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii.length!==0 && item.opcii[0].mesta==(filterMesta.textContent)));
        setArenda(results); 
      }

      // Rayon + value (item.rayon==(filterRayon.textContent + " р.")));
      else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
        if(value2 > value){
          results = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) &&(item.rayon==(filterRayon.textContent + " р."))));
          setArenda(results);
        }
        else{
          results = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.rayon==(filterRayon.textContent + " р."))));
          setArenda(results);
        }    
      }

      // Rayon + komnati 
      else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        results = data.filter((item)=>
        (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.rayon==(filterRayon.textContent + " р.")));
        setArenda(results); 
      }

      // Metro+value item.metro==(filterMetro.textContent))
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent!=="Выберите" 
      && input.value=="" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
        if(value2 > value){
          results = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) &&item.metro==(filterMetro.textContent)));
          setArenda(results);
        }
        else{
          results = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && item.metro==(filterMetro.textContent)));
          setArenda(results);
        }    
      }

      // Metro+komnati
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent!=="Выберите" 
      && input.value=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        results = data.filter((item)=>
        (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && item.metro==(filterMetro.textContent));
        setArenda(results); 
      }

      // checkbox+value
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value!=="" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          if(value2 > value){
            results2 = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) && (item.opcii[0].length!==0 && 
            ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
          }
          else{
            results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.opcii[0].length!==0 && 
            ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
          }    
            // Uslovia proverki podlennosti
            if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }

            else if(results2.length!==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length!==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results2.length==0 && results1<results2.length && k==z){
              setArenda(results2);
            }

            else if(results2.length==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }
      
      // checkbox+komnati
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value!=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))&& (item.komnati==(filterKomnati.textContent.substring(0,6)+".")));
            // Uslovia proverki podlennosti
            if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }

            else if(results2.length!==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length!==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results2.length==0 && results1<results2.length && k==z){
              setArenda(results2);
            }

            else if(results2.length==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

      // Filter komnati s 2 elementami (3 elementa)

      // filter komnati,value s rayonom
      else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
        if(value2 > value){
          results2 = data.filter((item)=>((item.sent>`${value}` && `${value2}`>item.sent) &&
          (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          setArenda(results2);
        }
        else{
          results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && 
          (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          setArenda(results2);
        }    
      }

      // filter komnati,value s mesta
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent!=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
        if(value2 > value){
          results2 = data.filter((item)=>((item.sent>`${value}` && `${value2}`>item.sent) &&
          (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent))));
          setArenda(results2);
        }
        else{
          results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && 
          (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent))));
          setArenda(results2);
        }    
      }

      // filter komnati,value s metro
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent!=="Выберите" 
      && input.value=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
        if(value2 > value){
          results2 = data.filter((item)=>((item.sent>`${value}` && `${value2}`>item.sent) &&
          (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.metro==(filterMetro.textContent))));
          setArenda(results2);
        }
        else{
          results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && 
          (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.metro==(filterMetro.textContent))));
          setArenda(results2);
        }    
      }

      // filter komnati,value s checkbox
      else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent =="Выберите" 
      && input.value!=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){ 
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          if(value2 > value){
            results2 = data.filter(((item)=> (item.sent>`${value}` && `${value2}`>item.sent) && 
           (item.opcii[0].length!==0 && ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))&& (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          }
          else{
            results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && 
            (item.opcii[0].length!==0 && ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          }    
            // Uslovia proverki podlennosti
            if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }

            else if(results2.length!==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length!==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results2.length==0 && results1<results2.length && k==z){
              setArenda(results2);
            }

            else if(results2.length==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

      // filter komnati,rayona s mesta
      else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent!=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        results = data.filter((item)=>
        (item.opcii[0].mesta==(filterMesta.textContent) && (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
        setArenda(results); 
      }

      // filter komnati,rayona s metro  
      else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent!=="Выберите" 
      && input.value=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        results = data.filter((item)=>
        (item.metro==(filterMetro.textContent) && (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
        setArenda(results); 
      }
      
      // filter komnati,rayona s chekboxom
      else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value!=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
            ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

      // Filter komnati,mesta +1 element (3 elementa)

      // filter komnati,mesta i metro
      else if(filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && 
      filterMetro.textContent !=="Выберите" && input.value =="" && (value=="" && value2=="")){
        results = data.filter((item)=>
        (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))&&(item.opcii[0].mesta==(filterMesta.textContent) && (item.metro==(filterMetro.textContent))));
        setArenda(results); 
      }

      // filter komnati,mesta s checkboxom
      else if(filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && 
      filterMetro.textContent =="Выберите" && input.value !=="" && (value=="" && value2=="")){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
            ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent)));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

      // filter komnati,metro s chekboxom 

      else if(filterRayon.textContent == "Выберите" && filterMesta.textContent == "Выберите" && 
      filterMetro.textContent !=="Выберите" && input.value !=="" && (value=="" && value2=="")){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>(item.opcii[0].length!==0 && 
            ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.metro==(filterMetro.textContent)));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }
      
    //  Filter 4 elementa

    //filter komnati,value,rayon,checkbox -
    else if(filterRayon.textContent!=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent=="Выберите" 
      && input.value!=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
        const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          if(value2 > value){
            results2 = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))&&
            (item.rayon==(filterRayon.textContent + " р.")) && (item.opcii[0].length!==0 && ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
          }
          else{
            results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) &&
            (item.rayon==(filterRayon.textContent + " р.")) && (item.opcii[0].length!==0 && ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
          }    
            // Uslovia proverki podlennosti
            if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }

            else if(results2.length!==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length!==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results2.length==0 && results1<results2.length && k==z){
              setArenda(results2);
            }

            else if(results2.length==0 && results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }

            else if(results2.length==0 && results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
      }

    //filter komnati,value,mesta,checkbox -
    else if(filterRayon.textContent=="Выберите" && filterMesta.textContent!=="Выберите" && filterMetro.textContent=="Выберите" 
    && input.value!=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        if(value2 > value){
          results2 = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.opcii[0].length!==0 && 
          ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
        }
        else{
          results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.opcii[0].length!==0 && 
          ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
        }    
          // Uslovia proverki podlennosti
          if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }

          else if(results2.length!==0 && results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }

          else if(results2.length!==0 && results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results2.length==0 && results1<results2.length && k==z){
            setArenda(results2);
          }

          else if(results2.length==0 && results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }

          else if(results2.length==0 && results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }  

    //filter komnati,value,metro,checkbox -
    else if(filterRayon.textContent=="Выберите" && filterMesta.textContent=="Выберите" && filterMetro.textContent!=="Выберите" 
    && input.value!=="" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        if(value2 > value){
          results2 = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.metro==(filterMetro.textContent)) && (item.opcii[0].length!==0 && 
          ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
        }
        else{
          results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.metro==(filterMetro.textContent)) && (item.opcii[0].length!==0 && 
          ((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1))));
        }    
          // Uslovia proverki podlennosti
          if(results2.length!==0 && results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }

          else if(results2.length!==0 && results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }

          else if(results2.length!==0 && results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results2.length==0 && results1<results2.length && k==z){
            setArenda(results2);
          }

          else if(results2.length==0 && results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }

          else if(results2.length==0 && results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }  
    
    // filter komnati,rayon,metro,mesta
    else if(filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value =="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
      results = data.filter((item)=>
      (item.metro==(filterMetro.textContent) && (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent))));
      setArenda(results); 
    }

    // filter komnati,rayon,mesta,checkbox
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent =="Выберите" && input.value!=="" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          results2 = data.filter((item)=>
            (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р."))&& 
            (item.opcii[0].mesta==(filterMesta.textContent)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
        
    }

    // filter komnati,rayon,metro,checkbox
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent == "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && 
          (item.rayon==(filterRayon.textContent + " р.")) && (item.metro==(filterMetro.textContent)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }

    // filter komnati,mesta,metro,checkbox
    else if (filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.opcii[0].mesta==(filterMesta.textContent)) && 
          (item.metro==(filterMetro.textContent)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }

    // Value filter 3 elementa
    ////////////////////////////////////////////////////////////// 
    
    // filter value,rayon,metro,mesta
    else if(filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value =="" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
      if(value2 > value){
        results2 = data.filter(((item)=>(item.sent>`${value}` && `${value2}`>item.sent) && 
        item.metro==(filterMetro.textContent) && (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent))));
      }
      else{
        results2 = data.filter((item)=>((item.sent>=`${value2}` && `${value}`>=item.sent) && 
        item.metro==(filterMetro.textContent) && (item.rayon==(filterRayon.textContent + " р.")) && (item.komnati==(filterKomnati.textContent.substring(0,6)+".")) && (item.opcii[0].mesta==(filterMesta.textContent))));
      }    
      setArenda(results2); 
    }

    // filter value,rayon,mesta,checkbox
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent =="Выберите" && input.value!=="" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
        for (let i=0; i<lengthResult.length;i++){
          if(value2 > value){
            results2 = data.filter((item)=>
            (((item.sent>`${value}` && `${value2}`>item.sent) && (input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р."))&& 
            (item.opcii[0].mesta==(filterMesta.textContent))));
          }
          else{
            results2 = data.filter((item)=>
            ((item.sent>=`${value2}` && `${value}`>=item.sent) && (input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р."))&& 
            (item.opcii[0].mesta==(filterMesta.textContent)));
          }    
            // Uslovia proverki podlennosti
            if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
              setArenda(results2);
              results1=results2.length;
              k++;
            }
            else if( results1==results2.length && z==k){
              setArenda(results2);
              results1=results2.length
              k++
              z=k
            }
            else if(results1==results2.length && z<k){
              Arenda.push(results2);
              results1=results2.length
              k++
              z=k
            }
        }
        
    }

    // filter value,rayon,metro,checkbox
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent == "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        if(value2 > value){
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.sent>`${value}` && `${value2}`>item.sent) &&
          (item.rayon==(filterRayon.textContent + " р.")) && (item.metro==(filterMetro.textContent))));
        }
        else{
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.sent>=`${value2}` && `${value}`>=item.sent) &&
          (item.rayon==(filterRayon.textContent + " р.")) && (item.metro==(filterMetro.textContent))));
        }    
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }

    // filter value,mesta,metro,checkbox
    else if (filterRayon.textContent == "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        if(value2 > value){
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.opcii[0].mesta==(filterMesta.textContent)) && 
          (item.metro==(filterMetro.textContent)) && (item.sent>`${value}` && `${value2}`>item.sent)));
        }
        else{
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.opcii[0].mesta==(filterMesta.textContent)) && 
          (item.metro==(filterMetro.textContent)) && (item.sent>=`${value2}` && `${value}`>=item.sent)));
        }    
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }

    // //////////////////////////////////////////
    
    // 5 elementov v summe

    // filter 4 elementa + komnati
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value=="" && value2=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && 
          (item.metro==(filterMetro.textContent)) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }

    // filter 4 elementa + value
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value!=="" && value2!=="") && filterKomnati.textContent=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        if(value2 > value){
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && 
          (item.metro==(filterMetro.textContent)) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.sent>`${value}` && `${value2}`>item.sent)));
        }
        else{
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && 
          (item.metro==(filterMetro.textContent)) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.sent>=`${value2}` && `${value}`>=item.sent)));
        }    
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }
    
    // //////////////////////////////////////////

    // VSE ELEMENTI
    else if (filterRayon.textContent !== "Выберите" && filterMesta.textContent !== "Выберите" && 
    filterMetro.textContent !=="Выберите" && input.value !== "" && (value!=="" && value2!=="") && filterKomnati.textContent!=="Выберите"){
      const lengthResult = data.filter((item)=>(item.opcii[0].name.length!==0));
      for (let i=0; i<lengthResult.length;i++){
        if(value2 > value){
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && 
          (item.metro==(filterMetro.textContent)) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.sent>`${value}` && `${value2}`>item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
        }
        else{
          results2 = data.filter((item)=>
          (((input.value).split(",").indexOf(item.opcii[0].name[i])!==-1) && (item.rayon==(filterRayon.textContent + " р.")) && 
          (item.metro==(filterMetro.textContent)) && (item.opcii[0].mesta==(filterMesta.textContent)) && (item.sent>=`${value2}` && `${value}`>=item.sent) && (item.komnati==(filterKomnati.textContent.substring(0,6)+"."))));
        }    
          // Uslovia proverki podlennosti
          if(results1<results2.length && k==z){ //Osnova dlya 1 elementa
            setArenda(results2);
            results1=results2.length;
            k++;
          }
          else if( results1==results2.length && z==k){
            setArenda(results2);
            results1=results2.length
            k++
            z=k
          }
          else if(results1==results2.length && z<k){
            Arenda.push(results2);
            results1=results2.length
            k++
            z=k
          }
      }
    }
  }
  }
} 
  },[results])
}