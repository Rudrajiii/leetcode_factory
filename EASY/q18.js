//2725. Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args);
  
    let myCancelFunc = () => {
      clearInterval(timer);
    }
    let timer = setInterval(()=>{
      fn(...args);
    } , t)
    return myCancelFunc
  };