let range = {
    from: 0,
    to: 5,
}

range[Symbol.iterator] = function() {
    return { //the iterator object
        cur: this.from,
        to: this.to,
        next: function() {
            if(this.cur >= this.to) return {done: true};
            else return {done: false, value: this.cur++};
        }
    }
}

for (let val of range) {
    console.log(val); //results in 01234
}