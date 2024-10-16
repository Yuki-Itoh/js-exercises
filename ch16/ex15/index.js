import threads from "worker_threads";

if (threads.isMainThread) {
  //   let sharedBuffer = new SharedArrayBuffer(4);
  //   let sharedArray = new Int32Array(sharedBuffer);
  let num = 0;
  let worker = new threads.Worker("./worker.js", { workerData: num });
  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      num++;
    }
    worker.on("message", (message) => {
      if (message === "increment") {
        num++;
      } else if (message === "done") {
        console.log(num);
      }
    });
  });
} else {
  let num = threads.workerData;
  for (let i = 0; i < 10_000_000; i++) {
    num++;
  }
  threads.parentPort.postMessage("done");
}
