import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-a732810fda994544b8a07ae450d3b4f7' // 如果不需要API密钥，可以删除这一行
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();
