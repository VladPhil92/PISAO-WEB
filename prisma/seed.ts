import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";
import { slugify } from "../lib/utils";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "cambiar-esta-clave";

  const admin = await prisma.usuario.upsert({
    where: { email: "admin@pisaogastrobar.com" },
    update: {},
    create: {
      nombre: "Administrador PISÁO",
      email: "admin@pisaogastrobar.com",
      passwordHash: await bcrypt.hash(adminPassword, 10),
      rol: "ADMIN",
    },
  });

  const categorias = [
    { nombre: "Entradas", slug: "entradas", orden: 1 },
    { nombre: "Fuertes", slug: "fuertes", orden: 2 },
    { nombre: "Cócteles", slug: "cocteles", orden: 3 },
    { nombre: "Postres", slug: "postres", orden: 4 },
  ];

  for (const categoria of categorias) {
    await prisma.categoria.upsert({
      where: { slug: categoria.slug },
      update: {},
      create: categoria,
    });
  }

  const entradas = await prisma.categoria.findUniqueOrThrow({
    where: { slug: "entradas" },
  });

  await prisma.producto.upsert({
    where: { slug: slugify("Ceviche caribeño") },
    update: {},
    create: {
      nombre: "Ceviche caribeño",
      slug: slugify("Ceviche caribeño"),
      descripcion:
        "Pescado blanco, leche de tigre de coco, camote y chicharrón de plátano.",
      precio: 38000,
      categoriaId: entradas.id,
    },
  });

  console.log(`Usuario admin listo: ${admin.email} / ${adminPassword}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
