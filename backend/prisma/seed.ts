import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createWordsKolory = async () => {
  const wordsInput = [
    'biały',
    'czarny',
    'niebieski',
    'zielony',
    'pomarańczowy',
    'żółty',
  ];
  const descriptionsInput = [
    'kolor śniegu',
    'kolor węgla',
    'kolor nieba',
    'kolor trawy',
    'kolor pomarańczy',
    'kolor słońca',
  ];
  let i = -1;
  for (const w of wordsInput) {
    i = i + 1;
    await prisma.word.upsert({
      where: { word: w },
      update: {},
      create: {
        word: w,
        category: 'kolory',
        description: descriptionsInput.at(i),
      },
    });
  }
};

async function main() {
  await createWordsKolory();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
