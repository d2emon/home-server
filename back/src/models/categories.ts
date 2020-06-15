class Category {
    private static lastItemId = 0;

    itemId: number;

    title: string;

    image?: string;

    text?: string;

    constructor(title: string, text?: string, image?: string) {
        Category.lastItemId += 1;
        this.itemId = Category.lastItemId;
        this.title = title;
        this.text = text;
        this.image = image;
    }
}

const categories: Category[] = [
    new Category(
        'Игры',
        'Что наша жизнь - игра&hellip;',
    ),
    new Category(
        'Искусство',
        'Статьи об искусстве и творчестве',
    ),
    new Category(
        'История',
        'В детстве у меня была таблица для сравнения разных исторических событий - какие из них произошли '
            + 'раньше, а какие позже. К тому же этот проект поможет мне пополнить отсутствие знаний по истории.',
    ),
    new Category(
        'Культура',
    ),
    new Category(
        'Луганск',
        'Луганск - моя родина и я, черт возьми, люблю этот город',
    ),
    new Category(
        'Менеджмент',
    ),
    new Category(
        'Миры',
        'Эти миры, созданные исключительно фантазией их авторов, получились настолько красивыми и интересными, '
            + 'что многим бы хотелось, чтобы они существовали в реальности. К сожалению, экскурсия по ним возможна '
            + 'только виртуальная.',
    ),
    new Category(
        'Наука',
        'Материалы по точным наукам',
    ),
    new Category(
        'Паранаучное',
        'Всякие ненаучные, псевдонаучные и паранаучные исследования',
    ),
    new Category(
        'Природа',
        'Этот проект является отражением моих увлечений биологией. Все, что касается растений, животных и всего '
            + 'живого на земле отправится в этот проект',
    ),
    new Category(
        'Психология',
    ),
    new Category(
        'Работа',
    ),
    new Category(
        'Техника',
    ),
    new Category(
        'Цитаты',
        'Цитаты и афоризмы',
    ),
    new Category(
        'Экономика',
    ),
    new Category(
        'Юмор',
        'Разные приколы',
    ),
    new Category(
        'Языки',
        'Полезно иногда знать иностранные языки',
    ),
]

export default () => Promise.resolve(categories);
