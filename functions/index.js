const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const express=require('express');
const elim = express();
const bd=admin.firestore()

const cors = require("cors")({ origin: true });

// funcion visualizar

exports.getLugares =functions.https.onRequest((req, res) =>

cors(req, res, async () => {
  try {
  let lugares= {data:[]};
  lugares.snapshot= await bd.collection('lugares')
 // orderBy('fechaCreado','desc')
  .get()
  lugares.snapshot.forEach((doc)=> {
      lugares.data.push({    
        id: doc.id, 
        ...doc.data()
      }
      );
    });
  res.status(200).json({
   data: lugares.data,
  success:true,
  messange:"datos exitoso"} )  
  } catch (error) {
    res.status(500).json({
      data: [],
     success:false,
     messange:"errr de servicio"} ) 
    
  }
})
);




exports.postLugares = functions.https.onRequest((req, res) =>
cors(req, res, async ( ) => {
  try {
const {informacion}=req.body
await bd.collection('lugares')
//.orderBy('nombre','desc')
.add(informacion)
res.status(200).json({
messange:"datos exitoso"} ) 
}
catch(error) {
   res.status(500).json({
     data: [],
    success:false,
    messange:"errr de servicio"} ) 
  }
})
);

//Eliminar datos
exports.deleteLugares = functions.https.onRequest((req, res) =>
cors(req, res, async () => {
  try {
  const {id}=req.body
  await bd.collection('lugares').doc(id)
  //.orderBy('nombre','desc')
  .delete()
  res.status(200).json({

    success:true,
    messange:id})  
  } catch (error) {
    res.status(500).json({
      data: [],
     success:false,
     messange:"error de conexion" 
    }) 
    
  }
})
);


//Editar datos 
exports.updateLugares = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
     const {informacion}=req.body
    await bd.collection('lugares').doc(informacion.id)
    //.orderBy('nombre','desc')
    .update(informacion)
    res.status(200).json({
    success:true,
    messange:"datos exitoso " })  
    } catch (error) {
      res.status(500).json({
        data: [],
       success:false,
       messange:"errr de servicio"} ) 
    }
  })
);






/*

exports.addMensagge = functions.https.onRequest(async (req, res) => {
  coçnst originalText = req.query.text;
  const writeResult =await admin.firestore().collection('messages').add({ 
    original: originalText });
    res.json({result:`Message with ID: ${writeResult.id} added`   })
  });

  exports.add=functions.https.onRequest((req,res)=> {
    admin.firestore().collection('item').add({ text: req.query.text
     }).then(r=> { 
      res.send('completado');

    }).catch(err=> { 
      res.sen('error');

    })

    
  });
    
  exports.helloWorld = functions.https.onRequest((request, response) => {
 
    response.send("Noldin");
 });


 exports.suma = functions.https.onRequest((request, response) => {
   response.redirect('https://firebase.google.com/docs/functions/get-started');
});



*/




//const nuevoLugar={  
  //nombre: req.body.nombre,
  //disponibilidad: req.body.disponibilidad,
  //radio: req.body.radio,
  //puntos: req.body.puntos,
  //tipo: req.body.tipo,
  //fechaCreado: admin.firestore.Timestamp.fromDate(new Date())
//};