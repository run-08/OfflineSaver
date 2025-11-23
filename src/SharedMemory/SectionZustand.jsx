import { create } from "zustand";
const SectionZustand = create((set) => ({
   sectionDetails:{},
   setSectionDetails:(response) => (
    set(()=>({sectionDetails:response}))
   )
}));
export default SectionZustand;