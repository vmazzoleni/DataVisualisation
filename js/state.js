export const glacier = await fetch(new URL('../data/glaciers.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('Dataset unavailable');return r.json()});
export const state={location:'Switzerland',year:2026,filter:'length',focus:'geo'};
const listeners=new Set();
export function subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn)}
export function update(patch){Object.assign(state,patch);listeners.forEach(fn=>fn(state))}
export function availableYears(){return state.filter==='length'?glacier.observations.map(d=>d.year):[]}
