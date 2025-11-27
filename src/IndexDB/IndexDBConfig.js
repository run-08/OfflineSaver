import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionZustand from "../SharedMemory/SectionZustand";
const IndexDBConfig = () =>{ 
   const[saved,setSaved] = useState(false);

    const sectionalDetails = SectionZustand((state) => state.sectionDetails); 
    const location = useLocation();
    const addDataStore = (data) =>{
        console.log(data);
        let open = indexedDB.open(data?.title);
        open.onsuccess = (event) => {
            const db = event.target.result;
            const tx = db.transaction(data?.objectStore,"readwrite");
            const store = tx.objectStore(data?.objectStore);
            const request = store.add({id:new Date(),data:data});
            request.onsuccess = (event) =>{
               console.log(event);
               console.log("Added Successfully: "+(event.target.result));
               setSaved(true);
            }
            request.onerror = (event) => {
               console.log("Failed to save : "+(event.target.error));
            }
            tx.oncomplete = () => {
               console.log("Transaction Completed...");
               const rtx = db.transaction(data?.objectStore,"readonly");
               const store2 = rtx.objectStore(data?.objectStore);
               const answers = store2.getAll();
               answers.onsuccess = (event) => {
                  console.log(event);  
                  console.log(answers.result);
               }
            }
        }
        open.onerror = (event) => {
          console.log(`Failed to open ${data?.title}!`);
          console.log(event.target.error);
        }
     }
    if(location.pathname === "/home/indexDB"){
      const answers = location?.state?.answers
      answers["title"]=location?.state?.title;
      answers["objectStore"]=location?.state?.objectStore;
      addDataStore(answers);
      return;
    }
     const configIndexDB = () =>{
        if(!sectionalDetails) return;
        let openRequest = indexedDB.open(sectionalDetails['title']);
        openRequest.onsuccess = (event) => {
           upgradeDB();
           console.log("IndexDB created...");
           console.log(event.target.result.version);
        }
        openRequest.onerror = (event) => {
         console.log(event.target);
          console.log("IndexDB Failed to created!");
        }
     }
     const upgradeDB = () => {
        const tempOpen = indexedDB.open(sectionalDetails['title']);
        console.log(sectionalDetails['title']);
        tempOpen.onsuccess = (event) =>{
             const db = event.target.result;
             const newVersion = db.version + 1;
             db.close();
             console.log(sectionalDetails);
             const upgradeRequest = indexedDB.open(sectionalDetails['title'],newVersion);
             upgradeRequest.onupgradeneeded = (event) => {
                const upgradedDB = event.target.result;
                for(let i=0;i<100;i++){ 
                    if(!sectionalDetails[i]) continue;
                    if(!upgradedDB.objectStoreNames.contains(sectionalDetails[i])){
                         upgradedDB.createObjectStore(sectionalDetails[i], { keyPath: "id" });
                         console.log("Created store:", sectionalDetails[i]);
                    }  
                }
             }
        }
        tempOpen.onerror = (event) =>{
             console.log("Error occurred during upgraded: "+(event.target));
        }
     }
    
     useEffect(()=>{
         configIndexDB();
     },[]);
}

export default IndexDBConfig;