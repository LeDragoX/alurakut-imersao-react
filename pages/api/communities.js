import { SiteClient } from 'datocms-client'

async function requestReceiver(request, response) {

  if (request.method === "POST") {
    const TOKEN_FULL = "3becc0e9b3b4235c47137490a77585"
    const client = new SiteClient(TOKEN_FULL)

    // Validar os dados antes de sair cadastrando
    const recordData = await client.items.create({
      itemType: "971872", // "Communities" Model ID created by Dato
      ...request.body,
      // title: "Comunidade Teste",
      // imageUrl: "https://github.com/ledragox.png",
      // creatorSlug: "ledragox",
    })

    // console.log("New Data: ", recordData) // Aparece no terminal somente, no navegador NÃO

    response.json({
      data: 'Algum dado qualquer',
      recordData: recordData,
    })
    return;
  }

  response.status(404).json({
    message: "o GET ainda não pode realizar nada, o POST sim"
  })
  return;

}

export default requestReceiver