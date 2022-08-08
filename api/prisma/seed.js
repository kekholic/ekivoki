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
        title: 'карта1',
        questions: 'карта1',
        type: '1',
        answer: 'ответ1',
      },
      {
        collectionId: 1,
        title: 'карта2',
        questions: 'карта2',
        type: '2',
      },
      {
        collectionId: 1,
        title: 'карта3',
        questions: 'карта3',
        type: '3',
        answer: 'ответ3',
      },
      {
        collectionId: 1,
        title: 'карта4',
        questions: 'карта4',
        type: '4',
        answer: 'ответ4',
      },
      {
        collectionId: 1,
        title: 'карта5',
        questions: 'карта5',
        type: '5',
        answer: 'ответ5',
      },
      {
        collectionId: 1,
        title: 'карта6',
        questions: 'карта6',
        type: '6',
        answer: 'ответ6',
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
