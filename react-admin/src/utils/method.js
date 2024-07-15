function deepCopy(obj, hash = new WeakMap()) {  
    if (typeof obj !== 'object' || obj === null) {  
        return obj;  
    }  
      
    if (hash.has(obj)) {  
        return hash.get(obj);  
    }  
  
    let copy = Array.isArray(obj) ? [] : {};  
    hash.set(obj, copy);  
  
    for (let key in obj) {  
        if (obj.hasOwnProperty(key)) {  
            copy[key] = deepCopy(obj[key], hash);  
        }  
    }  
  
    return copy;  
  }

  export {deepCopy}