Описание
--------

Каждое задание представляет из себя отдельный JS файл, в котором вам необходимо дописать тело
одной (или двух) функций. Данная функция должна решать задачу поставленную в условии. При запуске
JS файла в браузере в консоле будут выведены результаты прохода тестов:


    - Right triangle case
    - Equilateral triangle case
    - Third case
    + Fourth case
    + Zero side case`
    Done!


Результат показывает, что первые три теста не прошли (ваш код выдал неверный результат), а последние
два успешно прошли. Задание считается законченным когда все тесты прошли успешно.

Подготовка
----------
Создайте HTML файл, который будет подключать JavaScript файл `task0.js`. При открытии такого
HTML файла в браузере в Chrome Developer Tools консоли должно отображаться надпись "Hallo Welt!"

Задача 1
--------
Напишите функцию `canBeTriangle`, которая возвращает true, если числа a, b, c могут быть
сторонами треугольника.

Задача 2
--------
Дано число секунд, которое задаёт промежуток времени. Функция `getMinutes` должна подсчитать
количество минут, прошедших с последнего полного часа.

Задача 3
--------
Дано число секунд, которое задаёт промежуток времени. Функция `getTime` должна сформировать строку
с указанием количества часов, минут и секунд. Количество часов, минут и секунд должно записываться
двузначным числом.

Задача 4
--------
Для данных `N` и `a` найти N-ый член последовательности

    S[0] = 0
    S[i] = a - 2*S[i-1]

Задача 5
--------
Число x - трёхзначное. Напишите функцию `sumDigits`, которая будет подсчитывать сумму цифр числа x.

Задача 6
--------
Даны целые положительные числа A, B, C. На прямоугольнике размера AxB размещено максимально возможное
количество квадратов со стороной C (без наложений). Найти количество квадратов, размещенных на
прямоугольнике, а также площадь незанятой части прямоугольника.