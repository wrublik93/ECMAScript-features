// static это то, что принадлежит к классу, а не к конкретным объектам

class Counter {
    count = 1;
    inc = () => {
        this.count += Counter.incStep;
        console.log(this.count);
    };
    static incStep = 2;
    static incAll = function(arr) {
        arr.forEach((c) => c.inc());
    }
};

Counter.incAll([]);

const cnt = new Counter();
console.log(cnt.count);
cnt.inc();
cnt.inc();