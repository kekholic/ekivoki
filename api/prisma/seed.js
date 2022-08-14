const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  const collection = await prisma.collection.createMany({
    data: [{ title: 'Эльбрус' }, { title: 'Олег' }],
  });

  const card = await prisma.card.createMany({
    data: [
      {
        collectionId: 1,
        questionForPlayers: 'плеер1',
        questionForHost: 'хост1',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'плеер2',
        questionForHost: 'хост2',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'плеер3',
        questionForHost: 'хост3',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'плеер4',
        questionForHost: 'хост4',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'плеер5',
        questionForHost: 'хост5',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'плеер6',
        questionForHost: 'хост6',
        type: 6,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
