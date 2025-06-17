"use client"

import { useState, useEffect } from "react"
import { Addon } from "../../hooks/useAddons"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export default function AdminAddonsPage() {
  const [addons, setAddons] = useState<Addon[]>([])
  const [loading, setLoading] = useState(true)

  const [newAddon, setNewAddon] = useState({
    name: "",
    description: "",
    price: "",
  })

  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    loadAddons()
  }, [])

  const loadAddons = async () => {
    const snapshot = await getDocs(collection(db, "addons"))
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Addon[]
    setAddons(data)
    setLoading(false)
  }

  const handleAdd = async () => {
    if (!newAddon.name || !newAddon.price) return

    await addDoc(collection(db, "addons"), {
      name: newAddon.name,
      description: newAddon.description,
      price: parseFloat(newAddon.price),
    })

    setNewAddon({ name: "", description: "", price: "" })
    await loadAddons()
  }

  const handleUpdate = async (id: string, field: keyof Addon, value: string | number) => {
    const ref = doc(db, "addons", id)
    await updateDoc(ref, {
      [field]: field === "price" ? parseFloat(value as string) : value,
    })
    await loadAddons()
  }

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar esta mejora?")) {
      await deleteDoc(doc(db, "addons", id))
      await loadAddons()
    }
  }

  if (loading) return <div className="p-4">Cargando mejoras...</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Mejoras (Addons)</h1>

      {/* Crear nueva mejora */}
      <div className="border-border bg-card border p-4 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Agregar Nueva Mejora</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Nombre"
            value={newAddon.name}
            onChange={(e) => setNewAddon({ ...newAddon, name: e.target.value })}
          />
          <Input
            placeholder="Descripción"
            value={newAddon.description}
            onChange={(e) => setNewAddon({ ...newAddon, description: e.target.value })}
          />
          <Input
            placeholder="Precio"
            type="number"
            value={newAddon.price}
            onChange={(e) => setNewAddon({ ...newAddon, price: e.target.value })}
          />
        </div>
        <Button className="mt-4" onClick={handleAdd}>
          Agregar Mejora
        </Button>
      </div>

      {/* Lista de mejoras */}
      <div className="space-y-4">
        {addons.map((addon) => (
          <div key={addon.id} className="border-border bg-card border p-4 rounded-xl">
            {editingId === addon.id ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  value={addon.name}
                  onChange={(e) => handleUpdate(addon.id, "name", e.target.value)}
                />
                <Input
                  value={addon.description}
                  onChange={(e) => handleUpdate(addon.id, "description", e.target.value)}
                />
                <Input
                  type="number"
                  value={addon.price}
                  onChange={(e) => handleUpdate(addon.id, "price", e.target.value)}
                />
                <Button onClick={() => setEditingId(null)}>✅ Guardar</Button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">{addon.name}</h3>
                  <p className="text-muted-foreground">{addon.description}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="text-primary font-semibold">${addon.price}/mes</span>
                  <Button variant="secondary" onClick={() => setEditingId(addon.id)}>
                    Editar
                  </Button>
                  <Button variant="destructive" onClick={() => handleDelete(addon.id)}>
                    Eliminar
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
