import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore';
import { Wealth } from '../models/wealth';
import { app } from '../firebase.config'; // make sure this exports the Firebase `app`

@Injectable({
  providedIn: 'root'
})
export class WealthServiceService {

  private db = getFirestore(app);
  private collectionName = 'wealth';

  async addWealthEntry(wealth: Wealth): Promise<string | undefined> {
    try {
      const docRef = await addDoc(collection(this.db, this.collectionName), wealth);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return undefined;
    }
  }

  async getAllWealthEntries(): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, this.collectionName));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error("Error getting documents: ", e);
      return [];
    }
  }
}
