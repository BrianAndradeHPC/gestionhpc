export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const datos = req.body;

    // Si quisieras guardar en Google Sheets, acá iría ese código.
    console.log("📥 Datos recibidos:", datos);

    // Simulación de guardado exitoso
    return res.status(200).json({ mensaje: "✔ Datos recibidos y procesados correctamente" });
  } catch (error) {
    console.error("❌ Error en la API:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
