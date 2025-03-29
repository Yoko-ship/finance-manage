import { initializeApp } from "firebase/app";
import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDSgxKw-A3SDgv2ulY4qHi6djzgjwIOghs",
    authDomain: "finance-management-94d24.firebaseapp.com",
    databaseURL: "https://finance-management-94d24-default-rtdb.firebaseio.com",
    projectId: "finance-management-94d24",
    storageBucket: "finance-management-94d24.firebasestorage.app",
    messagingSenderId: "397373835372",
    appId: "1:397373835372:web:0f67d8abce277124413049"
};

function getFullDate() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const now = new Date(); 
  const day = String(now.getDate()).padStart(2, '0');
  const name = now.getMonth()
  const monthName = month[name]
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${monthName} ${day}, ${year} ${hours}:${minutes}`;
}

const app = initializeApp(firebaseConfig);
export const writeMoneyData = (
  product,
  cost,
  category,
  type,
  overallBalance
) => {
  const db = getDatabase(app);
  const fullData = getFullDate()
  const newEntryRef = push(ref(db, type));
  set(newEntryRef, {
    product,
    cost,
    category,
    overallBalance,
    data:fullData
  });
};

export const writeBalance = (balance) => {
  const id = 0;
  const db = getDatabase(app)
  set(ref(db, "balance/" + id), {
    overallBalance: balance,
  });
};

export const readBalance = async () => {
  const db = ref(getDatabase(app))
  const spanshot = await get(child(db, "balance/0"));
  if (spanshot.exists()) {
    return spanshot.val();
  } else {
    return [];
  }
};

export const readData = async (type) => {
  const db = ref(getDatabase(app));
  const data = await get(child(db, `${type}/`));
  if (data.exists()) {
    const result = data.val();
    return Object.keys(result).map((key) => ({
      id: key,
      ...result[key],
    }));
  } else {
    return [];
  }
};


export const deleteData = async(id,type) =>{
  const db = getDatabase(app)
  const data = ref(db,`${type}/${id}`)
  await remove(data)
}

const auth = getAuth(app)
export {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}