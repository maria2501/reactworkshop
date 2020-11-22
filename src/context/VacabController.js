import { useEffect, useState } from 'react';
import firebase from 'firebase';


const VocabController = () => {

    const col = firebase.firestore().collection('vocabs');

    const [vocabs, setVocabs] = useState(null);

    useEffect(() =>{
        const unsub = col.onSnapshot((snapshot) =>{

            const dataList = snapshot.docs.map((doc) =>{
                const dataObj = doc.data();
                return {
                    ...dataObj,
                    createdAt: dataObj.createdAt ? dataObj.createdAt.toDate():null
                }
            });
            setVocabs(dataList);
        });
        return() =>{
            unsub();
        }

    },[]);


    const addVocab = (word, types, meanings) => {
        
       return col.doc(word).set(  {
            word,
            types,
            meanings: meanings.split(",").map((item) => item.trim()),
            createdAt: new Date()
        })
    }


    const deleteVocab = (word) => {
     return col.doc(word).delete();
        
    }

    return {
        vocabs,
        setVocabs,
        addVocab,
        deleteVocab
    }
}

export default VocabController;