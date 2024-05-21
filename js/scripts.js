const translations = {
    pt: {
        menuTitle: 'Menu',
        dishTitle: 'Prato',
        weekdayTitle: 'Dias da Semana',
        saturdayTitle: 'Sábados',
        sundayHolidayTitle: 'Domingos e Feriados',
        dishes: {
            feijoada: 'Feijoada',
            picanha: 'Picanha'
        },
        prices: {
            'feijoada-weekday': 'R$ 25,00',
            'feijoada-saturday': 'R$ 30,00',
            'feijoada-sunday': 'R$ 35,00',
            'picanha-weekday': 'R$ 45,00',
            'picanha-saturday': 'R$ 50,00',
            'picanha-sunday': 'R$ 55,00'
        }
    },
    en: {
        menuTitle: 'Menu',
        dishTitle: 'Dish',
        weekdayTitle: 'Weekdays',
        saturdayTitle: 'Saturdays',
        sundayHolidayTitle: 'Sundays and Holidays',
        dishes: {
            feijoada: 'Feijoada',
            picanha: 'Picanha Steak'
        },
        prices: {
            'feijoada-weekday': '$ 5.00',
            'feijoada-saturday': '$ 6.00',
            'feijoada-sunday': '$ 7.00',
            'picanha-weekday': '$ 9.00',
            'picanha-saturday': '$ 10.00',
            'picanha-sunday': '$ 11.00'
        }
    },
    es: {
        menuTitle: 'Menú',
        dishTitle: 'Plato',
        weekdayTitle: 'Días de la Semana',
        saturdayTitle: 'Sábados',
        sundayHolidayTitle: 'Domingos y Festivos',
        dishes: {
            feijoada: 'Feijoada',
            picanha: 'Bife de Picanha'
        },
        prices: {
            'feijoada-weekday': '€ 5,00',
            'feijoada-saturday': '€ 6,00',
            'feijoada-sunday': '€ 7,00',
            'picanha-weekday': '€ 9,00',
            'picanha-saturday': '€ 10,00',
            'picanha-sunday': '€ 11,00'
        }
    },
    fr: {
        menuTitle: 'Menu',
        dishTitle: 'Plat',
        weekdayTitle: 'Jours de la Semaine',
        saturdayTitle: 'Samedis',
        sundayHolidayTitle: 'Dimanches et Jours Fériés',
        dishes: {
            feijoada: 'Feijoada',
            picanha: 'Steak de Picanha'
        },
        prices: {
            'feijoada-weekday': '€ 5,00',
            'feijoada-saturday': '€ 6,00',
            'feijoada-sunday': '€ 7,00',
            'picanha-weekday': '€ 9,00',
            'picanha-saturday': '€ 10,00',
            'picanha-sunday': '€ 11,00'
        }
    }
};

document.getElementById('languageSelector').addEventListener('change', function() {
    const lang = this.value;
    const translation = translations[lang];

    document.getElementById('menu-title').innerText = translation.menuTitle;
    document.getElementById('dish-title').innerText = translation.dishTitle;
    document.getElementById('weekday-title').innerText = translation.weekdayTitle;
    document.getElementById('saturday-title').innerText = translation.saturdayTitle;
    document.getElementById('sunday-holiday-title').innerText = translation.sundayHolidayTitle;

    document.querySelectorAll('.dish-name').forEach(function(element) {
        const key = element.getAttribute('data-key');
        element.innerText = translation.dishes[key];
    });

    document.querySelectorAll('.price').forEach(function(element) {
        const key = element.getAttribute('data-key');
        element.innerText = translation.prices[key];
    });
});
