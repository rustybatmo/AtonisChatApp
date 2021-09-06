const socket = io("http://localhost:4000");

const handle = document.querySelector("#handle");
const message = document.querySelector("#message");
const button = document.querySelector("#send");
const output = document.querySelector("#output");

// handle.addEventListener("keypress", () => {
//   console.log(handle.value);
// });

button.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
  message.value = "";
  // console.log({ handle: [handle.value], messagae: [message.value] });
});

//Listening for events

socket.on("chat", (data) => {
  console.log(data);
  console.log(output);
  const { message, handle } = data;
  output.innerHTML = `<div> ${handle} : ${message} </div>` + output.innerHTML;
});

console.log(handle);
