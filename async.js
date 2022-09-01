// // async function getProdotti(){return [];}
// // async function getUtente(callback){
// //     //
// //     //5sec
// //     let u = 1
// //     callback(u)
// //     return u;
// // }
// // async function getCarrello(u){return [];}

// // let prodotti = getProdotti()//10sec
// // // let carrello = getCarrello(utente) //6sec
// // let carrello;
// // let utente = getUtente(getCarrello) //5sec

// //NON POSSO ASSEGNARE UN VALORE OTTENUTO DAL RETURN DI UNA FUNZIONE ASINCRONA PERCHÈ DOPO AVERLA AVVIATA IL RESTO DEL CODICE HA CONTINUATO LA SUA ESECUZIONE E L'OPERAZIONE DI ASSEGNAZIONE = HA GIÀ ASSEGNATO undefined ALLA VARIABILE (L'ESECUZIONE DELLA FUNZIONE TERMINERÀ SUCCESSIVAMENTE MA IL COMANDO = NON VIENE RIESEGUITO)
// //QUINDI NON ASSEGNO IL VALORE DAL RETURN MA LO FACCIO ASSEGNARE DA UNA CALLBACK FUNCTION
// function getProdotti(){ return []; }
// let prodotti = getProdotti() // []
// creaCards(prodotti)

// async function getProdottiAsync(){
//     prodottiAsync = [];
//     creaCards(prodottiAsync)
// }
// let prodottiAsync; //undefined
// // getProdottiAsync(); //asincrono quindi lo avvio e passo oltre
// // creaCards(prodottiAsync); //quindi eseguo creaCards ancora con prodottiAsync == undefined
// getProdottiAsync();


// function creaCards(prodArr){
//     //crea una card per ogni prodotto dell'array
// }

// //Callback function
// let btn = document.getElementById("btn")

// btn.addEventListener("click", ()=>{
//     alert("Premuto")
// })

// prodotti.forEach((e)=>{
//     console.log(e);
// })


// //Problema delle callback function
// // getImage("image.png", )

// // let p = new Promise((image, err)=>{
// //     if(err) {console.log("Errore", err)}
// //     else {
// //         return image
// //     }
// // })



// // p.then(compressImage(image, (compressedImage, err)=>{
// //     if(err) {console.log("Errore", err)}
// //     else {
// //         applyFilter()
// //     }
// // }))


// // //
// // let u = new Promise(getUtente)
// // u.then((res)=>{
// //     let carrello = getCarrello(res)
// // }).then()


// /*
//  - Ci sono operazioni che devono essere asincrone (http request, ...)
//  - L'esecuzione asincrona avvia un'esecuzione e va a quella successiva (lasciandola finire per conto proprio)
//  - Non possiamo assegnare i return di una esecuzione asincrona -> perchè l'assegnazione verrebbe eseguita subito dopo l'avvio dell'esecuzione mentre il risultato dell'esecuzione arriva più avanti nel tempo
//  */
// /*
//  let x = 5 + 3
//  x
//  5
//  3
//  8
//  x = 8

//  function f() { return 3 + 5; }
//  let x = f()
//  x
//  f() -> |3
//         |5
//         |3+5=8
//  8   <- return 8
//  x = 8
  
//  async function g() { return 3 + 5; }
//  let y = g()
//  y
//  g() ->| 3
//  y =   | 5
//        | 3+5=8
//  8   <-  return 8



//  let prodotti;
//  let utente;

//  prodotti = g()
//  g(){ 
//     utente = 1
//      getCarrello(utente){
//         checkout(){
//             aqddEventListener(()=>{

//             })
//         }
//      }
//   }

//   */

//   //Le promise sono oggetti concettualmente complessi, la parte importate è capire come usarle

//   //let p = new Promise() //richiede un parametro che è la funzione asincrona che vogliamo eseguire -> questa funzione riceve come parametri 2 funzioni di callback, successo ed errore
//   function f() { 
//     let x = 3
//     let y = 5
//     let res = x+y
//     return res
//   }

//   //La creazione (new) e l'assegnazione (=) sono operazioni sincrone
//   let p = new Promise(function(succ, err){ 
//     console.log("INIZIO PROMISE")
//     //nella funzione inseriamo il codice da eseguire asincronamente (questo codice è eseguito parallelamente ma la sua esecuzione è sincrona)
//     let x = 3
//     let y = 1
//     let res = x+y
//     // return res //Non c'è return (perchè l'esecuzione è asincrona e non ci sarà più il punto a cui ritornare il risultato)
//     //invece usiamo la funzoine succ() per restituire il risultato al then successivo
//     if(res > 5) {
//         succ(res)
//     } else {
//         err(res)
//     }
//   })

//   //Dopo aver creato la Promise concatena il .then
//   //passando come parametro una funzione da eseguire dopo quella della promise e riceverà come parametro il risultato della promise
//   //Possiamo usare su una promise il metodo catch() da eseguire in caso dovesse essere eseguito la callback err()
//   p.then(
//     (r)=>{console.log("THEN", r)}
//     ).catch(
//         (e)=>{console.log("CATCH", e)}
//         )

//     //FETCH -> funzione che effettua una chiamata http su una risorsa
//     //restituisce una promise che 
//         // Resolved -> passa al then il risultato della lettura
//         // Rejected -> passa al catch l'errore
//     let file = fetch("file.txt")

//     //file.then((r)=>{console.log("Successo Fetch", r)}).catch((e)=>{console.log("Errore Fetch", e)})

//     //USO DEL FETCH
//     //il risultato che arriva dal fetch in caso di successo è una Response
//     //Dalla response possiamo leggere il contenuto usando il metodo .json()/.text()  -> resituisce una promise

//     // file.then((r)=>{
//     //     let val = r.text()
//     //     val.then((result)=>{
//     //         console.log("RESULT", result);
//     //     })
//     // })

//     //Se facciamo un return di una Promise dentro alla funzione parametro del then quel return può essere letto dal then succesivo

//     // let t = file.then((res)=>{
//     //     // console.log("PRIMO THEN", res);
//     //     return res.text()
//     // })

//     // t.then((result)=>{
//     //     console.log("SECONDO THEN", result)
//     // })

//     //PER LEGGERE UN FILE DI TESTO
//     // fetch("file.txt").then((res)=>{return res.text()}).then((result)=>{console.log("RISULTATO", result)})
//     fetch("file.txt").then(res=>res.text()).then(
//         (res)=>{
//             //QUA ESEGUO IL CODICE RELATIVO AL RISULTATO DELLA LETTURA ASINCRONA
//             console.log("FINE", res);
//         }
//     )

//     //Omettere le {} in una funzione a freccia implica il return dell'UNICO comando a destra della freccia
//     //(res)=>{return res.json()} -> res=>res.json()
//     // let f = ()=>5 == ()=>{return 5}

//     //PER LEGGERE UN'API (O DATI JSON)
//     let url = "http://jsonplaceholder.typicode.com/users"
//     fetch(url).then(res=>res.json()).then(
//         (res)=>{
//             console.log("RISULTATO", res)
//             //QUA USO I DATI CHE HO RICEVUTO
//         }
//     )


    console.log("INIZIO ESEC");
    // let prodottiArr = fetch()  //NO PERCHÈ ASYNC
    //1 - creiamo la variabile
    let prodottiArr
    //2 - assegniamo il risultato nel then
    fetch("prodotti.json").then(res=>res.json()).then(
        (res)=>{
            prodottiArr = res
            console.log("PRODOTTI", prodottiArr);
            //TUTTE LE ESECUZIONI DEL SITO RELATIVE A prodottiArr devono essere o interne a questa funzione o eseguite dopo che la prime ha temrinato (es: con un eventListener)
        }
    )
    //3 - NON POSSIMAO USARE PRODOTTIARR DOPO IL FETCH PERCHÈ IL RESTO DEL CODICE VA AVANTI 
    btn.addEventListener("click", ()=>{
        console.log("CLICK", prodottiArr);
    })
    console.log("FINE ESEC", prodottiArr);


    //ASYNC/AWAIT
    //ASYNC FUNCTION RESTITUISCE UNA PROMISE
    async function f(){
        console.log("F INIZIO");
        //DENTRO UNA ASYNC FUNCTION POSSO ASPETTARE LE ALTRE ESECUZOINI ASINCRONE CON await
        let res = await fetch("prodotti.json")
        let arr = await res.json()
        console.log("F FINE", arr);
    }

    console.warn("START")
    f().then()
    console.warn("END")
    