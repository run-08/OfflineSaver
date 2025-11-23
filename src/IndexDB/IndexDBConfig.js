import { useEffect } from "react";
import SectionZustand from "../SharedMemory/SectionZustand";
const IndexDBConfig = () =>{ 
    const sectionalDetails = SectionZustand((state) => state.sectionDetails); 
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
     }
     useEffect(()=>{
         configIndexDB();
     },[]);
}

export default IndexDBConfig;