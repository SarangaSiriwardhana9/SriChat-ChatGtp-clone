import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res: any = await openai
    .createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,

    }).then((res: any)=> res.data.choices[0].text)
    .catch(
        (err: any) => // Explicitly specify the type of 'err' as 'any'
        `Sri chat unable to answer this question.(Error: ${err.message})`
        )
    return res;
}
export default query;