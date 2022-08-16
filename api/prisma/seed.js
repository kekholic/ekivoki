const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  const collection = await prisma.collection.createMany({
    data: [{ title: 'Эльбрус' }, { title: 'Олег' }],
  });

  const card = await prisma.card.createMany({
    data: [
      // карточки за 1
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Лукбук", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Нэпман", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Облако межзвездного газа", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Собрание сочинений", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Потомственная ясновидящая", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Плевать с блакона", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Винтаж", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Сельсовет", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Атмосферный фронт", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Капитан Очевидность", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Портсигар отечественный", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Еврейская мама", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Блокбастер", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Чувства верующих", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Дом высокой культуры быта", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Синхронная коллективная медитация", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "До чужого добра жадные", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Спрашивать по журналу", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Заумь", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Кастет", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Креатив", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Неунывающие децибелы", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Заказ", не используя однокоренные слова',
        type: 1,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий объяснит его словами',
        questionForHost: 'Объясните словами: "Мигрень-работать лень", не используя однокоренные слова',
        type: 1,
      },
      // карточки за 2
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Парфюмерия" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Политинформация" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Радиолокация" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Вагонзавод" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Космоэнергетика" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Пылсеборник" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Концертмейстер" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Уравниловка" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Античастица" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Некрономикон" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Барахолка" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Кормилица" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Эквилибристика" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Чернокнижник" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Коминтерн" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Реинкарнация" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Бонифаций" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Параллелепипед" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Вдохновение" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Банкомат" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Иллюзионист" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Виолончелистка" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Картофелекопалка" наоборот',
        type: 2,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий прочитает слово наоборот',
        questionForHost: 'Прочтите слово "Аскорбинка" наоборот',
        type: 2,
      },
      // карточки за 3
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Стрелка на колготках"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Летопись"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Идти лесом"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Бардачок"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Чертовка"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Свечной заводик"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Куклачев"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Пир на весь мир"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Конь в пальто"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "25-й кадр"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Морда кирпичом"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Вернулся муж из командировки"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Лысая певица"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Снежный человек"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Царь горох"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Изгонять бесов"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Паравозик из Ромашкова"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Площадь круга"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Лазерная арфа"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Ночная ваза"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Мурзилка"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Хохлома"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Заявление"',
        type: 3,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово по рисунку',
        questionForHost: 'Нарисуйте следующее: "Писаная красавица"',
        type: 3,
      },
      // карточки за 4
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Худеем вместе"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Мумия возвращается"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Каменный цветок"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Прикинуться веником"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Летающий макаронный монстр"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Бешеные деньги"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Дресированная собачка"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Труд сделал из обезьяны человека"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Жук лапкой потрогал"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Завраться"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Развести свинарник"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Отпрыск"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Контрабас звучит низко"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Снимать порчу"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Лоботомия"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Энергетический вампир"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Плюнула на плешь ему и послала к лешему"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Делить на ноль нельзя"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Иероглиф"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Баба на чайник"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Вшивый интеллигент"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Попасть в кадр"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Конкретный пацан"',
        type: 4,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово, ведущий будет объяснять жестами',
        questionForHost: 'Объясните жестами: "Жим лежа"',
        type: 4,
      },
      // карточки за 5
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Йог". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Чернильница". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Опарыш". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Домкрат". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Дед Мороз". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Штраф". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Микрофон". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Шарманка". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Колос". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Гадалка". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Изолента". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Династия". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Фотошоп". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Знахарь". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Крепостной". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Кикимора". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Шапокляк". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Указка". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Певчий". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Вантуз". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Басня". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Маска". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Пуговица". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
      },
      {
        collectionId: 1,
        questionForPlayers: 'Отгадайте слово,задавая поочереди вопросы ведущему, он может отвечать да/нет',
        questionForHost: 'Ваше слово: "Вывих". Вы можете только отвечать да/нет на вопросы.',
        type: 5,
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
