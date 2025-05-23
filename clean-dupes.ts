import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const groups = await prisma.transaction.groupBy({
    by: ["transactionId"],
    _count: { transactionId: true },
    having: { transactionId: { _count: { gt: 1 } } },
  });

  for (const g of groups) {
    const recs = await prisma.transaction.findMany({
      where: { transactionId: g.transactionId },
      orderBy: { date: "asc" },
      select: { id: true },
    });

    const toDelete = recs.slice(1).map(r => r.id);
    if (toDelete.length) {
      await prisma.transaction.deleteMany({
        where: { id: { in: toDelete } },
      });
      console.log(`Removed ${toDelete.length} dupes for ${g.transactionId}`);
    }
  }
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
