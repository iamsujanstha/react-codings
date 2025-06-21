export function debounce<T extends unknown[]>(callback: (...args: T) => void, delay: number, immediate: boolean = false) {
  let timerId: number | undefined;

  //here timerId decalared outside of return function that craetes closure 
  // and it ensures that every time return function calls the function should have same timerId

  return function (this: unknown, ...args: T) {
    clearTimeout(timerId);
    const shouldCallImmediately = immediate && !timerId;

    if (shouldCallImmediately) {
      callback.apply(this, args);
    }
    timerId = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timerId = undefined;
    }, delay);
  }
}


// Arrow function's this: Determined where it's defined(lexical scope).

// Regular function's this: Determined where it's called(dynamic scope).


/* =========Regular Function as Callback==========
  const obj = {
  value: 42,
  handler: debounce(function () { // executes the debouce return function
    console.log(this.value);
  }, 300),
};

obj.handler(); if Don't use callback.apply return undefined


==========Arrow Function as Callback=============
const obj = {
  value: 42,
  handler: debounce(()=> {
    console.log(this.value);
  }, 300),
};

obj.handler(); // call it

*/