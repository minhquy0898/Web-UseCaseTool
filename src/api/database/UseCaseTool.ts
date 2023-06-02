
import { collection,  doc,  getDoc,  getDocs,  query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';




const CollectionName  = 'Project'

// const getProjectsByUid =async (uid:string) => {
//     const citiesRef = collection(db, CollectionName);
//     const q = query(citiesRef, where("uid","==",uid));
//     return 0;
// }
export const getProjectByUid = async (uid: string) => {
    try {
      const ListProject: any[] = [];
      const querys:any = query(collection(db, CollectionName), where("uid", "==", uid));
      const querySnapshot = await getDocs(querys);
      querySnapshot.forEach((doc) => {
        ListProject.push({
          Pid: doc.id,
          Info: doc.data(),
        });
      });
      return ListProject;
    } catch (e) {
      console.log(e)
    }
  };
  
 export const getProject = async (pid: string) => {
    try {
      const docRef = doc(db, "Project", pid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          Pid: pid,
          Info: docSnap.data()
        }
      } 
    } catch (e) {
      console.log(e)
    }
  };
  