import OpenAI from "openai";
import fs from "fs";


const openai = new OpenAI({ apiKey: 'KEY' });


// async function uploadFile() {
//   const file = await openai.files.create({
//     file: fs.createReadStream("Manual de Ar Condicionado - Samsung.pdf"),
//     purpose: "assistants",
//   });

//   console.log(file);
// }

// //uploadFile();

// async function readFile() {
//   const myAssistantFile = await openai.beta.assistants.files.create(
//     "asst_0NlG9MCYd7aRzbqbBwHhw4jl",
//     {
//       file_id: "file-kQPCGOAfA9xpCZgig2AEcykV"
//     }
//   );
//   console.log(myAssistantFile);
// };

// //readFile()



// async function getFile() {
//   const myAssistantFile = await openai.beta.assistants.files.retrieve(
//     "asst_0NlG9MCYd7aRzbqbBwHhw4jl",
//     "file-kQPCGOAfA9xpCZgig2AEcykV"
//   );
//   console.log(myAssistantFile);
// }

// //getFile();

// async function main() {
//   const myAssistant = await openai.beta.assistants.create({


//     instructions:
//       "You will be provided with a user air conditioner manual. You will asnwer only questions related to that manual.",
//     name: "Manual Reader",
//     tools: [{ type: "retrieval" }],
//     file_ids: ["file-kQPCGOAfA9xpCZgig2AEcykV"],
//     model: "gpt-3.5-turbo-1106",
//   });

//   console.log(myAssistant);
// }
// //main()


// async function creteThread() {
//   const emptyThread = await openai.beta.threads.create();

//   console.log(emptyThread);
// };
// // thread id -> thread_ziX7SZPvqERXwVYBmU3dZu5K
// //creteThread()

// async function createMessage() {
//   const threadMessages = await openai.beta.threads.messages.create(
//     "thread_qBwrX6dUcFNdfql6Yk0KIHto",
//     { role: "user", content: "O condicionador de ar não funciona." }
//   );

//   console.log(threadMessages);
// };

// //createMessage()



// async function createAndRunThread() {
//   const run = await openai.beta.threads.createAndRun({
//     assistant_id: "asst_zGTPG6DFuq5sMqOsgeCALRhh",
//     thread: {
//       messages: [
//         { role: "user", content: "O condicionador de ar não funciona." },
//       ],
//     },
//   });

//   console.log(run);
// };

// //createAndRunThread()



// const run = await openai.beta.threads.runs.create(
//   "thread_ziX7SZPvqERXwVYBmU3dZu5K",
//   { assistant_id: "asst_zGTPG6DFuq5sMqOsgeCALRhh" }


// );

// //console.log(run)


// async function test() {
//   const myAssistant = await openai.beta.assistants.create({
//     instructions:
//       "You will be provided with a user air conditioner manual. You will asnwer only questions related to that manual.",
//     name: "Manual Reader",
//     tools: [{ type: "retrieval" }],
//     model: "gpt-3.5-turbo-1106",
//   });

//   console.log(myAssistant);
// }

// //test()  



// async function resposta() {
//   const run = await openai.beta.threads.runs.create(
//     "thread_qBwrX6dUcFNdfql6Yk0KIHto",
//     { assistant_id: "asst_zGTPG6DFuq5sMqOsgeCALRhh" }
//   );

//   console.log(run);
// }

// //resposta()

// async function respostas() {
//   const threadMessages = await openai.beta.threads.messages.list(
//     "thread_qBwrX6dUcFNdfql6Yk0KIHto"
//   );

//   console.log(threadMessages);
// };


// async function getMessages() {
//   const message = await openai.beta.threads.messages.retrieve(
//     "thread_qBwrX6dUcFNdfql6Yk0KIHto",
//     "msg_kQVR04OUFxD3DVt6JDQ8zyny"
//   );

//   console.log(message.content);
// };


// async function createAndRun() {
//   const run = await openai.beta.threads.createAndRun({
//     assistant_id: "asst_zGTPG6DFuq5sMqOsgeCALRhh",
//     thread: {
//       messages: [
//         { role: "user", content: "Explain deep learning to a 5 year old." },
//       ],
//     },
//   });

//   console.log(run);
// }
// //createAndRun()



// //getMessages()

// //creteThread()
// //respostas()


// //createMessage()


async function listAssistants() {
  const myAssistants = await openai.beta.assistants.list({
    order: "desc",
    limit: "20",
  });

  for(let i = 0; i < (myAssistants.data).length; i++){
    console.log(myAssistants.data[i].id)
  }
}

listAssistants();

async function deleteAssistants() {
  const response = await openai.beta.assistants.del(["asst_snWRaiVf7p5xqvbg9C1AD4TM"]);

  console.log(response);
}
//deleteAssistants();


async function listFiles() {
  const list = await openai.files.list();

  for await (const file of list) {



    console.log(file);
  }
}

//listFiles();

async function main() {
  const file = await openai.files.del("file-6LIfRKnsykeX5NLybnTBOtX6");

  console.log(file);
}

main();


