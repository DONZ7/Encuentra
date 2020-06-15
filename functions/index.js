const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const cors = require('cors')({origin: true});
//const express=require('express');
//const app=express();
//const {Formulario}=require('../src/componentes/Formulario')


exports.addMensagge = functions.https.onRequest(async (req, res) => {
    const originalText = req.query.text;
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
      


//console.log('user created',user.email,user.uid)});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
 
    response.send("Noldin");
 });


 exports.suma = functions.https.onRequest((request, response) => {
   response.redirect('https://firebase.google.com/docs/functions/get-started');
});



exports.verlugares=functions.https.onRequest((req,res)=> {
admin
  .firestore()
  .collection('lugares')
  .orderBy('fechaCreado','desc')
  .get()
  .then((data)=> {
    let lugares= [];
    data.forEach((doc)=> {
      lugares.push({
        lugaresId: doc.id, 
        nombre: doc.data().nombre,
        disponibilidad: doc.data().disponibilidad,
        radio: doc.data().radio,
        puntos: doc.data().puntos,
        tipo: doc.data().tipo,
        fechaCreado: doc.data().fechaCreado}
      );
    });
    return res.json(lugares);
  })
    .catch((err)=>console.error(err));
  });

//insertar lugares
exports.lugares=functions.https.onRequest((req,res)=> {
//if(req.method!=='POST'){
//return res.status(400).json({error:'metodo no apropiado'})
//}

  const nuevoLugar={
    nombre: req.body.nombre,
    disponibilidad: req.body.disponibilidad,
    radio: req.body.radio,
    puntos: req.body.puntos,
    tipo: req.body.tipo,
    fechaCreado: new Date().toISOString()
  };

  admin
  .firestore()
  .collection('lugares')
  .add(nuevoLugar)
  .then((doc)=>{
    res.json({message: `documento ${doc.id} creado exitosamente`});
  })
  .catch((err)=>{
    res.staus(500).json({error: `creado con error`});
    console.error(err);
  });


});









//const nuevoLugar={
  //nombre: req.body.nombre,
  //disponibilidad: req.body.disponibilidad,
  //radio: req.body.radio,
  //puntos: req.body.puntos,
  //tipo: req.body.tipo,
  //fechaCreado: admin.firestore.Timestamp.fromDate(new Date())
//};