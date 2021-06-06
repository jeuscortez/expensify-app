
  //Sample Calls

  
  // //child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach( (childSnapshot) => {
  //         expenses.push({
  //           id: childSnapshot.key,
  //           ...childSnapshot.val()
  //         });
  //       });
  //       console.log(expenses);
  // });
  


  //database.ref('expenses')
  // .once('value')
  // .then((snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach( (childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });
  
  // database.ref('expenses').push({
  //   description: 'sample',
  //   note: 'Note1',
  //   amount: 109500,
  //   createdAt: 37377833
  // });

// database.ref('notes/-MbTrnkdja5fkR8xxMZK').update({
//   body: 'JAVA, PYTHON'
// });

  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'Python'
  // });
  
  //inserting arrays in DB
  // const notes = [{
  //   id:'12',
  //   title: 'First Note',
  //   body: 'This is my note'
  // }, {
  //   id:'761asa',
  //   title: 'Another note',
  //   body: 'This is my note'
  // }];

  // database.ref('notes').set(notes);

  //Inserting Data
  // database.ref().set({
  //     name: 'Jeus Cortez',
  //     age: 26,
  //     stressLevel: 7,
  //     job: {
  //       title: 'Software Developer',
  //       company: 'Google'
  //     },
  //     location: {
  //         city: 'Compton',
  //         country: "United States"
  //     }
  //   }).then( () => {//if successful
  //     console.log('Data is saved');
  //   }).catch((e) => { //catch error
  //     console.log('This is failed. ' , e);
  //   });


  //   database.ref().update({
  //     stressLevel: 9,
  //     'job/company': 'Amazon',
  //     'location/city': 'Seattle'
  //   });



  // Example of remove with SET() database.ref('isSingle').set(null);

  // Updating Data
  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data removed');
  //   })
  //   .catch( (e) => {
  //     console.log('Did not remove data',e);
  //   });



//Reading Data from DB
// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching.',e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// },3500);

// setTimeout(() => {
//   database.ref().off('value',onValueChange);
// },7000);

// setTimeout(() => {
//   database.ref('age').set(28);
// },10500);


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();  
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//     console.log('error with data fetching.',e);
//   });


// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });