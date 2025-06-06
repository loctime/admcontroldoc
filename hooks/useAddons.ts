// src/hooks/useAddons.ts
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase/config"

// Definimos el tipo de mejora
export interface Addon {
  id: string
  name: string
  description: string
  price: number
}

export function useAddons() {
  const [addons, setAddons] = useState<Addon[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAddons = async () => {
      const snapshot = await getDocs(collection(db, "addons"))
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Addon[]
      setAddons(data)
      setLoading(false)
    }

    fetchAddons()
  }, [])

  return { addons, loading }
}
