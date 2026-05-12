export default async function handler(req, res) {

  if(req.method !== "POST"){

    return res
      .status(405)
      .json({
        error:"POST only"
      });
  }

  try{

    const {
      text,
      from,
      to
    } = req.body;

    const response = await fetch(

      "https://translate.argosopentech.com/translate",

      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          q:text,
          source:from,
          target:to,
          format:"text"

        })
      }
    );

    const data =
      await response.json();

    res.status(200).json(data);

  }catch(error){

    console.log(error);

    res.status(500).json({
      error:"server error"
    });
  }
}
