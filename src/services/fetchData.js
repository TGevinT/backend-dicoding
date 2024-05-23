const { Firestore } = require("@google-cloud/firestore");

async function fetchData() {
  const db = new Firestore({
    projectId: process.env.PROJECT_ID,
    databaseId: "gevinmlgc",
  });

  const predictCollection = db.collection("predictions");

  const snapshot = await predictCollection.get();

  const data = snapshot.docs.map((doc) => {
    const dt = doc.data();

    return {
      id: dt.id,
      history: {
        result: dt.result,
        createdAt: dt.createdAt,
        suggestion: dt.suggestion,
        id: dt.id,
      },
    };
  });

  return data;
}

module.exports = fetchData;
