import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCfI9K_tKSdLk_waWwbkEODW4UcFLq38Yk",
  authDomain: "rentaj-rn.firebaseapp.com",
  projectId: "rentaj-rn",
  storageBucket: "rentaj-rn.appspot.com",
  messagingSenderId: "811391588539",
  appId: "1:811391588539:web:e18176254287c55992f19e",
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
